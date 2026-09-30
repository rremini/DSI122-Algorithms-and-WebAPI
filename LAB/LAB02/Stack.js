export class Stack {
    constructor() {
        this.stackArr = [];
        this.top = -1;
        this.size = 0;
    }
    push( newValue ) {
        this.top++;
        this.stackArr[this.top] = newValue;
        this.size++;
    }
    pop() {
        if ( !this.isEmpty() ) {
            let x = this.stackArr[this.top];
            this.top--;
            this.size--;
            return x;
        }
        }
    topElement() {
        let x = -1;
        if ( !this.isEmpty() ) {
            x = this.stackArr[this.top];
        }
        return x;
    }
    isEmpty() {
        return this.top < 0;
    }
    clear() {
        this.top = -1;
        this.size = 0;
    }
}

