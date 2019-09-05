// process.exit(0) // 正常挂起
// process.exit(1) // 异常挂起
const Mocha = require('mocha') // 测试异步的API
const mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
        reporDir: "./docs/mochawesome-reporter"
    }
})
mocha.addFile('./service/index.spec.js')
mocha.run(function (err) {
    if (err) {
        process.exit(1)
    } else {
        console.log('All done')
        process.exit(0)
    }
})