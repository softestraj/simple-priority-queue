# simple-priority-queue
This is a simple priority queue implementation for JavaScript. This library is a stand-alone library and doesn't have any third-party dependencies. 

## Initializing
Create an object of type PriorityQueue by passing the type the Queue deal with. If you want the Queue to store Foo, then pass the type Foo.
 
`let priortityQueue: PriorityQueue<Foo> = new PriorityQueue<Foo>();`

## Enqueue an Item
Use the `Enqueue` method in the library and pass the item that you want to store along with the priority.

`priortityQueue.Enqueue(foo, 1);`

## Dequeue

This mthod removes the item that has highest priorty. If there are multiple items with the same priority, the item that is stored first will be removed.

`priortityQueue.Dequeue();`

## Getting the Head

This mthod gets the item that has the highest priorty. If there are multiple items with the same priority, the item that is stored first on the queue will be returned. If Queue is empty, `null` will be returned. 

`priortityQueue.GetHead();`
