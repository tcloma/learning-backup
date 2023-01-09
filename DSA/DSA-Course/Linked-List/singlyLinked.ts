class ListNode {
	value: any
	next: any
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class SinglyLinkedList {
	head: ListNode
	tail: ListNode
	length: number

	constructor(value) {
		this.head = new ListNode(value)
		this.tail = this.head
		this.length = 1
	}

	lookup(index) {
		return this.traverseToIndex(index).value
	}

	append(value) {
		const newNode = new ListNode(value)
		this.tail.next = newNode
		this.tail = newNode
		this.length++
	}

	prepend(value) {
		const newNode = new ListNode(value)
		newNode.next = this.head
		this.head = newNode
		this.length++
	}

	insert(index, value) {
		if (index >= this.length) return this.append(value)
		if (index === 0) return this.prepend(value)

		const current = this.traverseToIndex(index - 1)
		const newNode = new ListNode(value)
		newNode.next = current.next
		current.next = newNode
		this.length++
	}

	remove(index) {
		if (index >= this.length) return
		if (index === 0) return

		const current = this.traverseToIndex(index - 1)
		current.next = current.next.next
		this.length--
	}

	printList() {
		const listArr: any[] = []
		let current = this.head
		while (current.next !== null) {
			listArr.push(current.value)
			current = current.next
		}
		listArr.push(current.value)
		console.log(listArr)
	}

	private traverseToIndex(index) {
		let current = this.head
		for (let i = 0; i < index; i++) {
			current = current.next
		}
		return current
	}
}

const example = new SinglyLinkedList(10)
example.append(20)
example.append(30)
example.prepend(5)
example.prepend(0)
example.insert(3, 15)
// example.remove(3)

console.log(example.lookup(3))

example.printList()
