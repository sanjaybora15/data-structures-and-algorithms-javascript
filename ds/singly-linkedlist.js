
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        },
        this.tail = this.head
    }

    append(val) {
        const obj = {
            value: val,
            next: null
        }
        this.tail.next = obj
        this.tail = obj
    }

    prepend(val) {
        const newNode = {
            value: val,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode
    }

    traversing(reqIndex) {
        let count = 0
        let currentNode = this.head;
        
        while(count !== reqIndex) {
            count++
            currentNode = currentNode.next
        }

        return currentNode;
    }
 
    insert(index, val) {
        const newNode = {
            value: val,
            next: null,
        }

        let mainNode = this.traversing(index - 1);
        let nextNode = mainNode.next;

        mainNode.next = newNode;
        newNode.next = nextNode
    }

    delete(index) {
        if(index === 0 || Math.sign(index) === -1) return
        let parentNode = this.traversing(index - 1);
        let nexNode = parentNode.next.next
        parentNode.next = nexNode;
    }

    length() {
        let currentNode = this.head
        let arr = []
        while(currentNode !== null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(arr)
    }
    reverse() {
        let first = this.head;
        let second = first.next
        while(second) {
            let temp = second.next
            second.next = first
            first = second
            second  = temp
        }
        this.head.next = null
        this.head = first
        this.tail = this.head
    }

}

let newList = new LinkedList(10)
newList.append(20);
newList.append(30);
newList.prepend(5);
newList.insert(3, 3);
newList.delete(2);
newList.length();
newList.reverse();
newList.length();
console.log(newList);