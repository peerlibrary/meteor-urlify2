Package.describe({
  summary: "Generate slugs with smart urlify supporting unicode",
  version: '0.2.3',
  name: 'mrt:urlify2',
  git: 'https://github.com/peerlibrary/meteor-urlify2.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:urlify2@0.2.3');
});
