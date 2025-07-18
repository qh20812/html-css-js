class HtmlElement {
  constructor(tagName) {
    this.tagName = tagName.toUpperCase();
    this.attributes = {};
    this.children = [];
    this.innerHTML = '';
    this.parent = null;
  }
  setAttribute(name, value) {
    this.attributes[name] = value;
  }
  getAttribute(name) {
    return this.attributes[name] || null;
  }
  appendChild(child) {
    if (child instanceof HtmlElement) {
      this.children.push(child);
      child.parent = this;
      this.updateInnerHTML();
    } else {
      throw new Error('Child must be an HtmlElement');
    }
  }
  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
      child.parent = null;
      this.updateInnerHTML();
    } else {
      throw new Error('Child not found');
    }
  }
  updateInnerHTML() {
    const attrs = Object.keys(this.attributes)
      .map(key => `${key}="${this.attributes[key]}"`)
      .join(' ');
    const attrsString = attrs ? ` ${attrs}` : '';
    const childrenHTML = this.children.map(child => child.toString()).join('');
    this.innerHTML = `<${this.tagName}${attrsString}>${childrenHTML}</${this.tagName}>`;
  }
  toString() {
    return this.innerHTML;
  }
}

const div = new HtmlElement('div');
div.setAttribute('id', 'container');
div.setAttribute('class', 'main');
const p = new HtmlElement('p');
p.setAttribute('class', 'text');
p.innerHTML = 'Welcome';
div.appendChild(p);
console.log(div.toString());
const span = new HtmlElement('span');
span.innerHTML = 'New Span';
div.appendChild(span);
console.log(div.toString());
div.removeChild(p);
console.log(div.toString());