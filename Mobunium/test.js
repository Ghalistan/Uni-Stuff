const mobunium = require('./index');
const path = require('path');

async function start() {
    sess = {
        platformName: "Android",
        platformVersion: '9.0',
        automationName: 'UiAutomator2',
        deviceName: 'MaxProM1'
    }
    test = new mobunium(screen=[1080,2160]);
    await test.startSession(sess);
    console.log(await test.testServer());
}

start();