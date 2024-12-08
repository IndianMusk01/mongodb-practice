const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
main()
 .then(()=>{
    console.log("connection successful");
 })
 .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
     from:"ayush",
     to:"prince",
     msg:"bkl sudhar ja broshreeke",
     created_at: new Date()
    },
    {
        from:"ujjwal",
        to:"prince",
        msg:"paise wapas kardo",
        created_at: new Date()
    },
    {
        from:"elon musk",
        to:"Ayush",
        msg:"you are hired",
        created_at: new Date()
       },
       {
        from:"ayush",
        to:"prince",
        msg:"chay pila do",
        created_at: new Date()
       },
       {
        from:"ayush",
        to:"sundar pichayi",
        msg:" i am buying google",
        created_at: new Date()
       },
       {
        from:"prince",
        to:"elon musk",
        msg:"tumne kar dikhaya",
        created_at: new Date()
       },
       {
        from:"ayush",
        to:"prince",
        msg:"how's you buddy",
        created_at: new Date()
       },
       {
        from:"himanshu",
        to:"prince",
        msg:"kal party hai",
        created_at: new Date()
       },

];
Chat.insertMany(allChats);