/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/*
두 개의 비어 있지 않은 연결 리스트가 주어지는데, 이 리스트들은 각각 음수가 아닌 정수를 나타냅니다.
숫자는 역순 으로 저장되어 있으며 , 각 노드에는 하나의 숫자만 포함되어 있습니다. 두 숫자를 더하고 그 합을 연결 리스트 형태로 반환하세요.
두 숫자에는 0 자체를 제외하고는 앞에 0이 없다고 가정해도 됩니다.

예시 1:
입력: l1 = [2,4,3], l2 = [5,6,4]
 출력: [7,0,8]
 설명: 342 + 465 = 807.

예시 2:
입력: l1 = [0], l2 = [0]
 출력: [0]

예시 3:
입력: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 출력: [8,9,9,9,0,0,0,1]

제약 조건:
각 연결 리스트의 노드 수는 범위 내에 있습니다 [1, 100].
0 <= Node.val <= 9
이 목록은 앞에 0이 붙지 않는 숫자를 나타낸다는 것이 보장됩니다.
 */
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * @Title: 2. Add Two Numbers
 * @Link: https://leetcode.com/problems/add-two-numbers/description/
 * @Solved: Feb 21, 2026 22:36
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const arr1: number[] = [l1.val];
    const arr2: number[] = [l2.val];

    let nextNode = l1.next;
    while (nextNode) {
        arr1.push(nextNode.val);
        nextNode = nextNode.next;
    }

    nextNode = l2.next;
    while (nextNode) {
        arr2.push(nextNode.val);
        nextNode = nextNode.next;
    }

    const n1 = arr1
    const n2 = arr2

    const calculate = (l1: number[], l2: number[]) => {
        let dummy = new ListNode(0);
        let curr = dummy;
        let carry = 0;

        let i = 0;

        while (i < l1.length || i < l2.length || carry > 0) {
            let sum = carry;

            if (i < l1.length) sum += l1[i];
            if (i < l2.length) sum += l2[i];

            carry = Math.floor(sum / 10);
            curr.next = new ListNode(sum % 10);

            curr = curr.next;
            i++;
        }

        return dummy.next;
    };

    const [big, small] = n1.length >= n2.length ? [n1, n2] : [n2, n1];

    return calculate(big, small);
}

const l1 = new ListNode();
const l2 = new ListNode();

const l1_nums = [0,0,1];
const l2_nums = [0,0,9];

let previous = l1;
for (let i = 0; i < l1_nums.length; i++) {
    previous.val = l1_nums[i];
    if (i !== l1_nums.length -1) {
        previous.next = new ListNode()
        previous = previous.next
    }
}

previous = l2;
for (let i = 0; i < l2_nums.length; i++) {
    previous.val = l2_nums[i];
    if (i !== l2_nums.length -1) {
        previous.next = new ListNode()
        previous = previous.next
    }
}


const t = [];
let nodes = addTwoNumbers(l1, l2);

while(nodes !== null) {
    t.push(nodes.val)
    nodes = nodes.next;
}

console.log(t)
// console.log(addTwoNumbers(l1, l2))