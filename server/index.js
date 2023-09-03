import express from "express";
const PORT = process.env.PORT || 5000;
import "./db/connection.js";
const app = express();
import userRouter from './routes/index.js'
import cors from 'cors';
app.use(cors());
app.use(express.json());
app.use(userRouter);



app.listen(PORT, ()=>{
    console.log("Server is liteneing on port 3000");
})