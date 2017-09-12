'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function range(start, end, step) {
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  if (typeof step !== 'number') {
    step = 1;
  }
  if (step > 0 && start >= end || step < 0 && start <= end) {
    return [];
  }
  var result = [];
  step = Math.floor(step);
  for (var i = start; step > 0 ? i < end : i > end; i += step) {
    result.push(i);
  }
  return result;
}

exports.default = range;