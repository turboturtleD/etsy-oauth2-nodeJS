const { SSL_OP_MSIE_SSLV2_RSA_PADDING } = require("constants")

const client_id = `***CONSUMER API KEY***`    // Etsy public key
const salt = `***RANDOM STRING USED FOR SALT***` // Random string used for salt
const scopes = `***SCOPES IN SPACE SEPARTED LIST***`  //desired scopes in space separated list per etsy docs
const redirect_uri = `***CALLBACK URL***`  //redirect uri for token authentication

module.exports.client_id = client_id
module.exports.salt = salt
module.exports.scopes = scopes
module.exports.redirect_uri = redirect_uri