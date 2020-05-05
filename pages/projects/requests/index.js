import React,{Component} from 'react';
import Layout from '../../../components/layout';
import {Link} from '../../../routes';
import {Button,Table} from 'semantic-ui-react';
import Project from '../../../ethereum/project';
import RequestRow from '../../../components/requestRow';

class RequestIndex extends Component
{
    static async getInitialProps(props)
    {
        const address = props.query.address;
        const project = Project(address);
        const requestsCount = await project.methods.getRequestsCount().call();
        const approversCount = await project.methods.approversCount().call();

        const requests = await Promise.all(
            Array(parseInt(requestsCount)).fill()
            .map((element,index)=>{
                return project.methods.requests(index).call();
            })
        );
        console.log(requests);

        return{
            address:address,
            requestsCount:requestsCount,
            requests:requests,
            approversCount:approversCount
        };
    }

    renderRows()
    {
        return this.props.requests.map((request,index) =>{
            return(
                <RequestRow 
                request = {request}
                key = {index}
                id = {index}
                address = {this.props.address} 
                approversCount = {this.props.approversCount}/>
            );
        });
    }

    render()
    {
        const {Header,HeaderCell,Row,Body} = Table;
        return(
            <Layout>
                <h3>Request</h3>
                <Link route = {`/projects/${this.props.address}/requests/new`}>
                    <a>
                        <Button floated = "right"  primary style = {{marginBottom:'10px'}}>Add Request!</Button>
                    </a>
                </Link>
                <Table>
                   <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                   </Header>
                   <Body>
                       {this.renderRows()}
                   </Body>
                </Table>
        <div>Found {this.props.requestsCount} request</div>
            </Layout>
        );
    }
}
export default RequestIndex;