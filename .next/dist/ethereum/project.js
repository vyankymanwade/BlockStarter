'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Project = require('./build/Project.json');

var _Project2 = _interopRequireDefault(_Project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {

    return new _web2.default.eth.Contract(JSON.parse(_Project2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxwcm9qZWN0LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJjb21waWxlZFByb2plY3QiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUVBLEFBQU8sQUFBUCxBQUE0QixBQUE1QixBQUVBOzs7Ozs7a0JBQWUsVUFBQyxBQUFELFNBQVksQUFFdkI7O1dBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ0gsS0FBSyxBQUFMLE1BQVcsa0JBQWdCLEFBQTNCLEFBREcsWUFFSCxBQUZHLEFBQVAsQUFJSDtBQU5EIiwiZmlsZSI6InByb2plY3QuanMiLCJzb3VyY2VSb290IjoiRzovT25saW5lIGNvdXJzZXMvYmxvY2tjaGFpbi9CbG9ja2NoYWluLXByb2plY3QvQmxvY2tTdGFydGVyIn0=