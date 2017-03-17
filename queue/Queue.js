function Queue(array) {   
    if (array instanceof Array) {
        this.dataStorage = array;
    } else {
        throw "'"+array + "' is not an Array";
    }
}

Queue.prototype = {
    enqueue: function (element) {//向队列中添加元素
        this.dataStorage.push(element);
    },
    dequeue: function () {//删除队首元素
        return this.dataStorage.shift();
    },
    front: function () {//返回队首元素
        return this.dataStorage[0];
    },
    back: function () {//返回队尾元素
        return this.dataStorage[this.dataStorage.length - 1];
    },
    toString: function () {//输出队列中所有元素
        var result = "";
        for (var i = 0; i < this.dataStorage.length; i++) {
            result += this.dataStorage[i] + "\t";
        }
        return result;
    },
    empty: function () {//判定队列是否为空
        if (this.dataStorage.length == 0) {
            return true;
        }
        return false;
    }
}