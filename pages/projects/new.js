import React,{Component} from 'react';
import Layout from '../../components/layout';
import {Form,Button,Input,Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';

class ProjectNew extends Component
{
    state = {
            minimumContribution : '',
            errorMessage:'',
            loading:false
    }
    
    onSubmit = async (event) =>{
        event.preventDefault();
        
        this.setState({loading:true,errorMessage:''})
        try
        {
            const account = web3.eth.defaultAccount;
            await factory.methods.createProject(this.state.minimumContribution).send({
                from:account
            });

            Router.pushRoute('/');
        }
        catch(err)
        {
            this.setState({errorMessage:err.message});
        }

        this.setState({loading:false});
    };


    loadAccount = async () =>{
        window.ethereum.enable().then((accounts)=>{
            const account = accounts[0];
            web3.eth.defaultAccount = account;
        });
    }

    render()
    {
        this.loadAccount();
        return(

            <Layout>
                <h3>Create a new project</h3>
                <Form onSubmit = {this.onSubmit} error = {!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input 
                        label="wei" 
                        labelPosition="right" 
                        valuec = {this.state.minimumContribution} 
                        onChange = {event => this.setState({minimumContribution:event.target.value})}/>
                    </Form.Field>
                    <Message error header = "Oops!Something went wrong!" content = {this.state.errorMessage} />
                    <Button loading ={this.state.loading} primary>Create!</Button>
                </Form>
            </Layout>
            
        );
    }
}

export default ProjectNew;