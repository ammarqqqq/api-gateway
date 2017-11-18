/* eslint-env mocha */
const supertest = require('supertest')
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
process.env.NODE_TLS_ACCEPT_UNTRUSTED_CERTIFICATES_THIS_IS_INSECURE = '1'

describe('API Gateway Service', () => {
  it('returns a 200 for transactionservice info', (done) => {
    const url = 'https://192.168.99.100:8080'
    const api = supertest(url)
    console.log(`Calling the server ${url}`)

    api.get('/movies/premieres')
      .expect(200, done)
  })

})
