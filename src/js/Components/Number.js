import List from "./List";

export default class Number extends List {
    constructor(list) {
        super(list)
    }

    _merge() {
        
        return [this._list.join("")]
    }

}