import Category from '../category';
import Todo from '../todo';

describe('Valid Category', () => {
  const category = new Category('Groceries');

  test("Ensures Category name is equal to 'Groceries'", () => {
    expect(category.name).toBe('Groceries');
  });

  test("Ensures Category name is not equal to 'Groceries'", () => {
    expect(category.name).not.toBe('not Groceries');
  });

  test('Ensures Category contains empty todo list on instantiation', () => {
    expect(category.todoList).toEqual([]);
  });

  test("Checks if category doesn't contain empty todo list on instantiation", () => {
    expect(category.todoList).not.toEqual(['2']);
  });

  test("Ensures if category doesn't contain empty todo list on instantiation", () => {
    expect(category.todoList).not.toEqual(['2']);
  });

  test('Ensures all Category properties are created', () => {
    expect(category.name).toBe('Groceries');
    expect(category.todoList).toEqual([]);
  });

  test('Ensures Todo is added to todo list', () => {
    const todo = new Todo('title', 'description', '2021/04/01', 1);
    category.add(todo);
    expect(category.todoList.length).toBe(1);
  });

  test('Ensures Category name is still "Groceries" and that todo remains in list', () => {
    expect(category.name).toBe('Groceries');
    expect(category.todoList.length).toBe(1);
    expect(category.todoList).toEqual([
      {
        description: 'description',
        dueDate: '2021/04/01',
        isFinished: false,
        priority: 1,
        title: 'title',
      },
    ]);
  });

  test('Ensures todo gets updated', () => {
    const todo = new Todo('title', 'new description', '2021/04/01', 2);
    category.update(todo, 0);
    expect(category.todoList).toEqual([
      {
        description: 'new description',
        dueDate: '2021/04/01',
        isFinished: false,
        priority: 2,
        title: 'title',
      },
    ]);
  });

  test('Ensures todo list length is 1 after update', () => {
    expect(category.todoList.length).toEqual(1);
  });

  test('Ensures todo gets deleted', () => {
    category.delete(0);
    expect(category.todoList).toEqual([]);
  });

  test('Ensures todo list length is 0 after deletion', () => {
    expect(category.todoList.length).toEqual(0);
  });
});

describe('Invalid Category', () => {
  const category = new Category();

  test('Ensures Category name is undefined', () => {
    expect(category.name).toBe(undefined);
  });

  test('Ensures Category name is not truthy', () => {
    expect(category.name).not.toBeTruthy();
  });

  test('Ensures Category contains empty todo list on instantiation', () => {
    expect(category.todoList).toEqual([]);
  });

  test('Ensures Category todo list is not falsy on instantiation', () => {
    expect(category.todoList).not.toBeFalsy();
  });
});
