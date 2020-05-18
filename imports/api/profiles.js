import { Mongo } from 'meteor/mongo';

export const Profiles = new Mongo.Collection('profiles');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('profiles', function profilePublication() {
        return Profiles.find();
    });
}
Meteor.methods({
    'profiles.insert'(profile) {
        Profiles.insert(profile);
    },
    'profiles.update'(profileId, updateData) {
        Users.update({ $set: updateData });
    },
});
