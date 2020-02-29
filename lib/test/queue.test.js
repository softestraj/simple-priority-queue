"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
test("GetHead should get null for empty Queue", () => {
    let priortityQueue = new index_1.PriorityQueue();
    let queueItem = priortityQueue.GetHead();
    expect(queueItem).toBeNull();
});
test("Dequeue should pass for empty Queue", () => {
    let priortityQueue = new index_1.PriorityQueue();
    priortityQueue.Dequeue();
});
test("Should enqueue item to the Queue", () => {
    let priortityQueue = new index_1.PriorityQueue();
    let foo = {
        Age: 20,
        Name: "John Doe"
    };
    priortityQueue.Enqueue(foo, 1);
    let queueItem = priortityQueue.GetHead();
    expect(queueItem).toBeTruthy();
});
test("Should always get high prioroty item from the Queue", () => {
    let priortityQueue = new index_1.PriorityQueue();
    let foo = {
        Age: 20,
        Name: "John Doe"
    };
    let foo2 = {
        Age: 40,
        Name: "James Doe"
    };
    priortityQueue.Enqueue(foo, 1);
    priortityQueue.Enqueue(foo2, 5);
    let queueItem = priortityQueue.GetHead();
    expect(queueItem === null || queueItem === void 0 ? void 0 : queueItem.Name).toBe("John Doe");
});
test("Should always Dequeue First High Priority Item from the Queue", () => {
    let priortityQueue = new index_1.PriorityQueue();
    let foo = {
        Age: 20,
        Name: "John Doe"
    };
    let foo2 = {
        Age: 36,
        Name: "Julie Doe"
    };
    let foo3 = {
        Age: 40,
        Name: "James Doe"
    };
    priortityQueue.Enqueue(foo, 1);
    priortityQueue.Enqueue(foo2, 1);
    priortityQueue.Enqueue(foo3, 5);
    priortityQueue.Dequeue();
    let queueItem = priortityQueue.GetHead();
    expect(queueItem === null || queueItem === void 0 ? void 0 : queueItem.Name).toBe("Julie Doe");
});
