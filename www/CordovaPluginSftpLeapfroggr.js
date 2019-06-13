var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    console.log(arg0)
    exec(success, error, 'CordovaPluginSftpLeapfroggr', 'coolMethod', [arg0]);
};

exports.configureSFTP = function (arg0, success, error) {
    console.log(arg0)
    exec(success, error, 'CordovaPluginSftpLeapfroggr', 'configSFTP', [arg0]);
}

exports.upload = function (arg0, success, error) {
    console.log(arg0)
    exec(success, error, 'CordovaPluginSftpLeapfroggr', 'upload', [arg0]);
}