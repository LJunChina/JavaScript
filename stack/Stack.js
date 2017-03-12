
function Stack() {
    this.dataStorage = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}
function push(element) {
    this.dataStorage[this.top++] = element;
}
function pop() {
    return this.dataStorage[--this.top];
}
function peek() {
    return this.dataStorage[this.top-1];
}
function length() {
    return this.top;
}
function clear() {
    this.top = 0;
}