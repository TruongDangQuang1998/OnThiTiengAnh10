import React from 'react';
import { Text, Linking, TouchableOpacity, Platform } from 'react-native';
import moment from 'moment';
import { ToasterSevice } from '../components/toaster/Toaster';

// import { ToasterSevice } from '../components/Toaster/Toaster';
// import ManageFileSevice from './ManageFileSevice';

export default class FunctionCommon {
    static CheckIsNullOrEmpty(data) {
        if (data !== undefined && data !== null && data !== '' && data !== 'NaN')
            return false;
        else return true;
    }

    static MakeId(length) {
        let result = '';
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return `${new Date().getSeconds()}${result}${new Date().getMilliseconds()}`;
    }

    static removeObjectInArray(arr, object, valueField) {
        const indexObject = arr.findIndex(value => {
            return value[valueField] == object[valueField];
        });
        if (indexObject >= 0) {
            arr.splice(indexObject, 1);
            return arr;
        } else {
            return arr;
        }
    }

    static mathRoundNumber(number) {
        if (typeof number == 'number') {
            return Math.round(number * 100) / 100;
        } else {
            return number;
        }
    }
}
