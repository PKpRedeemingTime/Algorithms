function BTNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
};
function BST() {
    this.root = null;
    this.add = function(val) {
        var node = new BTNode(val);
        if(!this.root) {
            this.root = node;
            return this;
        }
        var current = this.root;
        while(current) {
            if (val >= current.val) {
                if(!current.right) {
                    current.right = node;
                    return this;
                }
                current = current.right;
            }
            else if(val < current.val) {
                if(!current.left) {
                    current.left = node;
                    return this;
                }
                current = current.left;
            }
        }
    }
    this.contains = function(val) {
        if(!this.root) {
            return false;
        }
        var current = this.root;
        while(current) {
            if(val >= current.val) {
                if(!current.right) {
                    return false;
                }
                if(val == current.right.val) {
                    return true;
                }
                current = current.right;
            }
            else {
                if(!current.left) {
                    return false;
                }
                if(val == current.left.val) {
                    return true;
                }
                current = current.left
            }
        }
    }
    this.max = function() {
        if(!this.root) {
            return false;
        }
        if(!this.root.right) {
            return this.root.val;
        }
        var current = this.root;
        while(current.right) {
            current = current.right;
            if(!current.right) {
                return current.val;
            }
        }
    }
    this.min = function() {
        if(!this.root) {
            return false;
        }
        if(!this.root.left) {
            return this.root.val;
        }
        var current = this.root;
        while(current.left) {
            current = current.left;
            if(!current.left) {
                return current.val;
            }
        }
    }
    this.size = function() {
        if(!this.root) {
            return 0;
        }
        var count = 1;
        var current = this.root;
        (function helper(current) {
            if(!current.right && !current.left) {
                return count;
            }
            if(current.left) {
                count++;
                helper(current.left);
            };
            if(current.right) {
                count++;
                helper(current.right);
            }
        }) (current);
        return count;
    }
}

var tree = new BST();
tree.add(56);
tree.add(47);
tree.add(74);
tree.add(53);
tree.add(78);
tree.add(36);
tree.add(62);
console.log(tree.contains(50));