#include <stdlib.h>

/* Definition for singly-linked list. */
struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {
    struct ListNode* tail = malloc(sizeof(struct ListNode));
    tail->next = NULL;
    tail->val = 0;
    struct ListNode* dummy = tail;

    while (list1 || list2) {
        if (!list2) {
            tail->next = list1;
            break;
        }

        if (!list1) {
            tail->next = list2;
            break;
        }

        if (list1->val < list2->val) {
            tail->next = list1;
            list1 = list1->next;
        } else {
            tail->next = list2;
            list2 = list2->next;
        }

        tail = tail->next;
    }

    return dummy->next;
}