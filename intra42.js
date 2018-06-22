import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'
import { Intra42 } from 'meteor/chap:intra42-oauth'

const settings = Meteor.settings
const app = settings.public && settings.public.intra42 && settings.public.intra42.app
let name = 'intra42'
if (app) name += `_${app}`

Accounts.oauth.registerService(name)

if (Meteor.isClient) {
  const loginWithIntra42 = function (options, callback) {
    if (!callback && typeof options === 'function') {
      callback = options
      options = null
    }
    const credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback)
    Intra42.requestCredential(options, credentialRequestCompleteCallback)
  }
  Accounts.registerClientLoginFunction(name, loginWithIntra42)
  Meteor.loginWithIntra42 = function () {
    return Accounts.applyLoginFunction(name, arguments)
  }
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.intra42'],
    forOtherUsers: ['services.intra42.username']
  })
}
