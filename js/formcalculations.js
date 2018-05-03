/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or non-commercial projects
*/

 //Set up an associative array
 //The keys represent the size of the cake
 //The values represent the cost of the cake i.e A 10" cake cost's $35
 var cake_prices = new Array();
 cake_prices["Round6"]=1;
 cake_prices["Round8"]=2;
 cake_prices["Round10"]=3;
 cake_prices["Round12"]=4;
 
 //Set up an associative array 
 //The keys represent the filling type
 //The value represents the cost of the filling i.e. Lemon filling is $5,Dobash filling is $9
 //We use this this array when the user selects a filling from the form
 var filling_prices= new Array();
 filling_prices["None"]=0;
 filling_prices["Lemon"]=5;
 filling_prices["Custard"]=5;
 filling_prices["Fudge"]=7;
 filling_prices["Mocha"]=8;
 filling_prices["Raspberry"]=10;
 filling_prices["Pineapple"]=5;
 filling_prices["Dobash"]=9;
 filling_prices["Mint"]=5;
 filling_prices["Cherry"]=5;
 filling_prices["Apricot"]=8;
 filling_prices["Buttercream"]=7;
 filling_prices["Chocolate Mousse"]=12;
 
	 
	 
// getCakeSizePrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getCakeSizePrice()
{  
    var cakeSizePrice=0;
    //Get a reference to the form id="anxietytest"
    var theForm = document.forms["anxietytest"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedCake = theForm.elements["selectedcake"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedCake.length; i++)
    {
        //if the radio button is checked
        if(selectedCake[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
            cakeSizePrice = cake_prices[selectedCake[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return cakeSizePrice;
}

function getCakeSizePrice1()
{  
    var cakeSizePrice1=0;
    //Get a reference to the form id="anxietytest"
    var theForm = document.forms["anxietytest"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedCake1 = theForm.elements["selectedcake1"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedCake1.length; i++)
    {
        //if the radio button is checked
        if(selectedCake1[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
            cakeSizePrice1 = cake_prices[selectedCake1[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return cakeSizePrice1;
}

function getCakeSizePrice2()
{  
    var cakeSizePrice2=0;
    //Get a reference to the form id="anxietytest"
    var theForm = document.forms["anxietytest"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedCake2 = theForm.elements["selectedcake2"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedCake2.length; i++)
    {
        //if the radio button is checked
        if(selectedCake2[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
            cakeSizePrice2 = cake_prices[selectedCake2[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return cakeSizePrice2;
}

function getCakeSizePrice3()
{  
    var cakeSizePrice3=0;
    //Get a reference to the form id="anxietytest"
    var theForm = document.forms["anxietytest"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedCake3 = theForm.elements["selectedcake3"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedCake3.length; i++)
    {
        //if the radio button is checked
        if(selectedCake3[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
            cakeSizePrice3 = cake_prices[selectedCake3[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return cakeSizePrice3;
}

function getCakeSizePrice4()
{  
    var cakeSizePrice4=0;
    //Get a reference to the form id="anxietytest"
    var theForm = document.forms["anxietytest"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedCake4 = theForm.elements["selectedcake4"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedCake4.length; i++)
    {
        //if the radio button is checked
        if(selectedCake4[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
            cakeSizePrice4 = cake_prices[selectedCake4[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return cakeSizePrice4;
}

function getCakeSizePrice5()
{  
    var cakeSizePrice5=0;
    //Get a reference to the form id="anxietytest"
    var theForm = document.forms["anxietytest"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedCake5 = theForm.elements["selectedcake5"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedCake5.length; i++)
    {
        //if the radio button is checked
        if(selectedCake5[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
            cakeSizePrice5 = cake_prices[selectedCake5[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return cakeSizePrice5;
}

function getCakeSizePrice6()
{  
    var cakeSizePrice6=0;
    //Get a reference to the form id="anxietytest"
    var theForm = document.forms["anxietytest"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedCake6 = theForm.elements["selectedcake6"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for(var i = 0; i < selectedCake6.length; i++)
    {
        //if the radio button is checked
        if(selectedCake6[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
            cakeSizePrice6 = cake_prices[selectedCake6[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return cakeSizePrice6;
}


//This function finds the filling price based on the 
//drop down selection
function getFillingPrice()
{
    var cakeFillingPrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the select id="filling"
     var selectedFilling = theForm.elements["filling"];
     
    //set cakeFilling Price equal to value user chose
    //For example filling_prices["Lemon".value] would be equal to 5
    cakeFillingPrice = filling_prices[selectedFilling.value];

    //finally we return cakeFillingPrice
    return cakeFillingPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function candlesPrice()
{
    var candlePrice=0;
    //Get a reference to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includecandles"
    var includeCandles = theForm.elements["includecandles"];

    //If they checked the box set candlePrice to 5
    if(includeCandles.checked==true)
    {
        candlePrice=5;
    }
    //finally we return the candlePrice
    return candlePrice;
}

function insciptionPrice()
{
    //This local variable will be used to decide whether or not to charge for the inscription
    //If the user checked the box this value will be 20
    //otherwise it will remain at 0
    var inscriptionPrice=0;
    //Get a refernce to the form id="cakeform"
    var theForm = document.forms["cakeform"];
    //Get a reference to the checkbox id="includeinscription"
    var includeInscription = theForm.elements["includeinscription"];
    //If they checked the box set inscriptionPrice to 20
    if(includeInscription.checked==true){
        inscriptionPrice=20;
    }
    //finally we return the inscriptionPrice
    return inscriptionPrice;
}
        
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var cakePrice = getCakeSizePrice() + getFillingPrice() + candlesPrice() + insciptionPrice() + getCakeSizePrice1() + getCakeSizePrice2() + getCakeSizePrice3() + getCakeSizePrice4() + getCakeSizePrice5() + getCakeSizePrice6();
    
    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Your Total&nbsp;  "+cakePrice;

}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}
