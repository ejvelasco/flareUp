"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function is_object_literal(structure) {
  return !!structure && structure.constructor === Object;
}

exports.default = is_object_literal;