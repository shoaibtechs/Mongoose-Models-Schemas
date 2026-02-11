let mongoose =  require("mongoose");



async function main()
{

    await mongoose.connect('mongodb://127.0.0.1:27017/shoaibtechs');



}


main()

.then(()=>{

    console.log("Connection Sucessfull");

})


.catch((err)=>{

    console.log("Can not connect with the Database");


})







const bookSchema = new mongoose.Schema({

    title : {

        type : String,
        required : true 

    }, 

    author : {

        type : String 

    }, 

    price : {

        type: Number

    }



})



let Book = mongoose.model("Book", bookSchema);









let book1 = new Book({

    title : "Introduction to Python",
    author : "Shoaib Akhtar",
    price : 25000

})



book1.save()
        
    .then((res)=>{

        console.log(res);


    })

    .catch((err)=>{

        console.log(err);


    })
