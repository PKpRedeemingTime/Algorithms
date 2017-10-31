function Node(val) {
    this.val = val;
    this.next = null;
}

function slQueue() {
    this.head = null;
    this.tail = null;
    this.enQueue = function(val) {
        var node = new Node(val);
        if(!this.tail) {
            this.head = node;
            this.tail = node;
            return this;
        }
        this.tail.next = node;
        this.tail = node;
        return this;
    }
    this.deQueue = function() {
        if(!this.head) {
            return false;
        }
        if(!this.head.next) {
            this.head = this.head.next;
            this.tail = null;
            return this;
        }
        this.head = this.head.next;
        return this;
    }
    this.front = function() {
        if(!this.head) {
            return false;
        }
        return this.head.val;
    }
    this.contains = function(val) {
        if(!this.head) {
            return false;
        }
        var current = this.head;
        while(current) {
            if(current.val == true) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    this.isEmpty = function() {
        if(!this.head) {
            return true;
        }
        else {
            return false;
        }
    }
    this.size = function() {
        if(!this.head) {
            return 0;
        }
        var count = 0;
        var current = this.head;
        while(current) {
            count++;
            current = current.next;
        }
        return count;
    }
}

function compareQueues(L1, L2) {
    if(!L1.head && !L2.head) {
        return true;
    }
    var current1 = L1.head;
    var current2 = L2.head;
    while(current1 && current2) {
        if(current1.val != current2.val) {
            return false;
        }
        if((!current1.next && current2.next) || (current1.next && !current2.next)) {
            return false;
        }
        current1 = current1.next;
        current2 = current2.next;
    }
    return true;
}

var queue = new slQueue();
queue.enQueue(1);
console.log(queue);
queue.deQueue();
console.log(queue);