Accounts.oauth.registerService('intra42');

if (Meteor.isClient) {
  Meteor.loginWithIntra42 = function (options, callback) {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = null;
    }
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Intra42.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.intra42'],
    forOtherUsers: ['services.intra42.username']
  });
}