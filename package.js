Package.describe({
  name: 'chap:accounts-intra42',
  version: '1.0.2',
  summary: 'Login service for Intranet 42 accounts',
  git: 'https://github.com/marcchapeau/meteor-accounts-intra42'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.3');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('chap:intra42@1.0.0', ['client', 'server']);

  api.addFiles('intra42_login_button.css', 'client');

  api.addFiles('intra42.js');
});
