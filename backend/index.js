const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/Users");
const News = require("./models/News");
const axios = require("axios");
require("dotenv").config();

const app = express();

try{
    mongoose.connect(process.env.MONGOURI).then(()=>{
        console.log("Connected to database");
    }).catch((err)=>{
        console.log(err,"Not connected to database");
    });
    app.listen(process.env.PORT, ()=>{
        console.log("Server is running on port: ", process.env.PORT);
    })
}
catch(err){
    console.log(err,"Not connected to database");
}

app.use(cors());
app.use(express.json());

app.post("/createaccount", async(req, res)=>{
    try{
        let {username, password} = req.body;
        let user = await User.findOne({username});
        if(user){
            res.json({success:false, message: "Username already exists"});
        }
        else{
            let newUser = new User({
                username,
                password
            });
            await newUser.save();
            res.json({success:true, username: username});
        }
    }
    catch(err){
        res.json({success:false, message: "It's not you, it's us"});
    }
});

app.post("/login", async(req, res)=>{
    try{
        let {username, password} = req.body;
        console.log(username);
        let user = await User.findOne({username});
        if(user){
            if(user.password === password){
                res.json({success:true, username: username});
            }
            else{
                res.json({success:false, message: "Incorrect password"});
            }
        }
        else{
            res.json({success:false, message: "Username does not exist"});
        }
    }
    catch(err){
        res.json({success:false, message: "It's not you, it's us"});
    }
});

app.post("/getnews", async(req, res)=>{
    try{
        let topstories = []
        await axios.get("https://hacker-news.firebaseio.com/v0/topstories.json").then((response)=>{
            topstories = response.data.slice(0,90);
        })
        for(const newnumber of topstories){
            let newstory = await News.findOne({newnumber});
            if(!newstory){
                await axios.get(`https://hacker-news.firebaseio.com/v0/item/${newnumber}.json`).then((response)=>{
                    let newstory = new News({
                        newnumber,
                        date: response.data.time
                    });
                    newstory.save();
                
                });
            }
            else{
                break;
            }
        }
        let username = req.body.username;
        let {p} = req.query;
        if(!username){
            const news = await News.find({}).sort({date: -1}).skip((p-1)*30).limit(30);
            res.json({success:true, news: news});
        }
        else{
            const avoidnews = await User.find({username}).select("avoidnews");
            const news = await News.find({newnumber: {$nin: avoidnews[0].avoidnews}}).sort({date: -1}).skip((p-1)*30).limit(30);
            res.json({success:true, news: news});
        }
    }
    catch(err){
        console.log(err);
        res.json({success:false, message: "It's not you, it's us"});
    }
})

app.post("/hidenews",async(req,res)=>{
    try{
        let {username, newnumber} = req.body;
        if(!username || !newnumber){
            res.json({success:false, message: "Please provide all the details"});
        }
        // let {p} = req.query;
        const avoidnews = await User.findOneAndUpdate({username}, {$push: {avoidnews: newnumber}},{new: true});
        // const news = await News.find({newnumber: {$nin: avoidnews.avoidnews}}).sort({date: -1}).skip((p-1)*30).limit(30);
        res.json({success:true});
    }
    catch(err){
        console.log(err);
        res.json({success:false, message: "It's not you, it's us"});
    }
})

app.use((req,res)=>{
    res.send("All good");
})