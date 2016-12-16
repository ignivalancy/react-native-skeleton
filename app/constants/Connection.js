/*
 * @file: Connection.js
 * @description: Connection file for the application
 * @date: 15.12.2016
 * @author: Lancy Goyal
 * */

'use strict';

let localUrl = '192.168.0.{}:{}',
    stagingUrl = '{}.ignivastaging.com:{}',
    runningUrl = stagingUrl,
    httpUrl = `http://${runningUrl}`;

class Connection {

    static getResturl() {
        return `${httpUrl}/v1/`
    };

    static getBaseUrl() {
        return httpUrl;
    };

    static parseImgUrl(url) {
        return url.charAt(0) === '/' ? `${httpUrl}${url}` : url;
    };
}

module.exports = Connection;
