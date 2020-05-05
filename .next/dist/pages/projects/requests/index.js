'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _layout = require('../../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _routes = require('../../../routes');

var _semanticUiReact = require('semantic-ui-react');

var _project = require('../../../ethereum/project');

var _project2 = _interopRequireDefault(_project);

var _requestRow = require('../../../components/requestRow');

var _requestRow2 = _interopRequireDefault(_requestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'G:\\Online courses\\blockchain\\Blockchain-project\\BlockStarter\\pages\\projects\\requests\\index.js?entry';


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'renderRows',
        value: function renderRows() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                return _react2.default.createElement(_requestRow2.default, {
                    request: request,
                    key: index,
                    id: index,
                    address: _this2.props.address,
                    approversCount: _this2.props.approversCount, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Row = _semanticUiReact.Table.Row,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Request'), _react2.default.createElement(_routes.Link, { route: '/projects/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', primary: true, style: { marginBottom: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Add Request!'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Amount'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Recipient'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'Approve'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Finalize'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, this.renderRows())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'Found ', this.props.requestsCount, ' request'));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, project, requestsCount, approversCount, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                project = (0, _project2.default)(address);
                                _context.next = 4;
                                return project.methods.getRequestsCount().call();

                            case 4:
                                requestsCount = _context.sent;
                                _context.next = 7;
                                return project.methods.approversCount().call();

                            case 7:
                                approversCount = _context.sent;
                                _context.next = 10;
                                return _promise2.default.all(Array(parseInt(requestsCount)).fill().map(function (element, index) {
                                    return project.methods.requests(index).call();
                                }));

                            case 10:
                                requests = _context.sent;

                                console.log(requests);

                                return _context.abrupt('return', {
                                    address: address,
                                    requestsCount: requestsCount,
                                    requests: requests,
                                    approversCount: approversCount
                                });

                            case 13:
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

    return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwcm9qZWN0c1xccmVxdWVzdHNcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiTGluayIsIkJ1dHRvbiIsIlRhYmxlIiwiUHJvamVjdCIsIlJlcXVlc3RSb3ciLCJSZXF1ZXN0SW5kZXgiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsImFwcHJvdmVyc0NvdW50IiwiSGVhZGVyIiwiSGVhZGVyQ2VsbCIsIlJvdyIsIkJvZHkiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJSb3dzIiwicmVxdWVzdHNDb3VudCIsInF1ZXJ5IiwicHJvamVjdCIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBVzs7QUFDbkIsQUFBUSxBQUFPOztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7cUNBMEJGO3lCQUNJOzt3QkFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBUyxPQUFTLEFBQzdDO3VDQUNJLEFBQUM7NkJBQUQsQUFDVyxBQUNYO3lCQUZBLEFBRU8sQUFDUDt3QkFIQSxBQUdNLEFBQ047NkJBQVcsT0FBQSxBQUFLLE1BSmhCLEFBSXNCLEFBQ3RCO29DQUFrQixPQUFBLEFBQUssTUFMdkIsQUFLNkI7a0NBTDdCO29DQURKLEFBQ0ksQUFPUDtBQVBPO0FBQ0EsaUJBREE7QUFGUixBQUFPLEFBVVYsYUFWVTs7OztpQ0FhWDtnQkFBQSxBQUNXLFNBRFgsQUFDeUMsdUJBRHpDLEFBQ1c7Z0JBRFgsQUFDa0IsYUFEbEIsQUFDeUMsdUJBRHpDLEFBQ2tCO2dCQURsQixBQUM2QixNQUQ3QixBQUN5Qyx1QkFEekMsQUFDNkI7Z0JBRDdCLEFBQ2lDLE9BRGpDLEFBQ3lDLHVCQUR6QyxBQUNpQyxBQUM3Qjs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsNEJBQUEsQUFBQyw4QkFBSyxzQkFBc0IsS0FBQSxBQUFLLE1BQTNCLEFBQWlDLFVBQXZDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVIsQUFBa0IsU0FBUyxTQUEzQixNQUFtQyxPQUFTLEVBQUMsY0FBN0MsQUFBNEMsQUFBYzs4QkFBMUQ7Z0NBQUE7QUFBQTtlQUpaLEFBRUksQUFDSSxBQUNJLEFBR1IsbUNBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDRztBQURIO0FBQUEsK0JBQ0ksY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSztBQURMO0FBQUEsK0JBQ00sY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHVCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxnQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUdJLEFBQ0EsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkosQUFJSSxBQUNBLDhCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFDQSxtQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFOSixBQU1JLEFBQ0EsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBVFosQUFDRyxBQUNLLEFBT0ksQUFHVCwrQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFuQlAsQUFPSSxBQVlHLEFBQ0ssQUFBSyxBQUdyQixnQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBWSxlQUFBLEFBQUssTUFBakIsQUFBdUIsZUF4QnZCLEFBQ0ksQUF1QkosQUFHSDs7Ozs7aUgsQUFuRTRCOzs7OztpQ0FFbkI7QSwwQ0FBVSxNQUFBLEFBQU0sTUFDaEIsQSxBQURzQjtBLDBDQUNaLHVCLEFBQUEsQUFBUTs7dUNBQ0ksUUFBQSxBQUFRLFFBQVIsQUFBZ0IsbUIsQUFBaEIsQUFBbUM7O2lDQUF6RDtBOzt1Q0FDdUIsUUFBQSxBQUFRLFFBQVIsQUFBZ0IsaUIsQUFBaEIsQUFBaUM7O2lDQUF4RDtBOzt5REFFaUIsQUFBUSxVQUNyQixTQUFOLEFBQU0sQUFBUyxnQkFBZixBQUErQixPQUEvQixBQUNDLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBUyxPQUFRLEFBQ2xCOzJDQUFPLFFBQUEsQUFBUSxRQUFSLEFBQWdCLFNBQWhCLEFBQXlCLE9BQWhDLEFBQU8sQUFBZ0MsQUFDMUM7QSxBQUprQixBQUNuQixpQ0FBQSxDQURtQjs7aUNBQWpCO0Esb0RBTU47O3dDQUFBLEFBQVEsSUFBUixBQUFZOzs7NkNBRU4sQUFDTSxBQUNSO21EQUZFLEFBRVksQUFDZDs4Q0FIRSxBQUdPLEFBQ1Q7b0QsQUFKRSxBQUlhO0FBSmIsQUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFEWixBLEFBdkUyQjs7a0JBdUUzQixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ikc6L09ubGluZSBjb3Vyc2VzL2Jsb2NrY2hhaW4vQmxvY2tjaGFpbi1wcm9qZWN0L0Jsb2NrU3RhcnRlciJ9