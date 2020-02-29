"use strict";
//export const Greeter = (name: string) => `Hello ${name}`;
Object.defineProperty(exports, "__esModule", { value: true });
class PriorityQueue {
    constructor() {
        this.Queue = [];
        this.MaxId = 1;
    }
    /***
     * Adds the given generic item to the Queue. High Priority->1 ... LowestPriority-->99
     */
    Enqueue(item, priority) {
        let queuItem = {
            Item: item,
            Priority: priority,
            Id: this.MaxId
        };
        this.Queue.push(queuItem);
        this.MaxId++;
    }
    /***
     * Removes the top priority item from the Queue
     */
    Dequeue() {
        if (this.Queue.length == 0)
            return;
        let index = this.Queue.indexOf(this.Queue.reduce(function (prev, current) {
            return prev.Priority <= current.Priority && prev.Id <= current.Id
                ? prev
                : current;
        }));
        if (index > -1)
            this.Queue.splice(index, 1);
    }
    /***
     * Gets the top priority item from the Queue;
     */
    GetHead() {
        if (this.Queue.length == 0)
            return null;
        return this.Queue.reduce(function (prev, current) {
            return prev.Priority <= current.Priority && prev.Id <= current.Id
                ? prev
                : current;
        }).Item;
    }
}
exports.PriorityQueue = PriorityQueue;
