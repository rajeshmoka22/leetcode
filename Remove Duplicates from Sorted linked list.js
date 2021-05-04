/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head) return head;
    let curr = head;
    let pointer = curr.next;
    while(pointer){
        if(curr.val !== pointer.val) {
            curr.next = pointer;
            curr = pointer;
        }
        pointer = pointer.next;
    }
    curr.next = pointer;
    return head;
};