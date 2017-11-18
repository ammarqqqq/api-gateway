const fs = require('fs')
//const Docker = require('dockerode')
//const dockerSettings = new Docker({host: 'http://35.157.178.106', port: 30000})
const serverSettings = {
  port: process.env.PORT || 8080
  ssl: require('./ssl')
}
/*export DOCKER_TLS_VERIFY="1"
export DOCKER_HOST="unix:///var/run/docker.sock"
export DOCKER_CERT_PATH="/home/ubuntu/.docker/certs"
const machine = process.env.DOCKER_HOST
const tls = process.env.DOCKER_TLS_VERIFY
const certDir = process.env.DOCKER_CERT_PATH
console.log("Machine " + machine)
console.log("TLS "+ tls)
console.log("CertDir" + certDir)*/
/*if (!machine) {
  throw new Error('You must set the DOCKER_HOST environment variable')
}
if (tls === 1) {
  throw new Error('When using DOCKER_TLS_VERIFY=1 you must specify the property DOCKER_CERT_PATH for certificates')
}
if (!certDir) {
  throw new Error('You must set the DOCKER_CERT_PATH environment variable')
}*/

const dockerSettings = {
  protocol: 'https',
  host: machine.substr(machine.indexOf(':', 0) + 3, machine.indexOf(':', 6) - 6),
  port: parseInt(machine.substr(-4), 10),
  checkServerIdentity: false,
  ca: fs.readFileSync(certDir + '/ca.pem'),
  cert: fs.readFileSync(certDir + '/cert.pem'),
  key: fs.readFileSync(certDir + '/key.pem'),
  version: 'v1.25'
}

//console.log("Docker settings " + JSON.stringify(dockerSettings))
module.exports = Object.assign({}, { serverSettings, dockerSettings })
//module.exports = Object.assign({}, { serverSettings})
