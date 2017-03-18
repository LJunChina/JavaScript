function LinkedList(){
	this.head = new Node('head');//初始化
	this.find = find;	
	this.insert = insert;
	this.remove = remove;
	this.show = show;//正序
	this.showReverse = showReverse;//反序显示
	this.findLast = findLast;//查找最后一个节点
}
function find(item){
	var currentNode = this.head;//从头结点开始
	while(currentNode.element!=item){
		currentNode =  currentNode.next;
	}
	return currentNode;//找到返回结点数据，没找到返回null
}
function insert(newElement,item){
	var newNode = new Node(newElement);
	var currentNode = this.find(item);
	newNode.next = currentNode.next;
	newNode.front = currentNode;//增加front指向前驱结点
	currentNode.next = newNode;
}

function remove(item){   
    var currentNode = this.find(item);//找到需要删除的节点
    if (currentNode.next != null) {
        currentNode.front.next = currentNode.next;//让前驱节点指向需要删除的节点的下一个节点
        currentNode.next.front = currentNode.front;//让后继节点指向需要删除的节点的上一个节点
        currentNode.next = null;//并设置前驱与后继的指向为空
        currentNode.front = null;       
    }	
}
function show(){
	var currentNode = this.head,result = "";
	while(currentNode.next!=null){
		result += currentNode.next.element + " ";
		currentNode = currentNode.next;
	}
	return result;
}

function findLast() {//查找链表的最后一个节点
    var currentNode = this.head;
    while (currentNode.next != null) {
        currentNode = currentNode.next;
    }
    return currentNode;
}
function showReverse() {
    var currentNode = this.head, result = "";
    currentNode = this.findLast();   
    while(currentNode.front!=null){
        result += currentNode.element + " ";
        currentNode = currentNode.front;
    }
    return result;
}
