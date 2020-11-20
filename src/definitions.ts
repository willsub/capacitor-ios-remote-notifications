declare module '@capacitor/core' {
  interface PluginRegistry {
    IosRemoteNotifications: IosRemoteNotificationsPlugin;
  }
}

export interface IosRemoteNotificationsPlugin {
  handleDataMessage(notification: any): Promise<void>;
}
