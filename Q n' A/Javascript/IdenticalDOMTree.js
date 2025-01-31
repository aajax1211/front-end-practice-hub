// Implement a function identicalDOMTrees that checks if two DOM
// trees are identical or not. The function takes two DOM nodes as
// the root nodes of two DOM trees and returns a boolean result.

// Two DOM trees are considered identical if they are structurally
// similar, and the DOM nodes on one tree have the exact same attributes
// as the nodes on the same relative position on the other tree.

// Examples
// Tree A and Tree B are considered the same.

// <!-- Tree A -->
// <div>Hello World</div>

// <!-- Tree B -->
// <div>Hello World</div>
// Tree C and Tree D are considered the different.

// <!-- Tree C -->
// <div class="header">Hello World</div>

// <!-- Tree D -->
// <div id="foo">Hello World</div>
// Notes
// The only types of Nodes present in the tree are Element nodes and Text nodes.





function identicalDOMTrees(nodeA, nodeB) {
    if (nodeA.nodeType !== nodeB.nodeType) {
      return false;
    }
  
    if (nodeA.nodeType === Node.TEXT_NODE) {
      return nodeA.textContent === nodeB.textContent;
    }
  
    // We can assume it's an element node from here on.
    if (nodeA.tagName !== nodeB.tagName) {
      return false;
    }
  
    if (nodeA.childNodes.length !== nodeB.childNodes.length) {
      return false;
    }
  
    if (nodeA.attributes.length !== nodeB.attributes.length) {
      return false;
    }
  
    const hasSameAttributes = nodeA
      .getAttributeNames()
      .every(
        (attrName) =>
          nodeA.getAttribute(attrName) === nodeB.getAttribute(attrName),
      );
  
    if (!hasSameAttributes) {
      return false;
    }
  
    return Array.prototype.every.call(nodeA.childNodes, (childA, index) =>
      identicalDOMTrees(childA, nodeB.childNodes[index]),
    );
  }