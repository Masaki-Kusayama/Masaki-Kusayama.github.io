/**
 * Service Workers Push API hands-on
 */

 'use strict';

 $(document).ready(function(){
     if ('serviceWorker' in navigator) {
       console.log('Service Worker is supported');
       navigator.serviceWorker.register('service-worker.js').then(function() {
         return navigator.serviceWorker.ready;
       }).then(function(reg) {
         console.log('Service Worker is ready :^)', reg);
         reg.pushManager.subscribe({userVisibleOnly: true}).then(function(sub) {
           console.log('endpoint:', sub.endpoint);
           $(".registration_ids").html(sub.endpoint.replace('https://android.googleapis.com/gcm/send/',''));
           document.cookie = 'sw_reg_id=' + sub.endpoint.replace('https://android.googleapis.com/gcm/send/','')+';path=../';
         });
       }).catch(function(error) {
         console.log('Service Worker error :^(', error);
       });
     }
 });
