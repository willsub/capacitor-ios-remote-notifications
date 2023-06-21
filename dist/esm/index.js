import { registerPlugin } from '@capacitor/core';
const proxy = registerPlugin('IosRemoteNotifications', {
    web: async () => import('./plugin').then((module) => new module.IosRemoteNotificationsImpl()),
    ios: async () => import('./plugin').then((module) => new module.IosRemoteNotificationsImpl()),
    android: async () => import('./plugin').then((module) => new module.IosRemoteNotificationsImpl()),
});
export { proxy as IosRemoteNotifications };
export * from './definitions';
