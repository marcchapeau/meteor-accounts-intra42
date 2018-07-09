import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'
import { Intra42 } from 'meteor/chap:intra42-oauth'

Accounts.oauth.registerService('intra42')

if (Meteor.isClient) {
  const loginWithIntra42 = function (options, callback) {
    if (!callback && typeof options === 'function') {
      callback = options
      options = null
    }
    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback)
    Intra42.requestCredential(options, credentialRequestCompleteCallback)
  }
  Accounts.registerClientLoginFunction('intra42', loginWithIntra42)
  Meteor.loginWithIntra42 = function () {
    return Accounts.applyLoginFunction('intra42', arguments)
  }
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.intra42'],
    forOtherUsers: ['services.intra42.username']
  })
}
