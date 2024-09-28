class MinStack:
    # Time: O(1)
    # Space: O(n)
    def __init__(self):
        self.stk = []
        self.min = []

    def push(self, val: int) -> None:
        self.stk.append(val)
        if not self.min or self.min[-1] > val:
            self.min.append(val)
        else:
            self.min.append(self.min[-1])

    def pop(self) -> None:
        self.min.pop()
        self.stk.pop()

    def top(self) -> int:
        return self.stk[-1]

    def getMin(self) -> int:
        return self.min[-1]
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()