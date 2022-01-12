/* eslint-disable */
export default class Calculate {
  constructor(list) {
    this.contextList = list;
    this.totalContect = [];
  }

  get getList() {
    return this.contextList;
  }

  get empty() {
    return this._length === 0 && Array.isArray(this.contextList) ? true : false;
  }

  _push(value) {
    // push 로직만 넣어 놓을 것
    this.contextList[this.contextList.length] = value;
    return this.contextList;
  }

  _pop(count = 1) {
    const newList = [...this.contextList];
    const popedList = [];
    for (let i = 0; i < newList.length - count; i++) {
      popedList[i] = newList[i];
    }

    this.contextList = popedList;

    return this.contextList;
  }

  _clear() {
    return (this.contextList = []);
  }
}
