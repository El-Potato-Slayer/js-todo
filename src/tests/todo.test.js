import Todo from '../todo';

describe('Valid Todo', () => {
  const todo = new Todo('title', 'description', '2021/04/01', 1);
  test("Ensures Todo title is equal to 'title'", () => {
    expect(todo.title).toBe('title');
  });

  test("Ensures Todo title is not equal to 'title'", () => {
    expect(todo.title).not.toBe('Not title');
  });

  test("Ensures Todo description is equal to 'description'", () => {
    expect(todo.description).toBe('description');
  });

  test("Ensures Todo description is not equal to 'description'", () => {
    expect(todo.description).not.toBe('Not description');
  });

  test("Ensures Todo date is equal to '2021/04/01'", () => {
    expect(todo.dueDate).toBe('2021/04/01');
  });

  test("Ensures Todo date is not equal to '2021/04/01'", () => {
    expect(todo.dueDate).not.toBe('2021/04/02');
  });

  test('Ensures Todo priority is 1', () => {
    expect(todo.priority).toBe(1);
  });

  test('Ensures Todo priority is not 1', () => {
    expect(todo.priority).not.toBe(2);
  });

  test('Ensures all Todo properties are created', () => {
    expect(todo.title).toBe('title');
    expect(todo.description).toBe('description');
    expect(todo.dueDate).toBe('2021/04/01');
    expect(todo.priority).toBe(1);
  });
});

describe('Invalid todo', () => {
  const todo = new Todo();

  test('Ensures Todo title is undefined', () => {
    expect(todo.title).toBe(undefined);
  });

  test('Ensures Todo title is not truthy', () => {
    expect(todo.title).not.toBeTruthy();
  });

  test('Ensures Todo description is undefined', () => {
    expect(todo.description).toBe(undefined);
  });

  test('Ensures Todo description is not truthy', () => {
    expect(todo.description).not.toBeTruthy();
  });

  test('Ensures Todo dueDate is undefined', () => {
    expect(todo.dueDate).toBe(undefined);
  });

  test('Ensures Todo dueDate is not truthy', () => {
    expect(todo.dueDate).not.toBeTruthy();
  });

  test('Ensures Todo priority is undefined', () => {
    expect(todo.priority).toBe(undefined);
  });

  test('Ensures Todo priority is not truthy', () => {
    expect(todo.priority).not.toBeTruthy();
  });

  test('Ensures all Todo properties are undefined', () => {
    expect(todo.title).toBe(undefined);
    expect(todo.description).toBe(undefined);
    expect(todo.dueDate).toBe(undefined);
    expect(todo.priority).toBe(undefined);
  });
});