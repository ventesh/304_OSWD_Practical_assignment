const mysql = require('nodejs-mysql').default;

const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "employee"
}

const db = mysql.getInstance(config)



db.connect()
    .then(function(){
        console.log("Connected!");

        var sql = "INSERT INTO employe (username, password, firstname, lastname, email) VALUES ('USER', 'pass','fname1','lname1','a@b.com')";
        return db.exec(sql);
      
    }).then(function(res){
        console.log(res);
        return db.exec("SELECT * FROM employe");
    }).then(function(result){
        for (var i in result) {
            console.log('Username: ', result[i].username + " " +result[i].password);
        }
        process.exit(0);
    }).catch(function(err){
        console.log("Error");
        process.exit(0);
    })