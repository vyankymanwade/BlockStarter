'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // We are in browser AND meatamask is running on machine
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // We are on server OR matamask is not running
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/7726b1123e86406abe06c2a153cea51e');

    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBSSxZQUFKOztBQUVBLElBQUcsT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTNELGFBQ0EsQUFDSTtBQUNBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDSDtBQUpELE9BTUEsQUFDSTtBQUNBO1FBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ2IsQUFEYSxBQUFqQixBQUlBOztXQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDSDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiRzovT25saW5lIGNvdXJzZXMvYmxvY2tjaGFpbi9CbG9ja2NoYWluLXByb2plY3QvQmxvY2tTdGFydGVyIn0=