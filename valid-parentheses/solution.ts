function isValid(s: string): boolean {
  const stack: string[] = [];
  for (let l of s) {
    switch (l) {
      case "(":
        stack.push(")");
        break;
      case ")":
        if (stack.pop() !== ")") return false;
      case "{":
        stack.push("}");
        break;
      case "}":
        if (stack.pop() !== "}") return false;
      case "[":
        stack.push("]");
        break;
      case "]":
        if (stack.pop() !== "]") return false;
    }
  }
  return stack.length === 0;
}
