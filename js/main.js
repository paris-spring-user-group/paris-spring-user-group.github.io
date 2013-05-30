// loader configuration
require.config({
    baseUrl: 'js',
    map: {
        '*': {
            'text' : 'lib/text',
            'css' : 'css'
        }
    },
    shim: {
        'vendor/angular/angular': {
            deps: ['vendor/angular/angular-resource'],
            exports: 'angular'
        },
        'vendor/lodash': {
            exports: '_'
        },
        'vendor/bootstrap': {
            deps: ['jquery']
        }
    }
});