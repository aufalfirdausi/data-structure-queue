
class Stack {
    constructor(){
        this.stack = [];
    }

    push(element) {
        this.stack.push(element)
    }

    pop(){
        if (this.isEmpty()) {
            return "stack is Empty, cant perfome pop"
        }
        return this.stack.pop()
    }

    peek() {
        if (this.isEmpty()) {
            return "stack is Empty, cant perfome peek"
    }
    return this.stack[this.size() - 1];
    }

    isEmpty(){
        return this.size() === 0;
    }

    size() {
        return this.stack.length
    }

}

const stack = new Stack();

stack.push(10);
stack.push(69);
stack.push(420);

console.log(stack.size());