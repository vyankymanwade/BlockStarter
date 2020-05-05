import React,{Component} from 'react';
import Layout from '../../components/layout';
import Project from '../../ethereum/project';
import { Card , Grid, Button} from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/contributeForm';
import {Link} from '../../routes';

class ProjectShow extends Component
{
    

    static async getInitialProps(props)
    {
        const project = Project(props.query.address);
        const projectDetails = await project.methods.getProjectDetails().call();
        

        return {
            address:props.query.address,
            minimumContribution:projectDetails[0],
            balance:projectDetails[1],
            requestsCount:projectDetails[2],
            approversCount:projectDetails[3],
            manager:projectDetails[4]
        };
    }

    renderCards()
    {
        const 
        {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount,
        } = this.props;

        const items = [
            {
                header:manager,
                meta:'Address of manager',
                description:'The manager created the Project and can make request to withdraw money',
                style:{overflowWrap:'break-word'}
            },
            {
                header:minimumContribution,
                meta:'Minimum Contribution(Wei)',
                description:'You must pay atleast this much of wei to become the approver'
            },
            {
                header:requestsCount,
                meta:'Number Of Requests',
                description:'Request tries to withdraw the money from contract.Request must be approved by approvers'
            },
            {
                header:approversCount,
                meta:'Numbers Of Approvers',
                description:'Number of people who had already donated to this Project'
            },
            {
                header:web3.utils.fromWei(balance,'ether'),
                meta:'Project Balance(Ether)',
                description:'This project has this much of ether left to be spend'
            }
        ];
        return <Card.Group items={items} />
    }
    render()
    {
        return(
            <Layout>
                <h3>Project Details</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <ContributeForm address = {this.props.address}/>  
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route = {`/projects/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>Show Requests!</Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>    
            </Layout>
        );
    }
}

export default ProjectShow;