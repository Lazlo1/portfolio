/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems, del;

articleItems = $(".article-list");

del = articleItems.find('ul');

del.remove();