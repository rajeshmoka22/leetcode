/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function toTree(arr, low, high){
        if(low>high) return null;
        const mid = Math.floor((low+high)/2);
        
        let root = new TreeNode(arr[mid]);
        root.left = toTree(arr, low, mid-1);
        root.right = toTree(arr, mid+1, high);
        return root;
    }
    return toTree(nums, 0, nums.length-1);
};