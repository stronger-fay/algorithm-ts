import * as _ from 'lodash'
import { AbstractList } from './AbstractList';

export class LinkedList<E> extends AbstractList<E> {
  private first?: LinkedNode<E>;
  private last?: LinkedNode<E>;

  get(index: number): E {
    return this.node(index).element;
  }
  set(index: number, element: E): E {
    let node = this.node(index);
    const old = node.element;
    node.element = element;
    return old;
  }

  addElementAtIndex(index: number, element: E) {
    this.rangeCheckForAdd(index);

    // size == 0
    // index == 0
    if (index == this.size) { // 往最后面添加元素
      let oldLast = this.last;
      this.last = new LinkedNode<E>(oldLast, element, undefined);
      if (oldLast === undefined) { // 这是链表添加的第一个元素
        this.first = this.last;
      } else {
        oldLast.next = this.last;
      }
    } else {
      let next = this.node(index);
      let prev = next.prev;
      let node = new LinkedNode<E>(prev, element, next);
      next.prev = node;

      if (prev == null) { // index == 0
        this.first = node;
      } else {
        prev.next = node;
      }
    }

    this.size++;
  }

  remove(index: number): E {
    this.rangeCheck(index);

    let node = this.node(index);
    let prev = node?.prev;
    let next = node?.next;

    if (prev === undefined) { // index == 0
      this.first = next;
    } else {
      prev.next = next;
    }

    if (next === undefined) { // index == size - 1
      this.last = prev;
    } else {
      next.prev = prev;
    }

    this.size--;
    return node!.element;
  }

  clear(): void {
    this.size = 0;
    this.first = undefined;
    this.last = undefined;
  }

  indexOf(element: E): number {
    if (element === undefined) {
      let node = this.first;
      for (let i = 0; i < this.size; i++) {
        if (node?.element === undefined) return i;

        node = node.next;
      }
    } else {
      let node = this.first;
      for (let i = 0; i < this.size; i++) {
        if (_.isEqual(element, node?.element)) return i;
        node = node?.next;
      }
    }
    return this.ELEMENT_NOT_FOUND;
  }

  /**
	 * 获取index位置对应的节点对象
	 * @param index
	 * @return
	 */
  private node(index: number): LinkedNode<E> {
    this.rangeCheck(index);

    if (index < (this.size >> 1)) {
      let node = this.first;
      for (let i = 0; i < index; i++) {
        node = node?.next;
      }
      return node!;
    } else {
      let node = this.last;
      for (let i = this.size - 1; i > index; i--) {
        node = node?.prev;
      }
      return node!;
    }
  }

  public toString(): string {
    let string = `size=${this.size}, [`;
    let node = this.first;
    for (let i = 0; i < this.size; i++) {
      if (i != 0) {
        string += ', ';
      }

      string += node!.toString();
      node = node?.next;
    }
    string += "]";
    return string;
  }
}

class LinkedNode<E> {
  element: E;
  next?: LinkedNode<E>;
  prev?: LinkedNode<E>;

  constructor(prev: LinkedNode<E> | undefined, element: E, next: LinkedNode<E> | undefined) {
    this.element = element;
    this.next = next;
    this.prev = prev;
  }

  toString() {
    let string = '';
    if (this.prev !== undefined) {
      string += this.prev.element;
    } else {
      string += "null";
    }

    string += "_";
    string += this.element;
    string += "_";

    if (this.next !== undefined) {
      string += this.next.element;
    } else {
      string += "null";
    }

    return string;
  }
}