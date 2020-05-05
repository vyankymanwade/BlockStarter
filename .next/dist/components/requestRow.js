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

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _project = require('../ethereum/project');

var _project2 = _interopRequireDefault(_project);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'G:\\Online courses\\blockchain\\Blockchain-project\\BlockStarter\\components\\requestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var project, account;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            project = (0, _project2.default)(_this.props.address);
                            //this.setState({loading:true,errorMessage:''});

                            _context.prev = 1;
                            account = _web2.default.eth.defaultAccount;
                            _context.next = 5;
                            return project.methods.approveRequest(_this.props.id).send({
                                from: account
                            });

                        case 5:

                            _routes.Router.replaceRoute('/projects/' + _this.props.address + '/requests');
                            _context.next = 11;
                            break;

                        case 8:
                            _context.prev = 8;
                            _context.t0 = _context['catch'](1);

                            _this.setState({ errorMessage: _context.t0.message });

                        case 11:

                            _this.setState({ loading: false });

                        case 12:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2, [[1, 8]]);
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var project, account;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            project = (0, _project2.default)(_this.props.address);
                            //this.setState({loading:true,errorMessage:''});

                            _context2.prev = 1;
                            account = _web2.default.eth.defaultAccount;
                            _context2.next = 5;
                            return project.methods.finalizeRequest(_this.props.id).send({
                                from: account
                            });

                        case 5:

                            _routes.Router.replaceRoute('/projects/' + _this.props.address + '/requests');
                            _context2.next = 11;
                            break;

                        case 8:
                            _context2.prev = 8;
                            _context2.t0 = _context2['catch'](1);

                            _this.setState({ errorMessage: _context2.t0.message });

                        case 11:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2, [[1, 8]]);
        })), _this.loadAccount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            window.ethereum.enable().then(function (accounts) {
                                var account = accounts[0];
                                _web2.default.eth.defaultAccount = account;
                            });

                        case 1:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    // state = {
    //     loading:false,
    //     errorMessage:'',
    // }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            this.loadAccount();
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;

            var readyToFinalize = this.props.request.approvalCount > this.props.request.approversCount / 2;
            return _react2.default.createElement(Row, { disabled: this.props.request.isComplete, positive: readyToFinalize && !this.props.request.isComplete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, this.props.id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, this.props.request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _web2.default.utils.fromWei(this.props.request.value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, this.props.request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, this.props.request.approvalCount, '/', this.props.approversCount), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, this.props.request.isComplete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, 'Approve')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, this.props.request.isComplete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, 'Finalize')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJQcm9qZWN0IiwiUm91dGVyIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsInByb2plY3QiLCJwcm9wcyIsImFkZHJlc3MiLCJhY2NvdW50IiwiZXRoIiwiZGVmYXVsdEFjY291bnQiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwicmVwbGFjZVJvdXRlIiwic2V0U3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwibG9hZGluZyIsIm9uRmluYWxpemUiLCJmaW5hbGl6ZVJlcXVlc3QiLCJsb2FkQWNjb3VudCIsIndpbmRvdyIsImV0aGVyZXVtIiwiZW5hYmxlIiwidGhlbiIsImFjY291bnRzIiwiUm93IiwiQ2VsbCIsInJlYWR5VG9GaW5hbGl6ZSIsInJlcXVlc3QiLCJhcHByb3ZhbENvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpc0NvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQVEsQUFBTzs7QUFDZixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVEsQUFBYTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQU9GLHFGQUFZLG1CQUFBO3lCQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUVGO0FBRkUsc0NBRVEsdUJBQVEsTUFBQSxBQUFLLE1BRnJCLEFBRVEsQUFBbUIsQUFDbkM7QUFIUTs7NENBTUU7QUFORixzQ0FNWSxjQUFBLEFBQUssSUFOakIsQUFNcUI7NENBTnJCOzJDQU9FLEFBQVEsUUFBUixBQUFnQixlQUFlLE1BQUEsQUFBSyxN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O0FBQUEsb0JBRVEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixhQUFuQixBQUFnQyx1QkFDNUIsQUFBQyx5Q0FBTyxPQUFSLEFBQWdCLFNBQVMsT0FBekIsTUFBK0IsU0FBVyxLQUExQyxBQUErQzs4QkFBL0M7Z0NBQUE7QUFBQTthQUFBLEVBVGhCLEFBTUksQUFHWSxBQUlaLDZCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBRVE7QUFGUjtBQUFBLG9CQUVRLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsYUFBbkIsQUFBZ0MsdUJBQzVCLEFBQUMseUNBQU8sT0FBUixBQUFnQixRQUFPLE9BQXZCLE1BQTZCLFNBQVcsS0FBeEMsQUFBNkM7OEJBQTdDO2dDQUFBO0FBQUE7YUFBQSxFQWpCcEIsQUFDSSxBQWFJLEFBR1ksQUFNdkI7Ozs7O0EsQUFwRm9CLEFBdUZ6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJyZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ikc6L09ubGluZSBjb3Vyc2VzL2Jsb2NrY2hhaW4vQmxvY2tjaGFpbi1wcm9qZWN0L0Jsb2NrU3RhcnRlciJ9