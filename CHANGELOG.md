# Change Log
All notable changes to this project will be documented in this file.
This project adheres to the Node default version scheme, meaning It's safe to use with the caret ^ dependency definition.
The standard for the caret can [be found here](https://docs.npmjs.com/misc/semver#caret-ranges-123-025-004).
Breaking changes result in a different major. UI changes that might break customizations on top of the sdk, will be treated as breaking changes too.

## [0.6.0]
### Added
- API: `useWebcam` options added to facial and document capture step
- API: Possible to change options at runtime by calling `setOptions()` on Object returned by `Onfido.init()`
### Changed
- Internal: isDesktop detection is now based on WebRTC isMobile detection
- Internal: improved Webcam Detection, looking at more than **getUserMedia**, uses WebRTC for that

## [0.5.1]
### Fix
- SDK Core dependency update, fixes issue https://github.com/onfido/onfido-sdk-ui/issues/25
**Note:** This update only changes the dist folder release, npm releases get the dependency update if they do `npm install`

## [0.5.0]
### Added
- API: Flow customization option `steps:[]`
- UI: Overlay to the webcam document capture (**Possibly breaking change**)
- DOC: Integration examples to documentation
### Fixed
- NPM (commonjs2) style of importing the library now works


The standard for this change log can be found [here](http://keepachangelog.com/).

[0.6.0]: https://github.com/onfido/onfido-sdk-ui/compare/0.5.1...0.6.0
[0.5.1]: https://github.com/onfido/onfido-sdk-ui/compare/0.5.0...0.5.1
[0.5.0]: https://github.com/onfido/onfido-sdk-ui/compare/0.4.0...0.5.0