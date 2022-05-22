class Calculator extends HTMLElement{
    constructor(){
        super();
    }

connectedCallback(){
    this.innerHTML=`
    <style>.h1c{
        position:absolute;
        text-align:center;
        width:450px;
        top:25%;
        left:50%;
        transform:translate(-50%,-50%);
    }
    .calc{
        color:rgb(23, 11, 5);
    }
    .bodyclass{
        width:350px;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        padding:50px;
        color:#fff;
        text-align:center;
        border: 3px solid powderblue;
    }
    
    .inputclass{
        padding:5px 5px 5px 10px;
       
        
    }
    .resclass{
    width:350px;
    height: 20px
    }
    .buttoncls{
        background-color: #e7e7e7; 
        color: black;
        text-align: center; 
    }
    </style>
    <body>
    <div class="bodyclass">
            <div class="inputclass">     
                <input type="text" id="number1" placeholder="Number-1">
                <input type="text" id="number2" placeholder="Number-2">
             </div>
        
           <br>
           <div class="resclass"> 
                <input type="text" id="result" placeholder="Result">
            </div>
           
            <br>
            
                <button id="Add" class="buttoncls">+</button>
                <button id="Sub" class="buttoncls">-</button>
                <button id="Mul" class="buttoncls">*</button>
                <button id="Dsn" class="buttoncls">/</button>
            <br>
        </div>  
       
        </body>
       
       
    `;
}
}

customElements.define('calculator-component',Calculator);
