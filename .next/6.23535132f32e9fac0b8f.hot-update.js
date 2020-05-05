webpackHotUpdate(6,{

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(802);

var _layout2 = _interopRequireDefault(_layout);

var _routes = __webpack_require__(545);

var _semanticUiReact = __webpack_require__(461);

var _project = __webpack_require__(731);

var _project2 = _interopRequireDefault(_project);

var _requestRow = __webpack_require__(1315);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "G:\\Online courses\\blockchain\\Blockchain-project\\BlockStarter\\pages\\projects\\requests\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "G:\\Online courses\\blockchain\\Blockchain-project\\BlockStarter\\pages\\projects\\requests\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/projects\\requests\\index")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4yMzUzNTEzMmYzMmU5ZmFjMGI4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvamVjdHMvcmVxdWVzdHM/NzMxODA1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi8uLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQge0J1dHRvbixUYWJsZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9wcm9qZWN0JztcclxuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9yZXF1ZXN0Um93JztcclxuXHJcbmNsYXNzIFJlcXVlc3RJbmRleCBleHRlbmRzIENvbXBvbmVudFxyXG57XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBwcm9wcy5xdWVyeS5hZGRyZXNzO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBQcm9qZWN0KGFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RzQ291bnQgPSBhd2FpdCBwcm9qZWN0Lm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcclxuICAgICAgICBjb25zdCBhcHByb3ZlcnNDb3VudCA9IGF3YWl0IHByb2plY3QubWV0aG9kcy5hcHByb3ZlcnNDb3VudCgpLmNhbGwoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICAgICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdHNDb3VudCkpLmZpbGwoKVxyXG4gICAgICAgICAgICAubWFwKChlbGVtZW50LGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3QubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdHMpO1xyXG5cclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgIGFkZHJlc3M6YWRkcmVzcyxcclxuICAgICAgICAgICAgcmVxdWVzdHNDb3VudDpyZXF1ZXN0c0NvdW50LFxyXG4gICAgICAgICAgICByZXF1ZXN0czpyZXF1ZXN0cyxcclxuICAgICAgICAgICAgYXBwcm92ZXJzQ291bnQ6YXBwcm92ZXJzQ291bnRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclJvd3MoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnJlcXVlc3RzLm1hcCgocmVxdWVzdCxpbmRleCkgPT57XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxSZXF1ZXN0Um93IFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdCA9IHtyZXF1ZXN0fVxyXG4gICAgICAgICAgICAgICAga2V5ID0ge2luZGV4fVxyXG4gICAgICAgICAgICAgICAgaWQgPSB7aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzID0ge3RoaXMucHJvcHMuYWRkcmVzc30gXHJcbiAgICAgICAgICAgICAgICBhcHByb3ZlcnNDb3VudCA9IHt0aGlzLnByb3BzLmFwcHJvdmVyc0NvdW50fS8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKClcclxuICAgIHtcclxuICAgICAgICBjb25zdCB7SGVhZGVyLEhlYWRlckNlbGwsUm93LEJvZHl9ID0gVGFibGU7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGgzPlJlcXVlc3Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGUgPSB7YC9wcm9qZWN0cy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZmxvYXRlZCA9IFwicmlnaHRcIiAgcHJpbWFyeSBzdHlsZSA9IHt7bWFyZ2luQm90dG9tOicxMHB4J319PkFkZCBSZXF1ZXN0ITwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxUYWJsZT5cclxuICAgICAgICAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkRlc2NyaXB0aW9uPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QW1vdW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjaXBpZW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92YWwgQ291bnQ8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZlPC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICA8Qm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJSb3dzKCl9XHJcbiAgICAgICAgICAgICAgICAgICA8L0JvZHk+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgIDxkaXY+Rm91bmQge3RoaXMucHJvcHMucmVxdWVzdHNDb3VudH0gcmVxdWVzdDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RJbmRleDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9wcm9qZWN0cy9yZXF1ZXN0cz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFMQTtBQU9BO0FBUEE7QUFDQTtBQU9BOzs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBOURBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBREE7OztBQUNBO0FBQ0E7QUFEQTs7O0FBRUE7QUFHQTtBQUZBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTs7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9