class _Node {
  constructor(options) {
    Object.keys(options).forEach((key) => {
      this[key] = options[key];
    });
  }
}

export default _Node;