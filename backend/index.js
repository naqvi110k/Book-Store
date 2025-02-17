import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from 'cors'
import bookRoute from "./routes/book_route.js"
import userRoute from "./routes/user.route.js"


const app = express()
app.use(cors())
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

try {
    mongoose.connect(URI,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    console.log("connected to mongodb")
    
} catch (error) {
    console.log("Error",error)
    
}
app.use("/book",bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
