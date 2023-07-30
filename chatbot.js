module.exports.chatbotReply = function(message){
    this.Bot_age = 22;
    this.Bot_Name = "name1";
    this.Bot_Universtiy = "VNSGU";
    this.Bot_Contry ="India";
    
    message = message.toLowerCase()

    if(message.indexOf("hi")  > -1 || 
                indexOf("hello") > -1 ||
                indexOf("welcome") > -1)
    {
                    return "Hi..!";
    } else if(message.indexOf("age") > -1 &&
              message.indexOf("your"))
    {
        return "I'm " + this.Bot_age; 
    }
    else if(message.indexOf("how") > -1 &&
            message.indexOf("are") &&
            message.indexOf("you"))
    {
        return "I'm fine ^_^"; 
    }
    else if(message.indexOf("where") > -1 &&
            message.indexOf("live") && 
            message.indexOf("you"))
    {
        return "I live in  " + this.Bot_Contry; 
    }
    else{
        return " Sorry, I did't get it :( ";
    }
}