class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.next = None


class LinkedList:
    head = Node(None)
    tail = Node(None)
    length = 0

    def __init__(self, value) -> None:
        self.head.value = value
        self.head.next = None
        self.tail = self.head
        self.length += 1

    def append(self, value):
        newNode = Node(value)
        self.tail.next = newNode
        self.tail = newNode
        self.length += 1

    def prepend(self, value):
        newNode = Node(value)
        newNode.next = self.head
        self.head = newNode
        self.length += 1

    def insert(self, index, value):
        if index >= self.length:
            return self.append(value)
        if index <= 0:
            return self.prepend(value)

        newNode = Node(value)
        current = self.toIndex(index-1)

        newNode.next = current.next
        current.next = newNode
        self.length += 1

    def values(self):
        values = []
        current = self.head
        while current.next != None:
            values.append(current.value)
            current = current.next
        values.append(current.value)
        return values

    def toIndex(self, index):
        current = self.head
        counter = index
        while counter:
            current = current.next
            counter -= 1
        return current


class User:
    def __init__(self, name: str, age: int) -> None:
        self.name = name
        self.age = age


list = LinkedList(5)
list.append(10)
list.append(20)
list.append(30)

list.prepend(10)
list.insert(3, 15)
print(list.values())
