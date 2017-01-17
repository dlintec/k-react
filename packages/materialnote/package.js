Package.describe({
    name: 'orionjs:materialnote',
    version: '1.8.0',
    // Brief, one-line summary of the package.
    summary: 'MaterialNote for orionjs',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.use([
        'blaze-html-templates@1.0.1',
        'ecmascript@0.1.6',
        'orionjs:base@1.8.0',
        'orionjs:attributes@1.8.0',
        'orionjs:filesystem@1.8.0',
        'vojtechklos:materialnote@1.2.2',
        'less@2.5.0_2',
        'jquery'
    ]);

    api.imply([
        'vojtechklos:materialnote',
    ]);

    api.addFiles([
        'attribute.js',
    ]);

    api.addFiles([
        'cktooltip.js',
        'materialnote.html',
        'materialnote.js',
        'materialnote.less',
    ], 'client');
});

