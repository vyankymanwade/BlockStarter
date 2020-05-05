import React,{Component} from 'react';
import {Table, Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Project from '../ethereum/project';
import {Router} from '../routes';

class RequestRow extends Component
{
    // state = {
    //     loading:false,
    //     errorMessage:'',
    // }

    onApprove = async() =>{

        const project = Project(this.props.address);
        //this.setState({loading:true,errorMessage:''});
        try
        {
            const account = web3.eth.defaultAccount;
            await project.methods.approveRequest(this.props.id).send({
                from:account
            });

            Router.replaceRoute(`/projects/${this.props.address}/requests`);
        }
        catch(err)
        {
            this.setState({errorMessage:err.message});
        }

        this.setState({loading:false});
    }

    onFinalize = async ()=>{

        const project = Project(this.props.address);
        //this.setState({loading:true,errorMessage:''});
        try
        {
            const account = web3.eth.defaultAccount;
            await project.methods.finalizeRequest(this.props.id).send({
                from:account
            });

            Router.replaceRoute(`/projects/${this.props.address}/requests`);
        }
        catch(err)
        {
            this.setState({errorMessage:err.message});
        }

    }


    loadAccount = async () =>{
        window.ethereum.enable().then((accounts)=>{
            const account = accounts[0];
            web3.eth.defaultAccount = account;
        });
    }

    render()
    {
        this.loadAccount();
        const {Row,Cell} = Table;
        const readyToFinalize = this.props.request.approvalCount >this.props.request.approversCount/2;
        return(
            <Row disabled = {this.props.request.isComplete}  positive = {readyToFinalize && !this.props.request.isComplete}>
                <Cell>{this.props.id}</Cell>
                <Cell>{this.props.request.description}</Cell>
                <Cell>{web3.utils.fromWei(this.props.request.value,'ether')}</Cell>
                <Cell>{this.props.request.recipient}</Cell>
                <Cell>{this.props.request.approvalCount}/{this.props.approversCount}</Cell>
                <Cell>
                    {
                        this.props.request.isComplete ? null:(
                            <Button color = "green"  basic onClick = {this.onApprove}>Approve</Button>
                        )
                    }
                </Cell>
                <Cell>
                    {
                        this.props.request.isComplete ? null:(
                            <Button color = "teal" basic onClick = {this.onFinalize}>Finalize</Button>
                        )
                    }
                </Cell>
            </Row>
        );
    }
}

export default RequestRow;