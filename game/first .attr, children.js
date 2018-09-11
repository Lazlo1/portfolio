/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList, item, link;


navList = $('.nav-list');


item = navList.children().first();
link = item.find('a');

link.attr('href', '#1');