export default class Queue {
    constructor(list) {
        this._list = list;
        this._length = list.length;
    }

    get getList() {
        return this._list;
    }

    push(value) {
        // push 로직만 넣어 놓을 것
        const newList = [...this._list]
        const pushedList = [];
        pushedList[0] = value
        for (let i = 0; i < newList.length; i++) {
            pushedList[i + 1] = newList[i];
        }

        return pushedList
    }
}
