const resource = [ /* --- CSS --- */ '/sitto/assets/css/style.css', /* --- PWA --- */ '/sitto/app.js', '/sitto/sw.js', /* --- HTML --- */ '/sitto/index.html', '/sitto/404.html', '/sitto/categories/', '/sitto/tags/', '/sitto/archives/', '/sitto/about/', /* --- Favicons & compressed JS --- */ '/sitto/assets/img/favicons/android-chrome-192x192.png', '/sitto/assets/img/favicons/android-chrome-512x512.png', '/sitto/assets/img/favicons/apple-touch-icon.png', '/sitto/assets/img/favicons/favicon-16x16.png', '/sitto/assets/img/favicons/favicon-32x32.png', '/sitto/assets/img/favicons/favicon.ico', '/sitto/assets/img/favicons/mstile-150x150.png', '/sitto/assets/js/dist/categories.min.js', '/sitto/assets/js/dist/commons.min.js', '/sitto/assets/js/dist/home.min.js', '/sitto/assets/js/dist/misc.min.js', '/sitto/assets/js/dist/page.min.js', '/sitto/assets/js/dist/post.min.js', '/sitto/assets/js/dist/pvreport.min.js' ]; /* The request url with below domain will be cached */ const allowedDomains = [ '', 'fonts.gstatic.com', 'fonts.googleapis.com', 'cdn.jsdelivr.net', 'polyfill.io' ]; /* Requests that include the following path will be banned */ const denyUrls = [ ];
