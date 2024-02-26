"use strict";

import { StackStr } from "../common/stack";

/** Return reverse of string. */

function stringReversal(str: string): string {

  const letterStack = new StackStr();

  for (const letter of str) {
    letterStack.push(letter);
  }

  let reversed = "";

  while (!letterStack.isEmpty()) {
    reversed += letterStack.pop();
  }

  return reversed;

}

export { stringReversal };