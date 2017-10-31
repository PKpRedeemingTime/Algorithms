function Node(val) {
    this.val = val;
    this.next = null;
}
function SLL() {
    this.head = null;
    this.addFront = function(val) {
        var node = new Node(val);
        if(!this.head) {
            this.head = node;
            return this;
        }
        else {
            node.next = this.head;
            this.head = node;
            return this;
        }
    }
    this.contains = function(val) {
        if(!this.head) {
            return false;
        }
        var current = this.head;
        while(current) {
            if(current.val == val) {
                return true;
            }
            else {
                current = current.next
            }
        }
        return false;
    }
    this.removeFront = function() {
        if(!this.head) {
            return false;
        }
        else {
            this.head = this.head.next;
        }
        return this;
    }
    this.front = function() {
        if(!this.head) {
            return false;
        }
        else {
            return this.head.val;
        }
    }
    this.length = function() {
        if(!this.head) {
            return false;
        }
        var counter = 0;
        var current = this.head;
        while(current) {
            current = current.next;
            counter++;
        }
        return counter;
    }
    this.display = function() {
        if(!this.head) {
            return false;
        }
        var current = this.head;
        while(current) {
            console.log(current.val);
            current = current.next
        }
    }
    this.max = function() {
        if(!this.head) {
            return false;
        }
        var max = this.head.val;
        var current = this.head;
        while(current) {
            if(max < current.val) {
                max = current.val;
            }
            current = current.next;
        }
        return max;
    }
    this.min = function() {
        if(!this.head) {
            return false;
        }
        var min = this.head.val;
        var current = this.head;
        while(current) {
            if(min > current.val) {
                min = current.val;
            }
            current = current.next;
        }
        return min;
    }
    this.average = function() {
        if(!this.head) {
            return false;
        }
        var sum = 0;
        var counter = 0;
        var current = this.head;
        while(current) {
            sum += current.val;
            counter++;
            current = current.next;
        }
        return sum / counter;
    }
    this.back = function() {
        if(!this.head) {
            return false;
        }
        var current = this.head;
        while(current.next) {
            current = current.next;
        }
        return current.val;
    }
    this.removeBack = function() {
        if(!this.head) {
            return false;
        }
        if(!this.head.next) {
            this.head = null;
            return this;
        }
        var current = this.head;
        while(current.next.next) {
            current = current.next
        }
        current.next = null;
        return this;
    }
    this.addBack = function(val) {
        var newNode = new Node(val);
        var current = this.head;
        if(!this.head) {
            this.head = newNode;
            return this;
        }
        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    this.moveMinToFront = function() {
        if(!this.head) {
            return false;
        }
        if(!this.head.next) {
            return this;
        }
        var min = this.head.val;
        var current = this.head;
        while(current) {
            if(min > current.val) {
                min = current.val;
            }
            current = current.next;
        }
        var minNode = new Node(min);
        minNode.next = this.head;
        this.head = minNode;
        current = this.head.next;
        while(current.next.next) {
            if(current.next.val == min) {
                current.next = current.next.next;
            }
            current = current.next;
        }
        if(current.next.val == min){
            current.next = current.next.next;
        }
        return this;
    }
    this.moveMaxToBack = function() {
        if (!this.head) {
            return false;
        }
        if(!this.head.next) {
            return this;
        }
        var current  = this.head;
        var max = this.head.val;
        while(current) {
            if(max < current.val) {
                max = current.val;
            }
            current = current.next;
        }
        current = this.head;
        while(current.next) {
            if(current.next.val == max) {
                current.next = current.next.next;
            }
            current = current.next;
        }
        var maxNode = new Node(max);
        current.next = maxNode;
        return this;
    }
    this.removeNegative = function() {
        if (!this.head) {
            return false;
        }
        while (this.head.val < 0) {
            if(!this.head.next) {
                this.head = null;
                return this;
            }
            else {
                this.head = this.head.next;
            }
        }
        if(!this.head.next) {
            return this;
        }
        var current = this.head;
        while(current.next.next) {
            if(current.next.val < 0) {
                while(current.next.val < 0) {
                    current.next = current.next.next;
                    if(!current.next) {
                        return this;
                    }
                }
            }
            current = current.next;
        }
        if(current.next.val < 0) {
            current.next = current.next.next;
        }
        return this;
    }
    this.dedupe = function() { //This doesn't work
        if(!this.head) {
            return false;
        }
        if(!this.head.next) {
            return this;
        }
        var current = this.head;
        var save = this.head;
        var temp = 0;
        while(save.next) {
            temp = save.val;
            while(current.next) {
                if(current.next.val == temp) {
                    current.next = current.next.next;
                }
                if(!current.next) {
                        break;
                    }
                current = current.next
            }
            if(!list.next) {
                return list;
            }
            save = list.next;
            current = list.next;
        }
        return list;
    }
}

function zip(h1, h2) { //This doesn't work
    if(!h1) {
        if(h2) {
            return h2;
        }
        else {
            return false;
        }
    }
    if(!h2) {
        return h1;
    }
    var current1 = h1.next;
    var current2 = h2.head;
    h3.head = h1.head;
    while (current1 && current2) {
        if(current2) {
            h3.next = current2;
        }
        h3.next = h3.next.next;
        if(current1) {
            h3.next = current1;
        }
        h3.next = h3.next.next;
        current1 = current1.next;
        current2 = current2.next;
    }
    return h3;
}

var list = new SLL();


list.addBack(1);
list.addBack(2);
list.addBack(2);
list.addBack(1);
list.addBack(3);
list.addBack(3);
list.dedupe();
list.display();
