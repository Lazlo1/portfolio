/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var flask = " bottles ";
var flask2 = " bottles ";

while (num >= 1) {
    
    if (num === 1) {
        flask = " bottle "; 
    } else if (num === 2) { 
        flask2 = " bottle ";
    } else {
        flask = " bottles ";
    }
    console.log(num + flask + "of juice on the wall! " + num + flask + "of juice! Take one down, pass it around... " + (num - 1) + flask2 + "of juice on the wall!");
    num = num - 1;
}
