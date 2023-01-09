class DoubleListNode {
	value: any
	next: any
	prev: any
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	head: DoubleListNode
	tail: DoubleListNode
	length: number
	constructor(value) {
		this.head = new DoubleListNode(value)
		this.tail = this.head
		this.length = 1
	}
    append(value) {
        const newNode = new DoubleListNode(value)
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
    }
    prepend(value) {
        const newNode = new DoubleListNode(value)
        this.head.prev = newNode
        newNode.next = this.head
        this.head = newNode
        this.length++;
    }
}

const double = new DoublyLinkedList(10)

double.append(20)
double.prepend(5)

console.log(double)