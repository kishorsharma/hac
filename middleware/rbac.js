let Q = require('q');

/**
* Role based access control to have control over action performed by
* a principle (End User in most case).
*/
function RBAC (config) {
	if(!config.roles || typeof config.roles !== 'object') {
		throw 'Expected roles in config to be an object';
	}
	this.roles = config.roles;
}

/**
 * Initialize RBAC.
 * 
 */
RBAC.prototype.init = function() {
    // Initialize with in memory datasotre for role fetch
    // provide way to dynamically load all roles into memory for validation
    // other specific implementation detail for example how role model is 
    // identified
};

/**
 * Check user with role is able to perform operation or not.
 */
RBAC.prototype.can = function (role, operation) {
	
	// Check if role exists
    if(!this.roles[role]) {
        return false;
    }

    let that = this;
    return Q.promise(function (resolve, reject){
    	if (that.roles[role] && that.roles[role].can.indexOf(operation) !== -1) {
			resolve();
		} else {
			reject()
		}
    });

    
};

module.exports = RBAC;