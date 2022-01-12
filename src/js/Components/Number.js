import Calculate from "./Calculate";

export default class Number extends Calculate {
  constructor(list) {
    super();
    this.numberList = list;
  }

  _merge() {
    return this.numberList;
  }
}
