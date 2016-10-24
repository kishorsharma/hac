
let RBAC = require('../middleware/rbac');
let data = require('./testData');

describe('RBAC test', function() {
	it('canary test', function (done) {
        done();
    });

});
describe('resolve current role operations', function () {
    it('should respect operations', function (done) {
        (new RBAC(data))
        .can('user', 'post:add')
        .then(function () {
            done();
        }, function (err) {
        	console.log(err);
            done(new Error('Should not reject'));
        });
    });
    it('should reject undefined operations', function (done) {
        (new RBAC(data))
        .can('user', 'post:what')
        .then(function () {
            done(new Error('Should not be allowed'));
        }, function () {
            done();
        });
    });
});