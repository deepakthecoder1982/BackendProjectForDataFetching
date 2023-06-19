const express = require('express');
const fs = require('fs');
const userRouter = express.Router();

userRouter.get('/',(req,res)=>{
    try {
        const users = JSON.parse(fs.readFileSync("./db.json", 'utf8'));
        res.send({msg:'Request Completed Successfully',users:users});
    } catch (error) {
        res.status(400).send({error:error.message});
    }
})
userRouter.get('/:id',(req,res)=>{
    const {id} = req.params;
    try {
        fs.readFile("./db.json", 'utf8',(err,data)=>{
            if(err){
                res.status(400).send({error:err?.message});
            }else{
                const Users = JSON.parse(data);
                const UserDetails = Users.find((user)=>user.id == id);
                if(UserDetails){
                    res.send({msg:`Welcome ${UserDetails?.name}`,user:UserDetails});
                }else{
                    res.send({msg:"Invalid Id, user not exist!"});
                }
            }
        });
    } catch (error) {
        res.status(400).send({error:error.message});
    }
})


module.exports = {
    userRouter
}