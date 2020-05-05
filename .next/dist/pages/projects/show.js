'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _project = require('../../ethereum/project');

var _project2 = _interopRequireDefault(_project);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _contributeForm = require('../../components/contributeForm');

var _contributeForm2 = _interopRequireDefault(_contributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'G:\\Online courses\\blockchain\\Blockchain-project\\BlockStarter\\pages\\projects\\show.js?entry';


var ProjectShow = function (_Component) {
    (0, _inherits3.default)(ProjectShow, _Component);

    function ProjectShow() {
        (0, _classCallCheck3.default)(this, ProjectShow);

        return (0, _possibleConstructorReturn3.default)(this, (ProjectShow.__proto__ || (0, _getPrototypeOf2.default)(ProjectShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(ProjectShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'Address of manager',
                description: 'The manager created the Project and can make request to withdraw money',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution(Wei)',
                description: 'You must pay atleast this much of wei to become the approver'
            }, {
                header: requestsCount,
                meta: 'Number Of Requests',
                description: 'Request tries to withdraw the money from contract.Request must be approved by approvers'
            }, {
                header: approversCount,
                meta: 'Numbers Of Approvers',
                description: 'Number of people who had already donated to this Project'
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Project Balance(Ether)',
                description: 'This project has this much of ether left to be spend'
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'Project Details'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement(_contributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(_routes.Link, { route: '/projects/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, 'Show Requests!')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var project, projectDetails;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                project = (0, _project2.default)(props.query.address);
                                _context.next = 3;
                                return project.methods.getProjectDetails().call();

                            case 3:
                                projectDetails = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minimumContribution: projectDetails[0],
                                    balance: projectDetails[1],
                                    requestsCount: projectDetails[2],
                                    approversCount: projectDetails[3],
                                    manager: projectDetails[4]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return ProjectShow;
}(_react.Component);

exports.default = ProjectShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwcm9qZWN0c1xcc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIlByb2plY3QiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJQcm9qZWN0U2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsInByb2plY3QiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRQcm9qZWN0RGV0YWlscyIsImNhbGwiLCJwcm9qZWN0RGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFPLEFBQU07O0FBQ3RCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVEsQUFBVzs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7O3NDQXFCRjt5QkFRUSxLQVJSLEFBUWE7Z0JBUmIsQUFHUSxpQkFIUixBQUdRO2dCQUhSLEFBSVEsaUJBSlIsQUFJUTtnQkFKUixBQUtRLDZCQUxSLEFBS1E7Z0JBTFIsQUFNUSx1QkFOUixBQU1RO2dCQU5SLEFBT1Esd0JBUFIsQUFPUSxBQUdKOztnQkFBTTt3QkFDRixBQUNXLEFBQ1A7c0JBRkosQUFFUyxBQUNMOzZCQUhKLEFBR2dCLEFBQ1o7dUJBQU0sRUFBQyxjQUxELEFBQ1YsQUFJVSxBQUFjO0FBSnhCLEFBQ0ksYUFGTTt3QkFPVixBQUNXLEFBQ1A7c0JBRkosQUFFUyxBQUNMOzZCQVZNLEFBT1YsQUFHZ0I7QUFIaEIsQUFDSTt3QkFJSixBQUNXLEFBQ1A7c0JBRkosQUFFUyxBQUNMOzZCQWZNLEFBWVYsQUFHZ0I7QUFIaEIsQUFDSTt3QkFJSixBQUNXLEFBQ1A7c0JBRkosQUFFUyxBQUNMOzZCQXBCTSxBQWlCVixBQUdnQjtBQUhoQixBQUNJO3dCQUtPLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ5QixBQUNXLEFBQTJCLEFBQ2xDO3NCQUZKLEFBRVMsQUFDTDs2QkF6QlIsQUFBYyxBQXNCVixBQUdnQixBQUdwQjtBQU5JLEFBQ0k7aURBS0QsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHWCxBQUNJO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG9DQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSztBQURMO29CQURKLEFBQ0ksQUFDSyxBQUFLLEFBRVYsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsMENBQWUsU0FBVyxLQUFBLEFBQUssTUFBaEMsQUFBc0M7OEJBQXRDO2dDQU5aLEFBQ0ksQUFJSSxBQUNJLEFBR1I7QUFIUTtrQ0FHUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyw4QkFBSyxzQkFBc0IsS0FBQSxBQUFLLE1BQTNCLEFBQWlDLFVBQXZDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQWhCNUIsQUFDSSxBQUVJLEFBU0ksQUFDSSxBQUNJLEFBQ0ksQUFDSSxBQVEvQjs7Ozs7aUgsQUFuRjRCOzs7OztpQ0FFbkI7QSwwQ0FBVSx1QkFBUSxNQUFBLEFBQU0sTSxBQUFkLEFBQW9COzt1Q0FDUCxRQUFBLEFBQVEsUUFBUixBQUFnQixvQixBQUFoQixBQUFvQzs7aUNBQTNEO0E7OzZDQUlNLE1BQUEsQUFBTSxNQURYLEFBQ2lCLEFBQ3BCO3lEQUFvQixlQUZqQixBQUVpQixBQUFlLEFBQ25DOzZDQUFRLGVBSEwsQUFHSyxBQUFlLEFBQ3ZCO21EQUFjLGVBSlgsQUFJVyxBQUFlLEFBQzdCO29EQUFlLGVBTFosQUFLWSxBQUFlLEFBQzlCOzZDQUFRLGUsQUFOTCxBQU1LLEFBQWU7QUFOcEIsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStFWixBLEFBMUYwQjs7a0JBMEYxQixBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRzovT25saW5lIGNvdXJzZXMvYmxvY2tjaGFpbi9CbG9ja2NoYWluLXByb2plY3QvQmxvY2tTdGFydGVyIn0=