import { Stack } from "./Stack.js"

console.log("Addition Program by ")
console.log("Chayanon Maksakarn 67130500071")

let s1 = new Stack();
s1.push(5);
s1.push(14);
s1.push(400);
s1.push(50);

// console.log( s1.pop() )
// console.log( s1.pop() )

function addtion(a, b) {
    let op1 = new Stack();
    let op2 = new Stack();
    let resultStack = new Stack();

    for (let i = 0; i < a.length; i++) {
        op1.push(a.substring(i, i + 1));
    }
    for (let i = 0; i < b.length; i++) {
        op2.push(b.substring(i, i + 1));
    }

    let carry = 0;
    while (!op1.isEmpty() || !op2.isEmpty()) {
        let x = 0;
        let y = 0;
        if (!op1.isEmpty()) {
            x = op1.pop();
        }
        if (!op2.isEmpty()) {
            y = op2.pop();
        }
        let z = parseInt(x) + parseInt(y) + carry;

        resultStack.push(z % 10);
        carry = parseInt(z / 10);
    }

    let answer = "";
    while (!resultStack.isEmpty()) {
        answer = answer + resultStack.pop()
    }

    return answer;
}

let result = addtion(
    "9844398543798543879439832423", 
    "329340954375890458024590245"
)
console.log(result)
