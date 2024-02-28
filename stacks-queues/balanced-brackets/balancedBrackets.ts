/** Does this string have balanced brackets? Returns true/false. */

const PARENS = {
  "(": ")",
  "{": "}",
  "[": "]",
}




function balancedBrackets(str: string): boolean {

  // this will get filled with open parens
  const stack: string[] = [];

  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.unshift(char);
    }
  }
  // now, we have a gorgeous array filled with wonderful open parens

  // we're in business: time to find the closed parens!
  for (let openParens of stack) {
    const idxOpen: number = str.lastIndexOf(openParens);
    const babyStr: string = str.slice(idxOpen);

    for (let char of babyStr) {



    }

  }






  return false;

  /**
   * we keep a count for each type: ( ) [ ] { }
   *
   * once we've gone through the string, we do a comparison
   *
   *
   * if # ( equals # ) (and same for other [] {}) return true
   * otherwise, return false
   *
   * also, order is a thing.
   *
   *
   * ([)]
   *
   * (test{hello}gibberish[]) -> once string = 0, it's balanced
   *
   */





}


export { balancedBrackets };