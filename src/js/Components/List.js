/* eslint-disable */
export default class List {
  constructor(list) {
    this._list = list;
    this._length = list.length;
  }

  get getList() {
    return this._list;
  }

  get length() {
    return this._length;
  }

  get empty() {
    return this._length === 0 && Array.isArray(this._list) ? true : false;
  }

  _push(value) {
    // push 로직만 넣어 놓을 것
    this._list[this._length] = value
    return this._list;
  }

  _pop(count = 1) {
    const newList = [...this._list];
    const popedList = [];
    for (let i = 0; i < newList.length - count; i++) {
      popedList[i] = newList[i];
    }

    this._list = popedList;

    return this._list;
  }

  _clear() {
    return this._list = []
  }
}


