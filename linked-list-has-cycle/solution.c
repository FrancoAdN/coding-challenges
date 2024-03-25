#include <stdlib.h>

/**
 * Definition for singly-linked list.
 */

struct ListNode {
    int val;
    struct ListNode *next;
};
short hasCycle(struct ListNode *head) {
    struct ListNode *fast = head;
    struct ListNode *slow = head;

    while (fast && fast->next) {
        fast = fast->next->next;
        slow = slow->next;

        if (fast == slow) return 1;
    }

    return 0;
}