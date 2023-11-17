import mongoose from "mongoose"

const getDBURI = () =>{
    return process.env.ENVIROMENT === "development" ? process.env.DEV_DB_URI : process.env.PROD_DB_URI 
}

// mongodb+srv://vaibhavsharamofficial31:6MyNm7u4L1gUtUhe@cluster0.bxqnucs.mongodb.net/?retryWrites=true&w=majority

const DBConnection = () =>{
    console.log("Enviroment :-" ,process.env.ENVIROMENT)
    console.log("Base Url :-",getDBURI())
    mongoose.connect(getDBURI() , {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then((data)=>{
        console.log(`... MongoDB is connnected with server ${data.connection.host}...`)
    }).catch((err)=>{
        console.log(`... MongoDB is not connected and the error is : ${err} ...`)
    })
}  

export default DBConnection