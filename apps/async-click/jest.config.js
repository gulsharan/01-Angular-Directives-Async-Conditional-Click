module.exports = {
  name: 'async-click',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/async-click',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
