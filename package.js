Package.describe({
  summary: 'Login service for Intranet 42 accounts',
  version: '1.3.0',
  name: 'chap:accounts-intra42',
  git: 'https://github.com/marcchapeau/meteor-accounts-intra42'
})

Package.onUse(function (api) {
  api.use('ecmascript')
  api.use('accounts-base', ['client', 'server'])
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server'])

  api.use('accounts-oauth', ['client', 'server'])
  api.use('chap:intra42-oauth')
  api.imply('chap:intra42-oauth')

  api.use(
    ['accounts-ui', 'intra42-config-ui'],
    ['client', 'server'],
    {weak: true}
  )
  api.addFiles('notice.js')
  api.addFiles('intra42.js')
})
