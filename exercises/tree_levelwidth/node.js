module.exports = class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children.filter(node => {
      return node.data !== data;
    })
  }
};
