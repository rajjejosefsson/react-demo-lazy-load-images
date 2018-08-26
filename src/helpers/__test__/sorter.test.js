import { sorter } from '../sorter';

const data = [
  { id: 2, name: 'Carl' },
  { id: 1, name: 'Andrew' },
  { id: 3, name: 'Steven' }
];

const sortedItems = [
  { id: 1, name: 'Andrew' },
  { id: 2, name: 'Carl' },
  { id: 3, name: 'Steven' }
];

it('sort items ascending', () => {
  expect(sorter(data, 'id')).toEqual(sortedItems);
});

it('sort items ascending', () => {
  expect(sorter(data, 'name')).toEqual(sortedItems);
});

it('sort items descending', () => {
  expect(sorter(data, 'id', false)).toEqual(sortedItems.reverse());
});
