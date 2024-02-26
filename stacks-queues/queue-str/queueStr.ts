"use strict";

import { IndexError } from "../common/ll";

/** QueueStr: can remove from start or add to end */

class QueueStr {

  queue: string[];

  constructor(initial: string[] = []) {
    this.queue = initial;
  }

  /** enqueue(val): add val to end. Returns undefined. */
  enqueue(val: string): void {
    this.queue.push(val);
  }

  /** dequeue(): remove & return item from start.
   * Throws error if empty. */
  dequeue(): string {
    if (this.isEmpty()) {
      throw new IndexError("Queue is empty");
    }
    return this.queue.shift()!;
  }

  /** peek(): return the value of top. */
  peek(): string {
    if (this.isEmpty()) {
      throw new IndexError("Queue is empty");
    }
    return this.queue[0];
  }

  /** isEmpty(): return true if queue is empty, false otherwise */
  isEmpty(): boolean {
    return (this.queue.length  === 0);
  }
}


export { QueueStr };
