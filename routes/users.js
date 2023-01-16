import express from "express";
import { v4 as uuidv4 } from 'uuid';


const router=express.Router();

const users=[
    {
        firstname: 'John Michael',
        Lastname: 'Palad',
        Address: 'Valencia City Bukidnon',
    },
    {
        firstname: 'Hinnie',
        Lastname: 'Tanajura',
        Address: 'Kalilangan Bukidnon',
    }
];

router.get("/",(req,res)=>{
    res.send(users);
});

router.post("/", (req,res) => {
    const user=req.body;


const id=uuivd4();
const UserId= { ...user, id, Id };

    users.push(UserId);
    res.send('User with the name $ {users.firstname} added!');
});

export default router;