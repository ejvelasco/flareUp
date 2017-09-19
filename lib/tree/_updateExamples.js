'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function _updateExamples(options, split, child) {
  options['examples'] = split[child];
  options['parentLabels'] = split[child + 'Labels'];
  return options;
}

exports.default = _updateExamples;