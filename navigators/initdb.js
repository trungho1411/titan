import React from 'react';

import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('TITAN', "1.0");



const initDb = () => {
    

    const query = `CREATE TABLE IF NOT EXISTS Users (
            email TEXT PRIMARY KEY,
            full_name TEXT NOT NULL,
            password TEXT NOT NULL
        )`;

    db.transaction((trx) => {
        let trxQuery = trx.executeSql(
        query,
        [],
        (transact, resultset) => console.log('we made it', resultset),
        (transact, err) => console.log('We have encounter an Error', err),
        );
    });
};
export default initDb

export function insertUser(email, full_name, password, callback) {
    console.log(email, full_name, password)
    db.transaction(trx => {
        let trxQuery = trx.executeSql(
            "INSERT OR IGNORE INTO Users(email, full_name, password) VALUES(?,?,?)"
            ,[email, full_name, password]
            ,(transact,resultset) => {
                console.log();
                if(resultset.insertId < 0){
                    alert('email already exists!')
                } else {
                    alert('success!');
                    callback();
                }
            }
            ,(transact,err) => alert('error!')
        );
    })
}

export function getUser(email, callback) {
    db.transaction(trx => {
        let trxQuery = trx.executeSql(
            "SELECT * FROM Users WHERE email=?"
            ,[email, password]
            ,(tx,resultset) => {
                callback(resultset.rows._array[0]);
            }
            ,(tx,err) => console.log('function getUser', err)
        );
    })
}