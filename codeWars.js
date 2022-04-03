function alphabetPosition(text) {
    let pares = {};
    for (let i = 0; i < 26; i++) {
        pares[String.fromCharCode(97 + i)] = i + 1;
    }
    return text.toLowerCase().split('').reduce((result, item) => {
        if (item in pares) result.push(pares[item]);
        return result;
    }, []).join(' ');
}

function persistence(num) {
    function mult(multNumber) {
        let result = 1;
        for (let i = 0; i < multNumber.length; i++) {
            result *= multNumber[i];
        }
        return result;
    }
    let count = 0;
    let number = num;
    while (num > 9) {
        num = mult(num.toString());
        count++;
    }
    return count;
}

function isValidWalk(walk) {
    if (walk.length !== 10) return false;

    const result = {
        horizontal: 0,
        vertical: 0
    };
    walk.forEach((item) => {
        switch (item) {
            case 'n':
                result.vertical++;
                break;
            case 's':
                result.vertical--;
                break;
            case 'w':
                result.horizontal--;
                break;
            case 'e':
                result.horizontal++;
                break;
        }
    });
    if (result.horizontal === 0 && result.vertical === 0) return true;
    return false;
}

function duplicateEncode(word) {
    const lowerWord = word.toLowerCase();
    return lowerWord.split('').map((item, index) => {
        for (let i = 0; i < lowerWord.length; i++) {
            if (i == index) continue;

            if (item == lowerWord[i]) {
                console.log(`${item} = true; i = ${i}`);
                return ')';
            }
        }
        console.log(`${item} = false`);
        return '(';
    }).join('');

}

function duplicateCount(text) {
    let result = 0;
    let obj = {};

    for (let letter of text) {
        if (letter.charCodeAt() > 64 && letter.charCodeAt() < 91) {
            letter = String.fromCharCode(letter.charCodeAt() + 32);
        }

        if (letter in obj) {
            obj[letter]++;
        } else {
            obj[letter] = 1;
        }
    }

    for (let key in obj) {
        if (obj[key] > 1) result++;
    }

    return result;
}

function validParentheses(parens) {
    let stack = [];

    for (let item of parens) {
        if (item === '(') stack.push(item);
        else if (item === ')' && stack.includes('(')) stack.pop();
        else return false;
    }
    if (stack.length === 0) return true;
    return false;
}

function humanReadable(seconds) {
    let hours = "00" + Math.floor(seconds / 3600);
    let mins = "00" + Math.floor((seconds / 3600 - +hours) * 60);
    let secs = "00" + (seconds - (+hours * 3600) - (+mins * 60));
    return `${hours[hours.length - 2] + hours[hours.length - 1]}:${mins[mins.length - 2] + mins[mins.length - 1]}:${secs[secs.length - 2] + secs[secs.length - 1]}`;
}

function moveZeros(arr) {
    let zeros = 0;
    let result = [];

    arr.forEach(item => {
        (item !== 0) ? result.push(item): zeros++;
    });

    while (zeros > 0) {
        result.push(0);
        zeros--;
    }
    return result;
}

function pigIt(str) {
    let arr = str.split(" ");
    let result = arr.map(word => {
        if (word.charCodeAt() < 65) return word;
        return word.slice(1) + word[0] + "ay";
    });
    return result.join(" ");
}

function rgb(r, g, b) {
    return [...arguments].map((item) => {
        if (item < 0) return "00";
        if (item > 255) item = 255;
        return item > 15 ? item.toString(16).toUpperCase() : "0" + item.toString(16).toUpperCase();
    }).join("");
}


// data structure
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const node = new Node(data);

        if (this.tail) {
            this.tail.next = node;
        }

        if (!this.head) {
            this.head = node;
        }

        this.tail = node;
    }

    prepand(data) {
        const node = new Node(data, this.head);

        if (!this.tail) {
            this.tail = node;
        }

        this.head = node;
    }

    insertAfter(after, data) {
        const found = this.find(after);

        if (!found) {
            return;
        }

        found.next = new Node(data, found.next);
    }

    find(data) {
        if (!this.head) {
            return;
        }

        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
    }

    toArray() {
        if (!this.head) {
            return [];
        }
        const result = [];
        let current = this.head;

        while(current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    remove(data) {
        if (!this.head) {
            return;
        }

        while(this.head && this.head.data === data) {
            this.head = this.head.next;
        }

        let current = this.head;
        while(current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
            }
            current = current.next;
        }
        if (this.tail.data === data) {
            this.tail = current;
        }
    }
}

const list = new LinkedList();
list.append("world");
list.prepand("hi");
list.append("!");
list.insertAfter("world", "qwe");
list.remove("qwe");
console.log(list);
console.log(list.toArray());