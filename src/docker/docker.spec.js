/* eslint-env mocha */
//const Docker = require('dockerode')
const fs = require('fs')
//const {dockerSettings} = require('../config/config')

describe('Docker Connection', () => {
  it('should connect with docker', (done) => {

    //const dockerSettings = new Docker({host: 'http://35.157.178.106', port: 30000});
    /const dockerSettings = new Docker({host: 'http://35.157.178.106', port: 8080});

    //const docker = new Docker(dockerSettings)

    docker.info(function (err, info) {
      console.log(info)

      done()
    })
  })
})
