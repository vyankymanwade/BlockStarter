'use strict';

var routes = require('next-routes')();

routes.add('/projects/new', '/projects/new').add('/projects/:address', '/projects/show').add('/projects/:address/requests', '/projects/requests/index').add('/projects/:address/requests/new', '/projects/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGlCQUN5QixBQUR6QixpQkFFSyxBQUZMLElBRVMsQUFGVCxzQkFFOEIsQUFGOUIsa0JBR0ssQUFITCxJQUdTLEFBSFQsK0JBR3VDLEFBSHZDLDRCQUlLLEFBSkwsSUFJUyxBQUpULG1DQUkyQyxBQUozQzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ikc6L09ubGluZSBjb3Vyc2VzL2Jsb2NrY2hhaW4vQmxvY2tjaGFpbi1wcm9qZWN0L0Jsb2NrU3RhcnRlciJ9