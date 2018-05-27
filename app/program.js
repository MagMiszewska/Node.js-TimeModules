var OSinfo = require('../modules/OSinfo');
console.log('Type: ' + '\n' + '- /exit to quit,' + '\n' + '- /version to show Node version,' + '\n' + '- /language to show system language,' + '\n' + '- /getOSinfo to show system info.');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/version':
                process.stdout.write(process.versions.node + '\n');
                break;
            case '/language':
                process.stdout.write(process.env.LANG + '\n');
                break;
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});