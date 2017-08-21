Package.describe({
  name: 'orionjs:image-attribute',
  summary: 'Image attribute for orion',
  version: '1.8.1',
  git: 'http://github.com/orionjs/orion'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'blaze-html-templates@1.0.1',
    'ecmascript@0.1.6',
    'orionjs:base@1.8.1',
    'orionjs:attributes@1.8.1',
    'orionjs:filesystem@1.8.1',
    'less@2.5.0_1'
    ]);

  api.addFiles([
    'attribute.js',
    ]);

  api.addFiles([
    'colibri.js',
    'helper.js',
    'image.html',
    'image.less',
    'image.js',
    'images.html',
    'images.js',
    ], 'client');

  api.export('Colibri');
});
