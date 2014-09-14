Package.describe({
  summary: "Generate slugs with smart urlify supporting unicode",
  version: '0.2.3',
  name: 'peerlibrary:urlify2',
  git: 'https://github.com/peerlibrary/meteor-urlify2.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1.1');

  api.export('URLify2');

  api.add_files([
    'urlify2.js',
    'n11n.js',
    'urlify.js',
    'urlify-more.js'
  ], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['peerlibrary:urlify2', 'tinytest', 'test-helpers'], ['client', 'server']);

  api.add_files('tests.js', ['client', 'server']);
});
