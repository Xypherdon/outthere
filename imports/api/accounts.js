import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    'accounts.findUserByUsername'({ username }) {
        return Accounts.findUserByUsername(username);
    },
});
