class Solution(object):
    def calPoints(self, operations):
        record = []

        for o in operations:
            if o == 'D':
                num = record[-1]
                record.append(num * 2)
            elif o == 'C':
                record.pop()
            elif o == '+':
                n1 = record[-1]
                n2 = record[-2]
                record.append(n1 + n2)
            else:
                record.append(int(o))
        
        summ = 0
        for n in record:
            summ += n
        
        return summ
        # Time: O(n)
        # Space: O(n)

        