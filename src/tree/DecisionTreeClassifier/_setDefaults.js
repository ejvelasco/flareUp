function _setDefaults(options, defaults) {
  Object.keys(defaults).forEach((key) => {
    if (typeof options[key] !== 'undefined') {
      defaults[key] = options[key];
    }
  });
  return defaults;
}

export default _setDefaults;