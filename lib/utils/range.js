'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function isInteger(number) {
  var result = number === Math.floor(number);
  return result;
}

function range(start, end, step) {
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  if (typeof step !== 'number') {
    step = 1;
  }
  var documentation = 'Please review the flareUp.range() documentation.';
  var parameters = [start, end, step];
  if (parameters.some(function (number) {
    return isInteger(number) === false;
  })) {
    var message = 'Invalid parameters. ' + documentation;
    throw new Error(message);
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