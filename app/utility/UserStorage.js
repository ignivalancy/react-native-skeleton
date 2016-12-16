/*
 * @file: UserStorage.js
 * @description: Handle User Defaults for the application 
 * @date: 16.12.2016
 * @author: Lancy Goyal
 * */

'use strict';

import { AsyncStorage } from 'react-native';
const USERDATA = 'userdata';

const UserStorage = {

    isLoggedIn() {
        return AsyncStorage.getItem(USERDATA)
            .then(value => {
                return JSON.parse(value);
            });
    },

    loggedIn(data) {
        return AsyncStorage.setItem(USERDATA, JSON.stringify(data));
    },

    updateData(data) {
        return AsyncStorage.mergeItem(USERDATA, JSON.stringify(data));
    },

    logout() {
        return AsyncStorage.clear();
    }

};

module.exports = UserStorage;
