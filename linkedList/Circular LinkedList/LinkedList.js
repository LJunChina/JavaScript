function LinkedList(){
    this.head = new Node('head');//��ʼ��
    this.head.next = this.head;//ֱ�ӽ�ͷ�ڵ��nextָ��ͷ�ڵ��γ�ѭ������
	this.find = find;
	this.frontNode = frontNode;
	this.insert = insert;
	this.remove = remove;
	this.show = show;	
}
function find(item){
    var currentNode = this.head;//��ͷ��㿪ʼ
	while(currentNode.element!=item&&currentNode.next.element!='head'){
		currentNode =  currentNode.next;
	}
	return currentNode;//�ҵ����ؽ�����ݣ�û�ҵ�����null
}
function insert(newElement,item){
	var newNode = new Node(newElement);
	var currentNode = this.find(item);
	//console.log(currentNode);
	newNode.next = currentNode.next;
	currentNode.next = newNode;
}
function frontNode(item){
	var currentNode = this.head;//��ͷ��㿪ʼ����
	while(currentNode.next.element!=item&&currentNode.next!=null){
		currentNode = currentNode.next;
	}	
	return currentNode;
}
function remove(item){
	var frontNode = this.frontNode(item);	
	frontNode.next = frontNode.next.next;//��ǰ����ǰ�����nextָ��ǰ������next����next
}
function show(){
	var currentNode = this.head,result = "";
	while (currentNode.next != null && currentNode.next.element != "head") {	  
		result += currentNode.next.element + " ";
		currentNode = currentNode.next;
	}
	return result;
}
