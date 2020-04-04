import { Comparator, Comparable } from './index';

// todo: @wenqi
export class MinHeap<E> { // E 应该具备可比较性， <E extends Comparable<E>> 暂时未实现，默认返回 0；但是必须提供comparator对象
  private size: number;
  private comparator: Comparator<E>;
  private compare(e1: E, e2: E): number {
    return this.comparator !== undefined
      ? this.comparator.compare(e1, e2)
      : 0; // todo @wenqi
    // : (e1).compareTo(e2);
  }
  private elements: Array<E>;
  // private static DEFAULT_CAPACITY: number = 10;

  constructor(elements: Set<E>, comparator: Comparator<E>) {
    this.comparator = comparator;
    this.size = elements === undefined ? 0 : elements.size;
    this.elements = [];
    let i = 0;
    for (const element of elements) {
      this.elements[i++] = element;
    }
    this.heapify();
  }

  public length(): number {
    return this.size;
  }

  public isEmpty() {
    return this.size === 0;
  }

  public addAll(elements: Set<E>): void {
    if (elements === undefined) return;
    for (const element of elements) {
      this.add(element);
    }
  }


  public clear(): void {
    for (let i = 0; i < this.size; i++) {
      this.elements.pop();
    }
    this.size = 0;
  }

  public add(element: E): void {
    this.elementNotNullCheck(element);
    // this.ensureCapacity(this.size + 1); // 不扩容
    this.elements[this.size++] = element;
    this.siftUp(this.size - 1);
  }

  public get(): E {
    this.emptyCheck();
    return this.elements[0];
  }

  public remove(): E {
    this.emptyCheck();

    let lastIndex = --this.size;
    const root: E = this.elements[0];
    this.elements[0] = this.elements[lastIndex];
    // this.elements[this.lastIndex] = null;

    this.siftDown(0);
    return root;
  }

  public replace(element: E): E | undefined {
    // this.elementNotNullCheck(element);

    let root = undefined;
    if (this.size == 0) {
      this.elements[0] = element;
      this.size++;
    } else {
      root = this.elements[0];
      this.elements[0] = element;
      this.siftDown(0);
    }
    return root;
  }

	/**
	 * 批量建堆
	 */
  protected heapify(): void {
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
    const element: E = this.elements[index];
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

      // 选出左右子节点最小的那个
      if (rightIndex < this.size && this.compare(this.elements[rightIndex], child) < 0) {
        child = this.elements[childIndex];
        childIndex = rightIndex;
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
    // js 的数组不扩容
  }

  private emptyCheck(): void {
    if (this.size == 0) {
      throw new Error("Heap is empty");
    }
  }

  private elementNotNullCheck(element: E): void {
    if (element === undefined) {
      throw new Error("element must not be null");
    }
  }
}

