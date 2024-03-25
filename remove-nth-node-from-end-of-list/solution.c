#include <stdlib.h>

/* Definition for singly-linked list. */
struct ListNode {
    int val;
    struct ListNode *next;
};
struct ListNode* removeNthFromEnd(struct ListNode* head, int n) {
    if (!head->next) return NULL;

    struct ListNode* slow = head;
    struct ListNode* fast = head;

    for (int i = 0; i < n; i++) {
        fast = fast->next;
    }

    if (fast == NULL) return head->next;

    while (fast->next) {
        fast = fast->next;
        slow = slow->next;
    }

    slow->next = slow->next->next;

    return head;
}