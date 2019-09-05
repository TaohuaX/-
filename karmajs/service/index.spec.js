const app = require('./index')
const superagent = require('supertest')
function request () {
    return superagent(app.listen())
}
describe('demo1', function () {
    it('服务数据', function (done) {
        request()
        .get('/')
        .set('Accept','application/json')
        .expect('Content-type',/json/)
        .expect(200)
        .end(function (err, res) {
            if (err) {
                done(err)
            }
            if (res.body.data === '能跑的小蜗牛') {
                done()
            } else {
                done(new Erroe('接口不正确'))
            }
        })
    })
})