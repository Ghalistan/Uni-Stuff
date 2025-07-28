'use strict';

const axios = require('axios').default;
const wd = require('wd');

class Mobunium {
    constructor(screen=[0,0]) {
        this.address = "localhost";
        this.driver;
        this.screen=screen;
    }

    isEmpty = (obj) => (obj.length == 0) ? true : false;
    sleep = (milisecond) => new Promise(resolve => setTimeout(resolve, milisecond));

    async startSession(sessionData) {
        this.driver = await wd.promiseChainRemote({
            host: '127.0.0.1',
            port: 4723
        });
        let desiredCaps = sessionData;
        await this.driver.init(desiredCaps);
        console.log("DETIL KAPABILITAS: \n", await this.driver.sessionCapabilities());
    }

    async endSession() {
        await this.driver.quit();
    }

    async runAPI(command) {
        try {
            const response = await axios('http://' + this.address + ':8342' + command);
            return response['data'];
        }
        catch (err) {
            throw err;
        }
    }

    async testServer() {
        return await this.runAPI('/about');
    }

    async getAllObject() {
        return this.runAPI('/q/scene/').then((resp) => resp[0]);
    }

    async getObject(obj) {
        let newObj = await this.runAPI('/q/scene//' + obj);
        console.log(newObj.length);
        if(!this.isEmpty(newObj)) {
            if(newObj.length > 1) console.log("there's multiple object called **" + obj + "**");
            return newObj;
        }
        else {
            throw Error('Object named **' + obj + '** is not found!');
        }
    }

    async getObjectPos(obj) {
        let newObj = await this.runAPI('/q/scene//' + obj + '.Transform.position');
        if(!this.isEmpty(newObj)) {
            if(newObj.length > 1) console.log("there's multiple object called **" + obj + "**");
            console.log(newObj);
        }
        else {
            throw Error('Object named **' + obj + '** is not found!');
        }
    }

    async clickObject(obj) {
        let newObj = await this.runAPI('/q/scene//' + obj + '.Transform.position');
        let action = new wd.TouchAction(this.driver);
        action.tap({ x: newObj[0]['x'], y: Math.abs(newObj[0]['y'] - this.screen[1]) });
        await action.perform();
    }

    async doubleClickObject(obj) {
        let newObj = await this.runAPI('/q/scene//' + obj + '.Transform.position');
        let action = new wd.TouchAction(this.driver);
        action.tap({ x: newObj[0]['x'], y: Math.abs(newObj[0]['y'] - this.screen[1]) });
        action.tap({ x: newObj[0]['x'], y: Math.abs(newObj[0]['y'] - this.screen[1]) });
        await action.perform();
    }

    async insertNativeText(inputText="") {
        await this.sleep(500);
        if(inputText != "" && await this.driver.isKeyboardShown()) {
            await this.driver.element("xpath", "//android.widget.EditText").type(inputText);
            await this.driver.element("xpath", "//android.widget.Button").click();
            await this.sleep(500);
        }
        else {
            throw Error("Cannot input text! no text provided or keyboard is not shown.");
        }
    }

    async getText(obj) {
        let text = await this.runAPI('/q/scene//' + obj + '.Text.text');
        if(text.length == 0) {
            throw Error('No Text component found!');
        } 
        else {
            return text[0];
        }
    }

    async isObjectExists(obj) {
        return this.runAPI('/q/scene//' + obj + '.activeInHierarchy').then((resp) => resp[0]);
    }
}

module.exports = Mobunium; 