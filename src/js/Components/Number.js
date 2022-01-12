import List from "./List";

export default class Number extends List {
    constructor(list) {
        super(list)  
        this._list = [ this._list.join("") ]
    }
}