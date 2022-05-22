const express=require('express')
const bodyparser=require('body-parser')
const app=express()
app.use(express.static("public"))//this serve imgs,css..
app.use(bodyparser.urlencoded({extended:true}))//for url encoded requests for all types
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
/**
 * 
 * TODO;
 * 1 : Show the result, below the result button.
 *  2. Work on CLI calculator
 *   * * * node calc.js add 1 2 // print result in the next line
 *   * * * node calc.js sub 2 4
 */
app.post("/",(req,res)=>{
    console.log(req.body)
    const number1= Number(req.body.num1)
    // const number1=0
    // const number2=0
     const number2= Number(req.body.num2)
    const operator=(req.body.opr)
    var ans=0
    if(operator=="+"){
        ans=number1+number2;
        res.send('Ans is '+ans)
        //res.redirect("http://127.0.0.1:3000")
       
    }
    else if(operator=="-"){
        ans=number1-number2;
        res.send('Ans is'+ans)
    }
    else if(operator=="*"){
        ans=number1*number2
        res.send('Ans is'+ans)
    }
    else if(operator=="/"){
        ans=number1/number2
        res.send('Ans is'+ans)
    }
    else{
        res.send('Error')
    }
   //old.post("/",(req,res)=>res.status(204).send());
    // console.log(ans)
    // console.log('Hi')

});
app.listen(3000,(res)=>{
    console.log('Server started at port 3000')
})
