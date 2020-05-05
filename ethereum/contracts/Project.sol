pragma solidity ^0.4.17;


contract ProjectFactory
{
    
    address[] public deployedProjects;
    
    function createProject(uint minimum) public 
    {
        address newProject = new Project(minimum,msg.sender);
        deployedProjects.push(newProject);
    }
    
    function getDeployedProjects() public view returns(address[])
    {
        return deployedProjects;
    }
}

contract Project
{
    
    struct Request
    {
        string description;
        uint value;
        address recipient;
        bool isComplete;
        uint approvalCount;
        mapping(address =>bool) votedApprovers;
    }
    
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    Request[] public requests;
    uint public approversCount;
    
    modifier restricted()
    {
        require(msg.sender == manager);
        _;
    }
    
    function Project(uint minimum,address creator) public
    {
        manager = creator;
        minimumContribution = minimum;
    }
    
    function contribute() public payable
    {
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string description,uint value,address recipient) public restricted
    {
        Request memory newRequest = Request({
            description:description,
            value:value,
            recipient:recipient,
            isComplete:false,
            approvalCount:0
        });
        
        requests.push(newRequest);
    }
    
    function approveRequest(uint index) public
    {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.votedApprovers[msg.sender]);
        
        request.votedApprovers[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finalizeRequest(uint index) public restricted
    {
        Request storage request = requests[index];
        
        require(!request.isComplete);
        require(request.approvalCount > approversCount/2);
        
        request.recipient.transfer(request.value);
        request.isComplete = true;
    }

    function getProjectDetails() public view returns(uint,uint,uint,uint,address) 
    {
        return(
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns(uint)
    {
        return requests.length;
    }
}






