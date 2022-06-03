import React from 'react';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('TITAN', "1.0");


const initDb = () => {
    

    const query = `CREATE TABLE Users (
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
export default initDb;

export function insertUser(email, full_name, password) {
    db.transaction(trx => {
        let trxQuery = trx.executeSql(
            "insert into Users(email, full_name, password) values(${values})"
            ,[[email, full_name, password]]
            ,(transact,resultset) => console.log('we made it',resultset)
            ,(transact,err) => console.log('We have encounter an Error', err)
        );
    })
}

export function getUser(email, callback) {
    db.transaction(trx => {
        let trxQuery = trx.executeSql(
            "select * from Users where email='" + email + "'"
            ,[email]
            ,(transact,resultset) => {
                console.log('user',resultset);
                callback(resultset);
            }
            ,(transact,err) => console.log('We have encounter an Error', err)
        );
    })
}