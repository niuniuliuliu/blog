'use strict'
class HttpResult {
    constructor(code = 200, data = null, error = null, message = '') {
        this.code = code;
        this.data = data;
        this.error = error;
        this.message = message;
    }
}
module.exports = HttpResult;