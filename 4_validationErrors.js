let mongoose =  require("mongoose");


async function main(){

    
    await mongoose.connect('mongodb://127.0.0.1:27017/shoaibtechs');

}


main()
    .then(()=>{

        console .log("Connection SUcessfull");


    })


    .catch((err)=>{


        console.log(err);

    })



let collegeSchema = new mongoose.Schema({

    name : {

        type: String,
        required : true
    },


    marks : {

        type : Number,
        min : [1, "Marks Should be greater then 1 "] 

    }


})



let Student = mongoose.model("Student", collegeSchema);


let student1 =  new Student({


    name : "Shoaib",
    marks : -12

    



})


student1.save()

        .then((res)=>{

                console.log(res);


        })


        .catch((err)=>{


                //  console.log(err);
                // console.log(err.errors);
                //console.log(err.errors.marks);
                console.log(err.errors.marks.message);
        })

