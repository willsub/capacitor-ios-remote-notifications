import Capacitor

@objc(IosRemoteNotifications)
public class IosRemoteNotifications: CAPPlugin {
  override public func load() {
    NotificationCenter.default.addObserver(
      forName: Notification.Name("onRemoteMessage"),
      object: nil,
      queue: OperationQueue.main,
      using: { notification in
        if let userInfo = notification.object as? [AnyHashable: Any] {
          self.notifyListeners("onRemoteNotification", data: ["data": userInfo])
        }
      }
    )
  }
}
