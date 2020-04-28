import { useCallback } from 'react';

export const validateEmail = (email, callback) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        Meteor.call('accounts.findUserByEmail', { email }, (error, result) => {
            if (error) {
                console.error('Error:', error);
                callback(false);
            } else {
                console.log(result);
                if (!result) {
                    callback(true);
                } else {
                    callback(false);
                }
            }
        });
    } else {
        callback(false);
    }
};

export const checkPasswords = (password1, password2) => {
    return (
        password1.length > 5 && password2.length > 5 && password1 === password2
    );
};

export const checkUsername = (username, callback) => {
    if (!username) callback(false);
    Meteor.call(
        'accounts.findUserByUsername',
        { username },
        (error, result) => {
            if (error) {
                console.error('Error:', error);
                callback(false);
            } else {
                if (!result) {
                    callback(true);
                } else {
                    callback(false);
                }
            }
        }
    );

    // if (!username || Accounts.findUserByUsername(username) !== null) {
    //     return false;
    // } else {
    //     return true;
    // }
};

export const createUser = (email, username, password) => {
    Accounts.createUser({ email, username, password });
};
