import { AbstractHeap } from './AbstractHeap';
import { Comparator } from '../index';

export class MinHeap<E> extends AbstractHeap<E> {

  private elements: E[];
  private static DEFAULT_CAPACITY: number = 10;
  constructor(elements: E[], comparator: Comparator<E>) {
    super(comparator);

    this.elements = [];
    for (let i = 0; i < elements.length; i++) {
      this.elements[i] = elements[i];
    }
    this.size = this.elements.length;
    this.heapify();
  }


  clear(): void {
    while (this.elements.length) {
      this.elements.pop();
    }
    this.size = 0;
  }


  add(element: E): void {
    this.elementNotNullCheck(element);
    this.ensureCapacity(this.size + 1);
    this.elements[this.size++] = element;
    this.siftUp(this.size - 1);
  }


  get(): E {
    this.emptyCheck();
    return this.elements[0];
  }

  remove(): E {
    this.emptyCheck();

    const lastIndex = --this.size;
    const root: E = this.elements[0];
    this.elements[0] = this.elements[lastIndex];
    this.elements.pop();
    if (this.elements.length > 0) {
      this.siftDown(0);
    }
    return root;
  }


  replace(element: E): E {
    this.elementNotNullCheck(element);

    let root;
    if (this.size === 0) {
      this.elements[0] = element;
      this.size++;
    } else {
      root = this.elements[0];
      this.elements[0] = element;
      this.siftDown(0);
    }
    return element;
  }

	/**
	 * 批量建堆
	 */
  private heapify(): void {
    // 自上而下的上滤
    // for (let i = 1; i < this.size; i++) {
    //   this.siftUp(i);
    // }

    // 自下而上的下滤
    for (let i = (this.size >> 1) - 1; i >= 0; i--) {
      this.siftDown(i);
    }
  }

	/**
	 * 让index位置的元素下滤
	 * @param index
	 */
  private siftDown(index: number): void {
    const element = this.elements[index];
    const half = this.size >> 1;

    // 第一个叶子节点的索引 == 非叶子节点的数量
    // index < 第一个叶子节点的索引
    // 必须保证index位置是非叶子节点
    while (index < half) {

      // index的节点有2种情况
      // 1.只有左子节点
      // 2.同时有左右子节点

      // 默认为左子节点跟它进行比较
      let childIndex = (index << 1) + 1;
      let child: E = this.elements[childIndex];

      // 右子节点
      let rightIndex = childIndex + 1;

      // 选出左右子节点最大的那个
      if (rightIndex < this.size && this.compare(this.elements[rightIndex], child) < 0) {
        child = this.elements[childIndex = rightIndex];
      }

      if (this.compare(element, child) <= 0) break;

      // 将子节点存放到index位置
      this.elements[index] = child;
      // 重新设置index
      index = childIndex;

    }
    this.elements[index] = element;
  }

	/**
	 * 让index位置的元素上滤
	 * @param index
	 */
  private siftUp(index: number): void {
    //		E e = elements[index];
    //		while (index > 0) {
    //			int pindex = (index - 1) >> 1;
    //			E p = elements[pindex];
    //			if (compare(e, p) <= 0) return;
    //			
    //			// 交换index、pindex位置的内容
    //			E tmp = elements[index];
    //			elements[index] = elements[pindex];
    //			elements[pindex] = tmp;
    //			
    //			// 重新赋值index
    //			index = pindex;
    //		}
    const element: E = this.elements[index];
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      const parent = this.elements[parentIndex];
      if (this.compare(element, parent) >= 0) break;

      // 将父元素存储在index位置
      this.elements[index] = parent;

      // 重新赋值index
      index = parentIndex;
    }
    this.elements[index] = element;
  }

  private ensureCapacity(capacity: number): void {
    const oldCapacity = this.elements.length;
    if (oldCapacity >= capacity) return;

    // 新容量为旧容量的1.5倍
    const newCapacity = oldCapacity + (oldCapacity >> 1);
    const newElements: E[] = new Array<E>(newCapacity);
    for (let i = 0; i < this.size; i++) {
      newElements[i] = this.elements[i];
    }
    this.elements = newElements;
  }

  private emptyCheck(): void {
    if (this.size === 0) {
      throw new Error("Heap is empty");
    }
  }

  private elementNotNullCheck(element: E): void {
    if (element === undefined) {
      throw new Error("element must not be null");
    }
  }


  // public Object root() {
  //   return 0;
  // }

  // @Override
  // public Object left(Object node) {
  //   int index = ((int)node << 1) + 1;
  //   return index >= size ? null : index;
  // }

  // @Override
  // public Object right(Object node) {
  //   int index = ((int)node << 1) + 2;
  //   return index >= size ? null : index;
  // }


  // public Object string(Object node) {
  //   return elements[(int)node];
  // }
}