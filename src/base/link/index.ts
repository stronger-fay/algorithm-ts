import { LinkedList } from './LinkedList';
import { List } from './List';
import { Asserts } from '../../tools';

export {
  LinkedList,
  List,
};

function testList(list: List<number>): void {
  list.add(11);
  list.add(22);
  list.add(33);
  list.add(44);

  list.addElementAtIndex(0, 55); // [55, 11, 22, 33, 44]
  list.addElementAtIndex(2, 66); // [55, 11, 66, 22, 33, 44]
  list.addElementAtIndex(list.length(), 77); // [55, 11, 66, 22, 33, 44, 77]

  list.remove(0); // [11, 66, 22, 33, 44, 77]
  list.remove(2); // [11, 66, 33, 44, 77]
  list.remove(list.length() - 1); // [11, 66, 33, 44]

  Asserts.test(list.indexOf(44) == 3);
  Asserts.test(list.indexOf(22) === -1);
  Asserts.test(list.contains(33));
  Asserts.test(list.get(0) == 11);
  Asserts.test(list.get(1) == 66);
  Asserts.test(list.get(list.length() - 1) == 44);
}
testList(new LinkedList());