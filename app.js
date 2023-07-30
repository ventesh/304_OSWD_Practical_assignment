const { CLIENT_RENEG_LIMIT } = require("tls");
var Chatbot = require("./chatbot");
var readline = require("readline");
// var valid = require("./validation.js")

// valid.f1();
// valid.f2();

var rt = readline.createInterface(process.stdin, process.stdout);
rt.setPrompt("You==>");
rt.prompt();

rt.on('line', function (message) {    
    console.log('Bot ==> ' + Chatbot.chatbotReply(message));
    rt.prompt();
}).on('close', function () {
    process.exit(0);
});

// function reply(message) {
//     this.Bot_Age = 25;
//     this.Bot_Name = "name1";
//     this.Bot_University = "VNSGU";
//     this.Bot_Country = "India";

//     message = message.toLowerCase()

//     if (message.indexOf("hi") > -1 ||
//         message.indexOf("hello") > -1 ||
//         message.indexOf("welcome") > -1) {
//         return "Hi!";
//     }
//     else if (message.indexOf("age") > -1 &&
//         message.indexOf("your")) {
//         return "I'm " + this.Bot_Age;
//     }
//     else if (message.indexOf("how") > -1 &&
//         message.indexOf("are") &&
//         message.indexOf("you")) {
//         return "I'm fine ^_^"
//     }
//     else if (message.indexOf("where") > -1
//         && message.indexOf("live") &&
//         message.indexOf("you")) {
//         return "I live in " + this.Bot_Country;
//     }
//     return "Sorry, I didn't get it :( ";
// }