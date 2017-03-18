function LinkedList(){
    this.head = new Node('head');//初始化
    this.head.next = this.head;//直接将头节点的next指向头节点形成循环链表
	this.find = find;
	this.frontNode = frontNode;
	this.insert = insert;
	this.remove = remove;
	this.show = show;	
}
function find(item){
    var currentNode = this.head;//从头结点开始
	while(currentNode.element!=item&&currentNode.next.element!='head'){
		currentNode =  currentNode.next;
	}
	return currentNode;//找到返回结点数据，没找到返回null
}
function insert(newElement,item){
	var newNode = new Node(newElement);
	var currentNode = this.find(item);
	//console.log(currentNode);
	newNode.next = currentNode.next;
	currentNode.next = newNode;
}
function frontNode(item){
	var currentNode = this.head;//从头结点开始查找
	while(currentNode.next.element!=item&&currentNode.next!=null){
		currentNode = currentNode.next;
	}	
	return currentNode;
}
function remove(item){
	var frontNode = this.frontNode(item);	
	frontNode.next = frontNode.next.next;//当前结点的前驱结点next指向前驱结点的next结点的next
}
function show(){
	var currentNode = this.head,result = "";
	while (currentNode.next != null && currentNode.next.element != "head") {	  
		result += currentNode.next.element + " ";
		currentNode = currentNode.next;
	}
	return result;
}
