

self.addEventListener('install', function(event){
    console.log('SW Installed');
    event.waitUntil(
        caches.open('static')
        .then(function(cache) {
            cache.add('/')
            cache.add('/src/js/app.js');
            cache.add('/index.html');
            cache.addAll([
                '/',
                '/index.html',
                '/src/js/app.js',
                '/src/css/app.css',
                '/src/images/BrownBanana.jpg',
                'https://fonts.googleapis.com/css?family=Raleway:400,700'
            
            ]);
        })
    );
    
});

