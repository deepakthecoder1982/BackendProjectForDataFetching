const express = require('express');
const { userRouter } = require('./Routes/user.routes');
require("dotenv").config();
const app = express();

app.use("/api/users",userRouter);

app.listen(process.env.port,()=>{
    console.log(`listening on ${process.env.port}`);
})
