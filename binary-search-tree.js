class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else current = current.left;
      }
      if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    if (current.val > val) {
      if (current.left === null) {
        current.left = newNode;
        return this;
      } else return this.insertRecursively(val, current.left);
    }
    if (current.val < val) {
      if (current.right === null) {
        current.right = newNode;
        return this;
      } else return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) {
      return undefined;
    }
    var current = this.root;
    while (true) {
      if (current.val === val) {
        return current;
      }
      if (current.left === null && current.right === null) return undefined;
      if (val < current.val) {
        current = current.left;
      }
      if (val > current.val) {
        current = current.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) {
      return undefined;
    }
    if (current.val === val) {
      return current;
    }
    if (val < current.val) {
      if (current.left === null) return undefined;
      else return this.findRecursively(val, current.left);
    }
    if (val > current.val) {
      if (current.right === null) return undefined;
      else return this.findRecursively(val, current.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let arr = [];
    let current = this.root;
    function traverse(node) {
      arr.push(node.val);
      if (node.left !== null) {
        traverse(node.left);
      }
      if (node.right !== null) {
        traverse(node.right);
      }
    }
    traverse(current);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let arr = [];
    let current = this.root;
    function traverse(node) {
      if (node.left !== null) {
        traverse(node.left);
      }
      arr.push(node.val);
      if (node.right !== null) {
        traverse(node.right);
      }
    }
    traverse(current);
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let arr = [];
    let current = this.root;
    function traverse(node) {
      if (node.left !== null) {
        traverse(node.left);
      }
      if (node.right !== null) {
        traverse(node.right);
      }
      arr.push(node.val);
    }
    traverse(current);
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue =[]
    let arr=[]
    let current = this.root
    
    queue.push(current)
    
    while(queue.length){
      let current = queue.shift()
      arr.push(current.val)
      if(current.left){
        queue.push(current.left)
      }
      if(current.right !== null){
        queue.push(current.right)
      }
    }
    return arr
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
