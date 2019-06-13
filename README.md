# cordova-plugin-sftp-leapfroggr
cordova plugin for sftp 
works on both:
* IOS,
* Android

### Installation
* `npm install ionic-native/cordova-plugin-sftp-leapfroggr`
* `cordova plugin cordova-plugin-sftp-leapfroggr`

- #### IOS
* uses NMSSH library for sftp operations
* https://github.com/NMSSH/NMSSH
* `pod 'NMSSH'`

- #### Android
* uses JSch library
* http://www.jcraft.com/jsch/
* coded in kotlin
* ``compile group: 'com.jcraft', name: 'jsch', version: '0.1.54'
    compile "org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.2.31"``

### USAGE
