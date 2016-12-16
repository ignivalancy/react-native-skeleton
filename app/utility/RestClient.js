/*
 * @file: RestClient.js
 * @description: Get places array for the application 
 * @date: 15.12.2016
 * @author: Lancy Goyal
 * */

'use strict';

let Connection = require("../Configs/Connection");
import querystring from 'querystring';
import { NetInfo, Alert } from 'react-native';

class RestClient {

    static isConnected() {

        let context = this;

        return new Promise(function(fulfill, reject) {

            NetInfo.isConnected.fetch()
                .then(isConnected => {
                    console.log('Device, is ' + (isConnected ? 'online' : 'offline'));
                    if (isConnected)
                        fulfill(isConnected);
                    else {
                        Alert.alert('Warning', 'Please check your Internet connectivity.');
                        fulfill(isConnected);
                    }
                });

        });
    };

    static post(url, params) {

        let context = this;

        return new Promise(function(fulfill, reject) {

            context.isConnected()
                .then(() => {
                    //console.log(Connection.getResturl() + 'rest/v1/' + url,params);
                    fetch(Connection.getResturl() + url, { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(params) })
                        .then((response) => response.text())
                        .then((responseText) => {
                            fulfill(JSON.parse(responseText));
                        })
                        .catch((error) => {
                            console.warn(error);
                        });

                })
                .catch((error) => {
                    // console.log(error);
                    reject(false);
                });

        });
    };

    static get(url, params) {

        let context = this;

        return new Promise(function(fulfill, reject) {

            context.isConnected()
                .then(() => {
                    //console.log(Connection.getResturl() + 'rest/v1/' + url, params);
                    let query = querystring.stringify(params);
                    fetch(Connection.getResturl() + url + '?' + query, {
                            method: 'GET',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            }
                        })
                        .then((response) => response.text())
                        .then((responseText) => {
                            fulfill(JSON.parse(responseText));
                        })
                        .catch((error) => {
                            console.warn(error);
                        });

                })
                .catch((error) => {
                    // console.log(error);
                    reject(false);
                });

        });

    };
}

module.exports = RestClient;
