const User =  require("./index1"); // Getting the  user Model form the index1.js file 





//1. Using the find on mongoose without any condition



User.find({})


.then((res)=>{

    console.log(res)


})

.catch((err)=>{

    console.log(err);


})












