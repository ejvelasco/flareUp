'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function _updateParameters(options, examples, depth) {
  options['depth'] = depth + 1;
  options['examples'] = examples;
  options['parentLabels'] = examples.map(function (example) {
    return example['label'];
  });
  return options;
}

exports.default = _updateParameters;