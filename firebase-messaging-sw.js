importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAJf3Z2Mg_J1uZ0kPa-sjcnLxs3BG4l5Ag",
  authDomain: "qr-visitor-log.firebaseapp.com",
  projectId: "qr-visitor-log",
  storageBucket: "qr-visitor-log.appspot.com",
  messagingSenderId: "304250341939",
  appId: "1:304250341939:web:b8d5b946590d1f852cf146"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] 受信: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
