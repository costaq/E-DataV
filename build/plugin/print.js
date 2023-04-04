const print = {
    log (info) {
        console.log(info);
    },
    error (err) {
        console.log('\033[31;40m' + info + '\033[0m');
    },
    success (info) {
        console.log('\033[42;30m' + info + '\033[0m')
    }
}

module.exports = print;