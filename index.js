const LinkedList = require('./LinkedList');

function main() {
  const ll = new LinkedList();

  ll.insertLast(1)
  ll.insertLast(2)
  ll.insertLast(3)
  ll.insertLast(4)
  ll.insertLast(5)

  ll.display()

  ll.reverse()

  ll.display()
}

main()