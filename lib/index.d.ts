export declare class PriorityQueue<T> {
    private Queue;
    private MaxId;
    /***
     * Adds the given generic item to the Queue. High Priority->1 ... LowestPriority-->99
     */
    Enqueue(item: T, priority: number): void;
    /***
     * Removes the top priority item from the Queue
     */
    Dequeue(): void;
    /***
     * Gets the top priority item from the Queue;
     */
    GetHead(): T;
}
export interface QueueItem<T> {
    Id: number;
    Priority: number;
    Item: T;
}
