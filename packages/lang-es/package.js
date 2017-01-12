Package.describe({
  name: 'orionjs:lang-es',
  version: '1.8.1',
  summary: 'Orion spanish language',
  git: 'https://github.com/orionjs/orion',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('ecmascript@0.1.6');
  api.use('orionjs:lang-en@1.8.1');
  api.imply('orionjs:lang-en');

  api.addFiles('es.js');
});
