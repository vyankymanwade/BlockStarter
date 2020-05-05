import React,{Component} from 'react';
import {Form,Button,Message,Input} from 'semantic-ui-react';
import Project from '../ethereum/project';
import web3 from '../ethereum/web3';
import {Router} from '../routes';

class ContributeForm extends Component
{

    state = {
        value:'',
        errorMessage:'',
        loading:false
    }

    loadAccount =  async () =>{

        window.ethereum.enable().then((accounts)=>{
            const account = accounts[0];
            web3.eth.defaultAccount = account;
        });
    }

    onSubmit = async (event) =>{

        event.preventDefault();
        const project = Project(this.props.address);
        this.setState({loading:true,errorMessage:''})
        try
        {
            const account = web3.eth.defaultAccount;

            await project.methods.contribute().send({
                from:account,
                value:web3.utils.toWei(this.state.value,'ether')
            });

            Router.replaceRoute(`/projects/${this.props.address}`);
        }
        catch(err)
        {
            this.setState({errorMessage:err.message});
        }
        this.setState({loading:false});
    }

    render()
    {
        this.loadAccount();
        return(
            <Form onSubmit = {this.onSubmit} error = {!!this.state.errorMessage}>
                <Form.Field>
                    <label> Amount to contribute</label>
                    <Input 
                        value = {this.state.value}
                        onChange = {event => this.setState({value:event.target.value})}
                        label = "ether" 
                        labelPosition = "right"
                    />
                </Form.Field>
                <Message error header = "Oops!Something went wrong!" content = {this.state.errorMessage} />
                <Button loading = {this.state.loading} primary>
                    Contribute!
                </Button>
            </Form>
        );
    }
}

export default ContributeForm;