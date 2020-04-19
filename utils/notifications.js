import { Notifications } from "expo";
import { AsyncStorage } from "react-native";
import * as Permissions from "expo-permissions";

const NOTIFICATIONS_KEY = "MOBILE_FLASHCARDS:mfc_notifications";

export function createLocalNotification() {
  return {
    title: "Take a quiz!",
    body: "A ninja will chop off a kitten's head if you don't take a quiz",
    ios: {
      sound: true,
    },
    android: {
      sticky: false,
      color: "#BD9D76",
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATIONS_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            console.log("data is null and permission granted!");
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(
              createLocalNotification(),
              {
                time: tomorrow,
                repeat: "day",
              }
            );

            AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true));
          }
        });
      }
    });
}
