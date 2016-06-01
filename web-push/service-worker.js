'use strict';

/**
 * Service Worker script
 */

 'use strict';

 console.log('Started', self);

 self.addEventListener('install', function(event) {
 });
 self.addEventListener('activate', function(event) {
 });
 self.addEventListener('push', function(event) {
   console.log('Received a push message', event);
   var fetch_options = {
     method: 'post',
     credentials: 'include'
   };
   event.waitUntil(
     fetch("getData.php",fetch_options)
     .then(function(response) {
       return response.json();
     })
     .then(function(json) {
         var option = {"body":json.body,"icon":json.icon,"data":json.data};
         return self.registration.showNotification(json.title, option);
     })
   );
 });

 self.addEventListener('notificationclick', function(event) {
   console.log('Notification click: tag', event.notification.tag);
   event.notification.close();
   var url;
   if (Notification.prototype.hasOwnProperty('data')) {
     console.log('Using Data');
     url = event.notification.data.link;
   }else{
     console.log('Using Default link');
     url = 'http://yakitan.info/';
   }
   event.waitUntil(
     clients.matchAll({
       type: 'window'
     }).then(function(windowClients) {
       console.log('WindowClients', windowClients);
       for (var i = 0; i < windowClients.length; i++) {
         var client = windowClients[i];
         console.log('WindowClient', client);
         if (client.url === url && 'focus' in client) {
           return client.focus();
         }
       }
       if (clients.openWindow) {
         return clients.openWindow(url);
       }
     })
   );
 });
