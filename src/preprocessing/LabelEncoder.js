class LabelEncoder {
  contructor() {
    this['classes'] = null;
  }
  fit(y) {
    this['classes'] = y;
    console.log(this['classes']);
  }
  fit_transform(y) {

  }
  transform(y) {

  }
}

export default LabelEncoder;