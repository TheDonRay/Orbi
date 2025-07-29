// import the nodemailer library  
// load the env variables from the env file using the dotenv package. 
require('dotenv').config(); 
const nodemailer = require('nodemailer'); 

// create the transporter object 
const transporter = nodemailer.createTransport({
    host: process.env.GMAIL_HOST, 
    port: 587, 
    secure: false,  
    auth: {  
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});  

// configure the mailoptions object 
const mailOptions = { // yes this is an object 
    from: process.env.GMAIL_USER, 
    to: 'rayatchowdhury2005@gmail.com',
    subject: 'Welcome To Orbi',
    html: 
    `<h1>Welcome To Orbi</h1> 
    <p>
    While this message may appear to come directly from our creator, Rayat, it wasn't manually written rather it was sent through the SMTP server sitting in Orbi's backend folder. 
    Instead, it was crafted by Orbi — an intelligent email assistant built to streamline daily productivity. Rather than spending your morning scrolling through countless emails and 
    piecing together your schedule, Orbi simplifies your day by delivering a single, well-structured briefing. Each morning, Orbi summarizes your schedule, priority tasks, and key updates, 
    eliminating the clutter of fragmented tools and overwhelming notifications. By centralizing everything you need into one concise email, Orbi helps you stay focused, productive, and free to get 
    back to what truly matters most
    </p>`
    
};  

// send the email  // note you should try wrapping this in a async / await function to make it more better remember async await requires async / await
transporter.sendMail(mailOptions, function(error, info){ 
    try {  
        if (error) {
            throw error;
        }
        console.log('Email sent:', info.response); 
    } 
    catch (err) { 
        console.log('Error sending Email', err); 
    }
});