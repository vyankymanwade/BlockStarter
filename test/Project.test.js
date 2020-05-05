const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledProject = require('../ethereum/build/Project.json');
const compiledFactory = require('../ethereum/build/ProjectFactory.json');

let accounts;
let factory;
let project;
let projectAddress;

beforeEach(async ()=>{

    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
                .deploy({data:compiledFactory.bytecode})
                .send({
                    from:accounts[0],
                    gas:'1000000'
                });
    
    await factory.methods.createProject('100').send({
        from:accounts[0],
        gas:'1000000'
    });

    const projectAddresses = await factory.methods.getDeployedProjects().call();
    projectAddress = projectAddresses[0];

    project = await new web3.eth.Contract(
        JSON.parse(compiledProject.interface),
        projectAddress
    );
    
});


describe('Project',()=>{

    it('has deployed the Project and ProjectFactory contract',()=>{

        assert.ok(factory.options.address);
        assert.ok(project.options.address);

    });

    it('caller of createProject is marked as manager',async ()=>{

        const manager = await project.methods.manager().call();
        assert.equal(accounts[0],manager);

    });

    it('allows to donate the money and mark them as a approver',async ()=>{

        await project.methods.contribute().send({
            from:accounts[1],
            value:'200'
        });

        const isApprover = await project.methods.approvers(accounts[1]).call();
        assert(isApprover);

    });

    it('requires the minimum amount to be donated',async () =>{

        try
        {
            await project.methods.createProject().send({
                from:accounts[1],
                value:'50'
            })
            assert(false);
        }
        catch(err)
        {
            assert(err);
        }

    });

    it('allows the manager to call request payment mehtod',async () =>{

        await project.methods.createRequest('buy sensors','100',accounts[1]).send({
            from:accounts[0],
            gas:'1000000'
        });

        const request = await project.methods.requests(0).call();
        assert.equal('buy sensors',request.description);

    });

    it('processes the request',async () =>{

        await project.methods.contribute().send({
            from:accounts[0],
            value:web3.utils.toWei('10','ether')
        });

        await project.methods.createRequest('buy motor',web3.utils.toWei('5','ether'),accounts[1])
            .send({
                from:accounts[0],
                gas:'1000000'
            });

        await project.methods.approveRequest(0).send({
            from:accounts[0],
            gas:'1000000'
        });

        await project.methods.finalizeRequest(0).send({
            from:accounts[0],
            gas:'1000000'
        });

        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance,'ether');
        balance = parseFloat(balance);

        assert(balance > 104);

    });
});