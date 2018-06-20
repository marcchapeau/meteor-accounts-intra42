if (Package['accounts-ui'] &&
!Package['service-configuration'] &&
!Package.hasOwnProperty('intra42-config-ui')) {
  console.warn(
    "Note: You're using accounts-ui and accounts-intra42,\n" +
    "but didn't install the configuration UI for the Intra42\n" +
    'OAuth. You can install it with:\n' +
    '\n' +
    '    meteor add intra42-config-ui' +
    '\n'
  )
}
