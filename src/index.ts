//export const Greeter = (name: string) => `Hello ${name}`;

export class PriorityQueue<T> {
  private Queue: QueueItem<T>[] = [];
  private MaxId: number = 1;

  /***
   * Adds the given generic item to the Queue. High Priority->1 ... LowestPriority-->99
   */
  public Enqueue(item: T, priority: number): void {
    let queuItem: QueueItem<T> = {
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
  public Dequeue(): void {
    if (this.Queue.length == 0) return;

    let index = this.Queue.indexOf(
      this.Queue.reduce(function(prev, current) {
        return prev.Priority < current.Priority ? prev : current;
      })
    );

    if (index > -1) this.Queue.splice(index, 1);
  }

  /***
   * Gets the top priority item from the Queue;
   */
  public GetHead(): T {

    return this.Queue.reduce(function(prev, current) {
      return prev.Priority < current.Priority ? prev : current;
    }).Item;

  }
}

export interface QueueItem<T> {
  Id: number;
  Priority: number;
  Item: T;
}
