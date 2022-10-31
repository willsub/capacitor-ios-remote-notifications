import { registerPlugin } from '@capacitor/core';
export const IosRemoteNotifications = registerPlugin('IosRemoteNotifications', {
    web: async () => {
        import('./plugin').then((module) => new module.IosRemoteNotificationsImpl());
    },
    ios: async () => {
        import('./plugin').then((module) => new module.IosRemoteNotificationsImpl());
    },
    android: async () => {
        import('./plugin').then((module) => new module.IosRemoteNotificationsImpl());
    },
});
export * from './definitions';
