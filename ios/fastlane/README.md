fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## iOS
### ios make_provisioning
```
fastlane ios make_provisioning
```
Makes a brand new provisioning on Apple's portal
### ios setup_provisioning
```
fastlane ios setup_provisioning
```
Download certificates / provisioning if needed and ensure correct usage



- Make sure your keychain is open (specially for Jenkins)
### ios build
```
fastlane ios build
```
Just another build
### ios deploy_hockey
```
fastlane ios deploy_hockey
```
Build and deploy beta version to Hockey app



Check https://docs.fastlane.tools/actions/hockey for a list of properties
### ios deploy_crashlytics
```
fastlane ios deploy_crashlytics
```


----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
