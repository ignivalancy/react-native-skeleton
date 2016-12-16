/*
 * @file: Data.js
 * @description: get picker related data for the application 
 * @date: 15.12.2016
 * @author: Lancy Goyal
 * */

'use strict';

class Data {

    static getTimezones() {

        return [{ "gmtAdjustment": "GMT-12:00", "value": "International Date Line West" }, { "gmtAdjustment": "GMT-11:00", "value": "Midway Island, Samoa" }, { "gmtAdjustment": "GMT-10:00", "value": "Hawaii" }, { "gmtAdjustment": "GMT-09:00", "value": "Alaska" }, { "gmtAdjustment": "GMT-08:00", "value": "Pacific Time" }, { "gmtAdjustment": "GMT-08:00", "value": "Tijuana, Baja California" }, { "gmtAdjustment": "GMT-07:00", "value": "Arizona" }, { "gmtAdjustment": "GMT-07:00", "value": "Chihuahua, La Paz, Mazatlan" }, { "gmtAdjustment": "GMT-07:00", "value": "Mountain Time (US & Canada)" }, { "gmtAdjustment": "GMT-06:00", "value": "Central America" }, { "gmtAdjustment": "GMT-06:00", "value": "Central Time" }, { "gmtAdjustment": "GMT-06:00", "value": "Guadalajara, Mexico City, Monterrey" }, { "gmtAdjustment": "GMT-06:00", "value": "Saskatchewan" }, { "gmtAdjustment": "GMT-05:00", "value": "Bogota, Lima, Quito, Rio Branco" }, { "gmtAdjustment": "GMT-05:00", "value": "Eastern Time (US & Canada)" }, { "gmtAdjustment": "GMT-05:00", "value": "Indiana (East)" }, { "gmtAdjustment": "GMT-04:00", "value": "Atlantic Time (Canada)" }, { "gmtAdjustment": "GMT-04:00", "value": "Caracas, La Paz" }, { "gmtAdjustment": "GMT-04:00", "value": "Manaus" }, { "gmtAdjustment": "GMT-04:00", "value": "Santiago" }, { "gmtAdjustment": "GMT-03:30", "value": "Newfoundland" }, { "gmtAdjustment": "GMT-03:00", "value": "Brasilia" }, { "gmtAdjustment": "GMT-03:00", "value": "Buenos Aires, Georgetown" }, { "gmtAdjustment": "GMT-03:00", "value": "Greenland" }, { "gmtAdjustment": "GMT-03:00", "value": "Montevideo" }, { "gmtAdjustment": "GMT-02:00", "value": "Mid-Atlantic" }, { "gmtAdjustment": "GMT-01:00", "value": "Cape Verde Is." }, { "gmtAdjustment": "GMT-01:00", "value": "Azores" }, { "gmtAdjustment": "GMT+00:00", "value": "Casablanca, Monrovia, Reykjavik" }, { "gmtAdjustment": "GMT+00:00", "value": "Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London" }, { "gmtAdjustment": "GMT+01:00", "value": "Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna" }, { "gmtAdjustment": "GMT+01:00", "value": "Belgrade, Bratislava, Budapest, Ljubljana, Prague" }, { "gmtAdjustment": "GMT+01:00", "value": "Brussels, Copenhagen, Madrid, Paris" }, { "gmtAdjustment": "GMT+01:00", "value": "Sarajevo, Skopje, Warsaw, Zagreb" }, { "gmtAdjustment": "GMT+01:00", "value": "West Central Africa" }, { "gmtAdjustment": "GMT+02:00", "value": "Amman" }, { "gmtAdjustment": "GMT+02:00", "value": "Athens, Bucharest, Istanbul" }, { "gmtAdjustment": "GMT+02:00", "value": "Beirut" }, { "gmtAdjustment": "GMT+02:00", "value": "Cairo" }, { "gmtAdjustment": "GMT+02:00", "value": "Harare, Pretoria" }, { "gmtAdjustment": "GMT+02:00", "value": "Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius" }, { "gmtAdjustment": "GMT+02:00", "value": "Jerusalem" }, { "gmtAdjustment": "GMT+02:00", "value": "Minsk" }, { "gmtAdjustment": "GMT+02:00", "value": "Windhoek" }, { "gmtAdjustment": "GMT+03:00", "value": "Kuwait, Riyadh, Baghdad" }, { "gmtAdjustment": "GMT+03:00", "value": "Moscow, St. Petersburg, Volgograd" }, { "gmtAdjustment": "GMT+03:00", "value": "Nairobi" }, { "gmtAdjustment": "GMT+03:00", "value": "Tbilisi" }, { "gmtAdjustment": "GMT+03:30", "value": "Tehran" }, { "gmtAdjustment": "GMT+04:00", "value": "Abu Dhabi, Muscat" }, { "gmtAdjustment": "GMT+04:00", "value": "Baku" }, { "gmtAdjustment": "GMT+04:00", "value": "Yerevan" }, { "gmtAdjustment": "GMT+04:30", "value": "Kabul" }, { "gmtAdjustment": "GMT+05:00", "value": "Yekaterinburg" }, { "gmtAdjustment": "GMT+04:00", "value": "Islamabad, Karachi, Tashkent" }, { "gmtAdjustment": "GMT+05:30", "value": "Sri Jayawardenapura" }, { "gmtAdjustment": "GMT+05:30", "value": "Chennai, Kolkata, Mumbai, New Delhi" }, { "gmtAdjustment": "GMT+05:45", "value": "Kathmandu" }, { "gmtAdjustment": "GMT+06:00", "value": "Almaty, Novosibirsk" }, { "gmtAdjustment": "GMT+06:00", "value": "Astana, Dhaka" }, { "gmtAdjustment": "GMT+06:30", "value": "Yangon (Rangoon)" }, { "gmtAdjustment": "GMT+07:00", "value": "Bangkok, Hanoi, Jakarta" }, { "gmtAdjustment": "GMT+07:00", "value": "Krasnoyarsk" }, { "gmtAdjustment": "GMT+08:00", "value": "Beijing, Chongqing, Hong Kong, Urumqi" }, { "gmtAdjustment": "GMT+08:00", "value": "Kuala Lumpur, Singapore" }, { "gmtAdjustment": "GMT+08:00", "value": "Irkutsk, Ulaan Bataar" }, { "gmtAdjustment": "GMT+08:00", "value": "Perth" }, { "gmtAdjustment": "GMT+08:00", "value": "Taipei" }, { "gmtAdjustment": "GMT+09:00", "value": "Osaka, Sapporo, Tokyo" }, { "gmtAdjustment": "GMT+09:00", "value": "Seoul" }, { "gmtAdjustment": "GMT+09:00", "value": "Yakutsk" }, { "gmtAdjustment": "GMT+09:30", "value": "Adelaide" }, { "gmtAdjustment": "GMT+09:30", "value": "Darwin" }, { "gmtAdjustment": "GMT+10:00", "value": "Brisbane" }, { "gmtAdjustment": "GMT+10:00", "value": "Canberra, Melbourne, Sydney" }, { "gmtAdjustment": "GMT+10:00", "value": "Hobart" }, { "gmtAdjustment": "GMT+10:00", "value": "Guam, Port Moresby" }, { "gmtAdjustment": "GMT+10:00", "value": "Vladivostok" }, { "gmtAdjustment": "GMT+11:00", "value": "Magadan, Solomon Is., New Caledonia" }, { "gmtAdjustment": "GMT+12:00", "value": "Auckland, Wellington" }, { "gmtAdjustment": "GMT+12:00", "value": "Fiji, Kamchatka, Marshall Is." }, { "gmtAdjustment": "GMT+13:00", "value": "Nuku'alofa" }];
    }

    static getArray(from, to) {

        let arr = [];

        for (let i = from; i <= to; i++) {
            arr.push(i.toString())
        }

        return arr;
    }
}

module.exports = Data;
