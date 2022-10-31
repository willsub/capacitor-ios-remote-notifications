'use strict';

var core = require('@capacitor/core');

const IosRemoteNotifications = core.registerPlugin('IosRemoteNotifications', {
    web: async () => {
        Promise.resolve().then(function () { return plugin; }).then((module) => new module.IosRemoteNotificationsImpl());
    },
    ios: async () => {
        Promise.resolve().then(function () { return plugin; }).then((module) => new module.IosRemoteNotificationsImpl());
    },
    android: async () => {
        Promise.resolve().then(function () { return plugin; }).then((module) => new module.IosRemoteNotificationsImpl());
    },
});

class IosRemoteNotificationsImpl extends core.WebPlugin {
}

var plugin = /*#__PURE__*/Object.freeze({
    __proto__: null,
    IosRemoteNotificationsImpl: IosRemoteNotificationsImpl
});

exports.IosRemoteNotifications = IosRemoteNotifications;
