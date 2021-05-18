/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    let nodes = [];
    function inorder(rootNode){
        if(!rootNode) return null;
        inorder(rootNode.left);
        nodes.push(rootNode.val);
        inorder(rootNode.right);
    }
    
    inorder(root);
    function sortedArrToBST(arr, low, high){
        if(low>high) return null;
        const mid = Math.floor((low+high)/2);
        let root = new TreeNode(arr[mid]);
        root.left = sortedArrToBST(arr, low, mid-1);
        root.right = sortedArrToBST(arr, mid+1, high);
        return root;
    }
    
    return sortedArrToBST(nodes, 0, nodes.length-1);
};