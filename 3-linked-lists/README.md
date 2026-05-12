You will need two classes or factories:

LinkedList class / factory, which will represent the full list.
Node class / factory, containing a value property and a nextNode property, set both as null by default.
Build the following functions in your linked list class / factory:

1. append(value) adds a new node containing value to the end of the list.
2. prepend(value) adds a new node containing value to the start of the list.
3. size() returns the total number of nodes in the list.
4. head() should return the value of the first node in the list. If the list is empty, it should return undefined.
5. tail() should return the value of the final node in the list. If the list is empty, it should return undefined.
6. at(index) should return the value of the node at the given index. If there’s no node at the given index, it should return undefined.
7. pop() should remove the head node from the list and return its value. If it’s used on an empty list, it should just return undefined.
8. contains(value) returns true if the passed in value is in the list and otherwise returns false.
9. findIndex(value) returns the index of the node containing the given value. If the value can’t be found in the list, it should return -1. If more than one node has a value matching the given value, it should return the 10. index of the first node with the matching value.
10. toString() represents your LinkedList objects as strings, so you can print them out and preview them in the console. If the list is empty, it should return an empty string. The format should be: ( value ) -> ( value ) -> ( value ) -> null.

Extra credit:

11. insertAt(index, ...values) should insert new nodes with the given values at the given index. For example:

// list that's already set up
console.log(list.toString());
//=> "( 1 ) -> ( 2 ) -> ( 3 ) -> null"

list.insertAt(1, 10, 11)
console.log(list.toString());
//=> "( 1 ) -> ( 10 ) -> ( 11 ) -> ( 2 ) -> ( 3 ) -> null"
If the method is called with an index that is out of bounds (below 0 or above the list’s size), throw a RangeError.

12. removeAt(index) that removes the node at the given index. If the given index is out of bounds (below 0 or greater than or equal to the list’s size), throw a RangeError

Extra Credit Tip: When you insert or remove a node, consider how it will affect the existing nodes. Some of the nodes will need their nextNode link updated.
