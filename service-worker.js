importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"),workbox?console.log("Workbox berhasil dimuat"):console.log("Workbox gagal dimuat"),workbox.core.clientsClaim(),workbox.core.skipWaiting(),workbox.precaching.precacheAndRoute([{url:"index.html",revision:"1"},{url:"index.js",revision:"1"},{url:"team.js",revision:"1"}],[{'revision':'6e2289e590621d7071df6d72080c5096','url':'./apple-touch-icon.png'},{'revision':'7de73602375df3ed56988422a738f875','url':'./article.html'},{'revision':'d0e0c9d174a9cec8f1383ebd7bf51b31','url':'./asset/font/BalsamiqSans-Regular.ttf'},{'revision':'570eb83859dc23dd0eec423a49e147fe','url':'./asset/font/MaterialIcons-Regular.woff2'},{'revision':'8d609715c6aa90e03f15c0f7d38e8fa2','url':'./asset/img/blackpink.png'},{'revision':'dbe8b823568550c627c7e9d7469a5f81','url':'./asset/img/default.svg'},{'revision':'106b40028375593c8e83a5506bc8947a','url':'./asset/img/dicoding.png'},{'revision':'643ef697019bc53e7fba1e847e13c7a0','url':'./asset/img/jumbotron.png'},{'revision':'4bc099bdcf5adc8d9c1f616143b6d489','url':'./asset/img/nodata.jpg'},{'revision':'480010f0611845404dd742a7856f19af','url':'./asset/img/premiere-league-logo.png'},{'revision':'ab15aca2098412c050fe67015fb8977a','url':'./asset/img/unsyiah.png'},{'revision':'0be2e3ffa53d400056859d325005be06','url':'./favicon.ico'},{'revision':'5b121fa3dd7e6ba06698cb448f92761a','url':'./index.html'},{'revision':'8e5ea7fe9f932665123e04f10bed1548','url':'./index.js'},{'revision':'d925182b5d1f91be2fb2270fd011dcad','url':'./safari-pinned-tab.svg'},{'revision':'ba2df77e6f218d72a65e7f8246f00b9b','url':'./team.js'}]),workbox.routing.registerRoute(/\.(?:json)$/,new workbox.strategies.CacheFirst({cacheName:"manifest"})),workbox.routing.registerRoute(new RegExp("/asset/css/"),new workbox.strategies.CacheFirst({cacheName:"css"})),workbox.routing.registerRoute(new RegExp("/asset/js/"),new workbox.strategies.CacheFirst({cacheName:"js"})),workbox.routing.registerRoute(new RegExp("/background/"),new workbox.strategies.CacheFirst({cacheName:"background"})),workbox.routing.registerRoute(new RegExp("/layouts/"),new workbox.strategies.CacheFirst({cacheName:"layouts"})),workbox.routing.registerRoute(new RegExp("/data/"),new workbox.strategies.CacheFirst({cacheName:"data"})),workbox.routing.registerRoute(new RegExp("/view/"),new workbox.strategies.CacheFirst({cacheName:"view"})),workbox.routing.registerRoute(new RegExp("/pages/"),new workbox.strategies.StaleWhileRevalidate({cacheName:"pages"})),workbox.routing.registerRoute(new RegExp("/components/"),new workbox.strategies.StaleWhileRevalidate({cacheName:"components"})),workbox.routing.registerRoute(new RegExp("https://crests.football-data.org/"),new workbox.strategies.CacheFirst({cacheName:"url-images",plugins:[new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200],maxEntries:60,maxAgeSeconds:2592e3})]})),workbox.routing.registerRoute(new RegExp("https://api.football-data.org/v2/competitions/2021/standings"),new workbox.strategies.NetworkFirst({networkTimeoutSeconds:3,cacheName:"standings",plugins:[new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(new RegExp("/article.html"),new workbox.strategies.StaleWhileRevalidate({cacheName:"articles",plugins:[new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(new RegExp("https://api.football-data.org/v2/teams"),new workbox.strategies.StaleWhileRevalidate({cacheName:"teams",plugins:[new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:ttf|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"long-term-asset",plugins:[new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200],maxAgeSeconds:31536e3})]})),workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"asset-images",plugins:[new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200],maxEntries:60,maxAgeSeconds:2592e3})]})),self.addEventListener("push",(function(e){var o;e.data?(o=e.data.text(),console.log(o)):o="Push message no payload";var t={body:o,requireInteraction:!0,icon:"logo.png",badge:"logo.png",vibrate:[100,50,100],data:{dateOfArrival:Date.now(),primaryKey:1}};e.waitUntil(self.registration.showNotification("Premiere League",t))}));