import React,{Component} from 'react';
import Layout from '../../../components/layout';
import {Link,Router} from '../../../routes';
import {Form,Button,Input,Message} from 'semantic-ui-react';
import Project from '../../../ethereum/project';
import web3 from '../../../ethereum/web3';

class RequestNew extends Component
{
    state = {
        description:'',
        value:'',
        recipient:'',
        errorMessage:'',
        loading:false
    }

    static async getInitialProps(props)
    {
        const address = props.query.address;

        return {address:address};
    }

    onSubmit = async (event)=>{

        event.preventDefault();

        const project = Project(this.props.address);

        this.setState({loading:true,errorMessage:''});
        try
        {
            const account = web3.eth.defaultAccount;

            await project.methods.createRequest(
                this.state.description,
                web3.utils.toWei(this.state.value,'ether'),
                this.state.recipient)
                .send({
                from:account,
            })

            Router.pushRoute(`/projects/${this.props.address}/requests/`);
        }
        catch(err)
        {
            this.setState({errorMessage:err.message});
        }

        this.setState({loading:false});
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
        return(
            <Layout>
                <h3>Create New Request</h3>
                <Form onSubmit = {this.onSubmit} error = {!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Description</label>
                        <Input 
                            value={this.props.description}
                            onChange = {event => this.setState({description: event.target.value})} />
                    </Form.Field>
                    <Form.Field>
                        <label>Amount In Ether</label>
                        <Input 
                            value={this.props.value}
                            onChange = {event => this.setState({value: event.target.value})} />
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Input 
                            value={this.props.recipient}
                            onChange = {event => this.setState({recipient: event.target.value})} />
                    </Form.Field>
                    <Button primary loading = {this.state.loading}>Create Request!</Button>
                    <Message error header = "Oops!Something went wrong!" content = {this.state.errorMessage} />
                </Form>
            </Layout>
        );
    }
}

export default RequestNew;