const express= require("express");
const app = express()
//console.dir(app)
/*
app.use((req,res)=>{
    console.log("New request")
    //res.send({color: 'red'}) //generates https response
    res.send('<b> Hi</b>')
}) */
app.get('/',(req,res)=>{
    res.send('Welcome home!!')
    })
app.get('/cats',(req,res)=>{
res.send('MEOW!!')
})
app.get('/dogs',(req,res)=>{
    res.send('WOOF!!')
    })
    app.get('/r/:subreddit',(req,res)=>{
        const {subreddit}= req.params;
        res.send(`<h1>Browsing the ${subreddit} page </h1>`)
    })
   
    app.post('/dogs',(req,res)=>{
        res.send('WOOF!!')
        }) //different from get

        app.get('/search',(req,res)=>{
            const {q} =req.query;
            res.send(`Search results for ${q} </h1>`);
        }) //working with query strings

        app.get('/*',(req,res)=>{
            res.send('WOOPs!!')
            }) //should be at end as routes matched in order

app.listen(3000, () =>{
console.log("Listening on port 3000")
})