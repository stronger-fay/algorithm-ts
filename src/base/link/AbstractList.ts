import { List } from './List';

export abstract class AbstractList<E> implements List<E> {

  public ELEMENT_NOT_FOUND = -1;

  /**
   * 元素的数量
   */
  protected size: number = 0;

	/**
	 * 元素的数量
	 * @return
	 */
  public length(): number {
    return this.size;
  }

	/**
	 * 是否为空
	 * @return
	 */
  public isEmpty(): boolean {
    return this.size == 0;
  }

	/**
	 * 是否包含某个元素
	 * @param element
	 * @return
	 */
  public contains(element: E): boolean {
    return this.indexOf(element) != this.ELEMENT_NOT_FOUND;
  }

	/**
	 * 添加元素到尾部
	 * @param element
	 */
  public add(element: E): void {
    this.addElementAtIndex(this.size, element);
  }


  /**
   * 在index位置插入一个元素
   * @param index
   * @param element
   */
  abstract addElementAtIndex(index: number, element: E): void;

  /**
   * 获取index位置的元素
   * @param index
   * @return
   */
  abstract get(index: number): E;

  /**
   * 设置index位置的元素
   * @param index
   * @param element
   * @return 原来的元素ֵ
   */
  abstract set(index: number, element: E): E;

  /**
   * 删除index位置的元素
   * @param index
   * @return
   */
  abstract remove(index: number): E;

  /**
   * 清除所有元素
   */
  abstract clear(): void;

  /**
   * 查看元素的索引
   * @param element
   * @return
   */
  abstract indexOf(element: E): number;

  /**
   * 公共方法
   */
  protected outOfBounds(index: number): void {
    throw new Error("Index:" + index + ", Size:" + this.size);
  }

  protected rangeCheck(index: number): void {
    if (index < 0 || index >= this.size) {
      this.outOfBounds(index);
    }
  }

  protected rangeCheckForAdd(index: number): void {
    if (index < 0 || index > this.size) {
      this.outOfBounds(index);
    }
  }
}