var capacitorIOsRemoteNotifications = (function (exports, core) {
    'use strict';

    const proxy = core.registerPlugin('IosRemoteNotifications', {
        web: async () => Promise.resolve().then(function () { return plugin; }).then((module) => new module.IosRemoteNotificationsImpl()),
        ios: async () => Promise.resolve().then(function () { return plugin; }).then((module) => new module.IosRemoteNotificationsImpl()),
        android: async () => Promise.resolve().then(function () { return plugin; }).then((module) => new module.IosRemoteNotificationsImpl()),
    });

    // eslint-disable-next-line import/prefer-default-export
    class IosRemoteNotificationsImpl extends core.WebPlugin {
    }

    var plugin = /*#__PURE__*/Object.freeze({
        __proto__: null,
        IosRemoteNotificationsImpl: IosRemoteNotificationsImpl
    });

    exports.IosRemoteNotifications = proxy;

    return exports;

})({}, capacitorExports);
