function LinkedList(){
	this.head = new Node('head');//��ʼ��
	this.find = find;	
	this.insert = insert;
	this.remove = remove;
	this.show = show;//����
	this.showReverse = showReverse;//������ʾ
	this.findLast = findLast;//�������һ���ڵ�
}
function find(item){
	var currentNode = this.head;//��ͷ��㿪ʼ
	while(currentNode.element!=item){
		currentNode =  currentNode.next;
	}
	return currentNode;//�ҵ����ؽ�����ݣ�û�ҵ�����null
}
function insert(newElement,item){
	var newNode = new Node(newElement);
	var currentNode = this.find(item);
	newNode.next = currentNode.next;
	newNode.front = currentNode;//����frontָ��ǰ�����
	currentNode.next = newNode;
}

function remove(item){   
    var currentNode = this.find(item);//�ҵ���Ҫɾ���Ľڵ�
    if (currentNode.next != null) {
        currentNode.front.next = currentNode.next;//��ǰ���ڵ�ָ����Ҫɾ���Ľڵ����һ���ڵ�
        currentNode.next.front = currentNode.front;//�ú�̽ڵ�ָ����Ҫɾ���Ľڵ����һ���ڵ�
        currentNode.next = null;//������ǰ�����̵�ָ��Ϊ��
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

function findLast() {//������������һ���ڵ�
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
