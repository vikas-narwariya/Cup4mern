import express, { Router } from "express";
import  mongoose  from "mongoose";
import route from "./route/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use('/users', route);
app.use('/login', route);

const PORT =  8000;
const URL = 'mongodb+srv://vikas:vikas123@cluster0.9uhp0.mongodb.net/Cluster0?retryWrites=true&w=majority'

mongoose.connect(URL).then(() => {
    
if (process.env.NODE_ENV == "production"){
    app.use(express.static("frontend/build"));
}

app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT ${PORT}`);
});
}).catch(error => {
    console.log('Error: ', error.message);
})
