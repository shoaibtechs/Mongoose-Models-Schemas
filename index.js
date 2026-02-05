const mongoose = require('mongoose');


main()
    .then( ()=>{

        console.log("Connection Sucessfull");

    })

    .catch((err)=>{

        console.log(err);


})


async function main(){

    await mongoose.connect('mongodb://127.0.0.1:27017/test');



}


// Creating a Schema 



const userSchema = new mongoose.Schema({

    name: String,
    email: String,
    age : Number,  


});




// Creating a Model/ Collection 


let User = mongoose.model("User", userSchema);




// Inserting in Mongoose 



let user1 =  new User ({

    name : "Shoaib",
    email : "shoaibbabar524@gmail.com",
    age: 48


})



user1.save()

.then((res)=>{

    console.log(res);


})

.catch((err)=>{

    console.log(err);

})









