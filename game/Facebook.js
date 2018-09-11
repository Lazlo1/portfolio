/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Rafał",
    friends: 142,
    messages: ["Hello"],
    postMessage: function addMessage(message) {
        this.messages.push(message);
    },
    deleteMessage: function deleteMessage(index) {
        this.messages.splice(index -1, 1);
    },
    addFriend: function add() {
        this.friends += 1;
    },
    removeFriend: function remove() {
        this.friends -= 1;
    }
};