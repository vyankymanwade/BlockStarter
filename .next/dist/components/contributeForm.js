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

var _project = require('../ethereum/project');

var _project2 = _interopRequireDefault(_project);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'G:\\Online courses\\blockchain\\Blockchain-project\\BlockStarter\\components\\contributeForm.js';


var ContributeForm = function (_Component) {
    (0, _inherits3.default)(ContributeForm, _Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errorMessage: '',
            loading: false
        }, _this.loadAccount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:

                            window.ethereum.enable().then(function (accounts) {
                                var account = accounts[0];
                                _web2.default.eth.defaultAccount = account;
                            });

                        case 1:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onSubmit = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
                var project, account;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:

                                event.preventDefault();
                                project = (0, _project2.default)(_this.props.address);

                                _this.setState({ loading: true, errorMessage: '' });
                                _context2.prev = 3;
                                account = _web2.default.eth.defaultAccount;
                                _context2.next = 7;
                                return project.methods.contribute().send({
                                    from: account,
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 7:

                                _routes.Router.replaceRoute('/projects/' + _this.props.address);
                                _context2.next = 13;
                                break;

                            case 10:
                                _context2.prev = 10;
                                _context2.t0 = _context2['catch'](3);

                                _this.setState({ errorMessage: _context2.t0.message });

                            case 13:
                                _this.setState({ loading: false });

                            case 14:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2, [[3, 10]]);
            }));

            return function (_x) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            this.loadAccount();
            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, ' Amount to contribute'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                label: 'ether',
                labelPosition: 'right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!Something went wrong!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'Contribute!'));
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGNvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJJbnB1dCIsIlByb2plY3QiLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsImxvYWRBY2NvdW50Iiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJ0aGVuIiwiYWNjb3VudHMiLCJhY2NvdW50IiwiZXRoIiwiZGVmYXVsdEFjY291bnQiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwcm9qZWN0IiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidXRpbHMiLCJ0b1dlaSIsInJlcGxhY2VSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFRLEFBQUssQUFBTyxBQUFROztBQUM1QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBYTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7OztnTyxBQUdGO21CQUFRLEFBQ0UsQUFDTjswQkFGSSxBQUVTLEFBQ2I7cUIsQUFISSxBQUdJO0FBSEosQUFDSixpQixBQUtKLHVGQUFlLG1CQUFBOzBFQUFBOzBCQUFBO3FEQUFBOzZCQUVYOzttQ0FBQSxBQUFPLFNBQVAsQUFBZ0IsU0FBaEIsQUFBeUIsS0FBSyxVQUFBLEFBQUMsVUFBVyxBQUN0QztvQ0FBTSxVQUFVLFNBQWhCLEFBQWdCLEFBQVMsQUFDekI7OENBQUEsQUFBSyxJQUFMLEFBQVMsaUJBQVQsQUFBMEIsQUFDN0I7QUFMVSxBQUVYOzs2QkFGVzs2QkFBQTs0Q0FBQTs7QUFBQTt3QkFBQTtBLG1CLEFBUWY7aUdBQVcsa0JBQUEsQUFBTyxPQUFQOzZCQUFBO2dGQUFBOzhCQUFBOzJEQUFBO2lDQUVQOztzQ0FBQSxBQUFNLEFBQ0E7QUFIQywwQ0FHUyx1QkFBUSxNQUFBLEFBQUssTUFIdEIsQUFHUyxBQUFtQixBQUNuQzs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE1BQUssY0FKckIsQUFJUCxBQUFjLEFBQTJCO2lEQUcvQjtBQVBILDBDQU9hLGNBQUEsQUFBSyxJQVBsQixBQU9zQjtpREFQdEI7K0NBU0csQUFBUSxRQUFSLEFBQWdCLGFBQWhCLEFBQTZCOzBDQUFLLEFBQy9CLEFBQ0w7MkNBQU0sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQVhuQyxBQVNHLEFBQWtDLEFBRTlCLEFBQWtDO0FBRkosQUFDcEMsaUNBREU7O2lDQUtOOzsrQ0FBQSxBQUFPLDRCQUEwQixNQUFBLEFBQUssTUFkbkMsQUFjSCxBQUE0QztpREFkekM7QUFBQTs7aUNBQUE7aURBQUE7a0VBa0JIOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFhLGFBbEJ6QixBQWtCSCxBQUFjLEFBQWtCOztpQ0FFcEM7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FwQlIsQUFvQlAsQUFBYyxBQUFTOztpQ0FwQmhCO2lDQUFBO2lEQUFBOztBQUFBOzBDQUFBO0E7Ozs7Ozs7Ozs7aUNBd0JYO3lCQUNJOztpQkFBQSxBQUFLLEFBQ0w7bUNBQ0ksQUFBQyx1Q0FBSyxVQUFZLEtBQWxCLEFBQXVCLFVBQVUsT0FBUyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQWpELEFBQXVEOzhCQUF2RDtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwwQ0FBQSxBQUFDO3VCQUNZLEtBQUEsQUFBSyxNQURsQixBQUN3QixBQUNwQjswQkFBWSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU0sTUFBQSxBQUFNLE9BQXBDLEFBQVMsQUFBYyxBQUFvQjtBQUYzRCxBQUdJO3VCQUhKLEFBR1ksQUFDUjsrQkFKSixBQUlvQjs7OEJBSnBCO2dDQUhSLEFBQ0ksQUFFSSxBQU9KO0FBUEk7QUFDSSxpQ0FNUixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXdCLDhCQUE2QixTQUFXLEtBQUEsQUFBSyxNQUFyRSxBQUEyRTs4QkFBM0U7Z0NBVkosQUFVSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFXLEtBQUEsQUFBSyxNQUF4QixBQUE4QixTQUFTLFNBQXZDOzhCQUFBO2dDQUFBO0FBQUE7ZUFaUixBQUNJLEFBV0ksQUFLWDs7Ozs7QUFHTCxBLEFBL0Q2Qjs7a0JBK0Q3QixBQUFlIiwiZmlsZSI6ImNvbnRyaWJ1dGVGb3JtLmpzIiwic291cmNlUm9vdCI6Ikc6L09ubGluZSBjb3Vyc2VzL2Jsb2NrY2hhaW4vQmxvY2tjaGFpbi1wcm9qZWN0L0Jsb2NrU3RhcnRlciJ9