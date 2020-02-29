import { PriorityQueue } from "../index";

test("GetHead should get null for empty Queue", () => {
  let priortityQueue: PriorityQueue<Foo> = new PriorityQueue<Foo>();

  let queueItem = priortityQueue.GetHead();
  expect(queueItem).toBeNull();
});

test("Dequeue should pass for empty Queue", () => {
  let priortityQueue: PriorityQueue<Foo> = new PriorityQueue<Foo>();

  priortityQueue.Dequeue();
});

test("Should enqueue item to the Queue", () => {
  let priortityQueue: PriorityQueue<Foo> = new PriorityQueue<Foo>();

  let foo: Foo = {
    Age: 20,
    Name: "John Doe"
  };

  priortityQueue.Enqueue(foo, 1);
  let queueItem = priortityQueue.GetHead();
  expect(queueItem).toBeTruthy();
});

test("Should always get high prioroty item from the Queue", () => {
  let priortityQueue: PriorityQueue<Foo> = new PriorityQueue<Foo>();

  let foo: Foo = {
    Age: 20,
    Name: "John Doe"
  };

  let foo2: Foo = {
    Age: 40,
    Name: "James Doe"
  };

  priortityQueue.Enqueue(foo, 1);
  priortityQueue.Enqueue(foo2, 5);
  let queueItem = priortityQueue.GetHead();
  expect(queueItem?.Name).toBe("John Doe");
});

test("Should always Dequeue First High Priority Item from the Queue", () => {
  let priortityQueue: PriorityQueue<Foo> = new PriorityQueue<Foo>();

  let foo: Foo = {
    Age: 20,
    Name: "John Doe"
  };

  let foo2: Foo = {
    Age: 36,
    Name: "Julie Doe"
  };

  let foo3: Foo = {
    Age: 40,
    Name: "James Doe"
  };

  priortityQueue.Enqueue(foo, 1);
  priortityQueue.Enqueue(foo2, 1);
  priortityQueue.Enqueue(foo3, 5);

  priortityQueue.Dequeue();
  let queueItem = priortityQueue.GetHead();

  expect(queueItem?.Name).toBe("Julie Doe");
});

export interface Foo {
  Name: string;
  Age: number;
}
