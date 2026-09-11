class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export default class LinkedList {
  constructor() {
    this.ll_head = null;
    this.ll_tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.ll_head) {
      this.ll_head = newNode;
      this.ll_tail = newNode;

      if (!this.ll_head) {
        this.ll_head = this.ll_tail = newNode;
      }
    } else {
      this.ll_tail.nextNode = newNode;
      this.ll_tail = newNode;
    }
    this.length += 1;
  }

  prepend(value) {
    const newNode = new Node(value, this.ll_head);
    this.ll_head = newNode;
    if (this.ll_tail === null) {
      this.ll_tail = newNode;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  head() {
    if (this.length === 0) return undefined;
    return this.ll_head.value;
  }

  tail() {
    if (this.length === 0) return undefined;
    return this.ll_tail.value;
  }

  at(index) {
    if (index < 0 || index > this.length || this.ll_head === null) return null;

    let current = this.ll_head;
    let count = 0;
    while (current !== null && count < index) {
      current = current.nextNode;
      count++;
    }
    return current ? current.value : null;
  }

  pop() {
    if (!this.ll_head) return null;

    const popped = this.ll_tail;

    if (this.ll_head === this.ll_tail) {
      this.ll_head = null;
      this.ll_tail = null;
    } else {
      let current = this.ll_head;
      while (current.nextNode !== this.ll_tail) {
        current = current.nextNode;
      }
      current.nextNode = null;
      this.ll_tail = current;
    }
    this.length--;
    return popped;
  }

  contains(value) {
    let current = this.ll_head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let current = this.ll_head;
    let count = 0;

    while (current !== null) {
      if (current.value === value) return count;
      current = current.nextNode;
      count++;
    }
    return -1;
  }

  toString() {
    const nodes = [];
    let current = this.ll_head;
    while (current !== null) {
      nodes.push(`( ${current.value} )`);
      current = current.nextNode;
    }
    nodes.push("null");
    return nodes.join(" -> ");
  }

  insertAt(index, ...values) {
    if (index < 0 || index > this.length)
      throw new RangeError("Index out of bounds");
    if (values.length === 0) return;

    if (index === 0) {
      values.forEach((value) => this.prepend(value));
      return;
    }

    if (index === this.length) {
      values.forEach((value) => this.append(value));
      return;
    }

    const valuesAsNodes = values.map((value) => new Node(value));
    let current = this.ll_head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }

    let prev = current;
    prev.nextNode = valuesAsNodes[0];
    for (let i = 0; i < valuesAsNodes.length - 1; i++) {
      valuesAsNodes[i].nextNode = valuesAsNodes[i + 1];
    }
    valuesAsNodes[valuesAsNodes.length - 1].nextNode = current;
    this.length += values.length;
  }

  removeAt(index) {
    if (index > this.length || index < 0) return null;
    if (!this.ll_head) {
      this.tail = null;
    }
    if (index === 0) {
      this.ll_head = this.ll_head.nextNode;
    } else {
      let prev = this.ll_head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.nextNode;
      }
      prev.nextNode = prev.nextNode.nextNode;
      if (prev.nextNode === null) {
        this.tail = prev;
      }
    }
    this.length--;
  }
}
