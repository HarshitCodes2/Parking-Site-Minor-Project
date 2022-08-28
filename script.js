var count = 1;
var formnamechange = 0;

var Fname;                          //First name variable
var Lname;                          //Last name variable
var Phn;                            //Phone Number var
var Email ;                         //email var
var Branch ;                        //branch var
var VehNo ;                         //Vehicle number var
var Type ;                          //vehicle type var
var Colour ;                        //vehicle color var
var Unique ;                        //unique feature var
var Pass;                           //helps in pass selection 
var Check = 0;                      //helps in activating the pass details button and more
var removebutton;
var Printee;                        //helps in invoice pass delivery
var Slider;
var SliderShow;
var removeslider;


document.getElementById("Input")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
});

function counter(){

if (count == 1){
    Fname = document.getElementById('Input').value;
    if(Fname==''){
        alert('Input Field cannot be Empty!');
        return;
    }
    document.getElementById('Attribute').innerHTML='Last Name';
    document.getElementById('Input').type="text";
}
if (count == 2){
    Lname = document.getElementById('Input').value;
    if(Lname==''){
        alert('Input Field cannot be Empty!');
        return;
    }
    document.getElementById('Attribute').innerHTML='Phone Number';
    document.getElementById('Input').type="tel";   
}
if (count == 3){
    Phn = document.getElementById('Input').value;
        if(Phn==''){
            alert('Input Field cannot be Empty!');
            return;
        }
        {
        if(Phn.length == 10 && Phn.slice(0 , 1) > 5){
            console.log('Working');
        }
        else{
            alert('Phone Number is Invalid');
            return;
        }
        }
    document.getElementById('Attribute').innerHTML='Email';
    document.getElementById('Input').type="email";
    
}
if (count == 4){
    Email = document.getElementById('Input').value;
        if(Email==''){
            alert('Input Field cannot be Empty!');
            return;
        }
        {
        if(Email.indexOf('@')>=0 ){
            console.log('Working');
        }
        else{
            alert ('Email is Invalid');
            return;
        }

        }
    document.getElementById('Attribute').innerHTML='Branch';
    document.getElementById('Input').type="text";
    
}
if (count == 5){
    Branch = document.getElementById('Input').value;
    if(Branch==''){
        alert('Input Field cannot be Empty!');
        return;
    }
    document.getElementById('Attribute').innerHTML='Vehicle Number';
    document.getElementById('Input').type="text";
    
    formnamechange++;
}
if (formnamechange==1){
    document.getElementById('Formname').innerHTML='Vehicle Details';
}
if (count == 6){
    VehNo = document.getElementById('Input').value;
    if(VehNo==''){
        alert('Input Field cannot be Empty!');
        return;
    }
    document.getElementById('Attribute').innerHTML='Type of Vehicle / Number of Wheels';
    document.getElementById('Input').id="InputS";
    document.getElementById('InputS').type="range";
    document.getElementById('InputS').min=2;
    document.getElementById('InputS').max=4;

    
    Slider = document.getElementById("InputS");
    SliderShow = document.getElementById("sliderV");
    SliderShow.innerHTML=Slider.value;
    Slider.oninput = function() {
    SliderShow.innerHTML = this.value;
    }

  

        
}

if (count == 7){

    Type = document.getElementById('InputS').value;
    if(Type==''){
        alert('Input Field cannot be Empty!');
        return;
    }
    document.getElementById('InputS').id="Input";
    document.getElementById('Attribute').innerHTML='Colour of Vehicle';
    document.getElementById('Input').type="text";
    removeslider = document.getElementById('SliderValue');
    removeslider.parentNode.removeChild(removeslider);
}
if (count == 8){
    Colour = document.getElementById('Input').value;
    if(Colour==''){
        alert('Input Field cannot be Empty!');
        return;
    }
    document.getElementById('Attribute').innerHTML='Unique Feature';
    document.getElementById('Input').type="text";
    
    
}
if (count == 9){
    Unique = document.getElementById('Input').value;
    if(Unique==''){
        alert('Input Field cannot be Empty!');
        return;
    }
    document.getElementById('Attribute').innerHTML='Select a Pass';
    document.getElementById('Input').disabled=true;
    document.getElementById('Input').id='InputD';
    document.getElementById('InputD').value='Please Select a pass below';
    document.getElementById('submit').disabled=true;
    removebutton = document.getElementById('submit');
    removebutton.parentNode.removeChild(removebutton);
    
    formnamechange++;
}
if (formnamechange==2){

    document.getElementById('PassSelection').innerHTML="<button type='button' id='Plan1a' onclick='PassSubmit1()'>&#8377 5/Day</button><button type='button' id='Plan2a' onclick='PassSubmit2()'>&#8377 210/Month</button> <button type='button' id='Plan3a' onclick='PassSubmit3()'>&#8377 2000/Year</button>"

    
    formnamechange++;
}
if(formnamechange<3 && count!=6){
document.getElementById('Input').value='';
}

count++;

}

function PassSubmit1(){
    Check++;
    if(Check == 1){
    document.getElementById('ActivateDiv').innerHTML="<p id='textbox'></p><button type='button' id='PassSubmitA' onclick='FinalSubmit() , RemoveForm()'>Confirm</button>";
    }
    document.getElementById('textbox').innerHTML="A Single day plan for quick access to the parking <br> Reserved parking slot not included!"
    Pass = 1;
    console.log(Pass);
}
function PassSubmit2(){
    Check++;
    if(Check == 1){
    document.getElementById('ActivateDiv').innerHTML="<p id='textbox'></p><button type='button' id='PassSubmitA' onclick='FinalSubmit() , RemoveForm()'>Confirm</button>";
    }
    document.getElementById('textbox').innerHTML="A Monthly plan for a more premium service and Reserved Parking Slot."
    Pass = 2;
    console.log(Pass);
}
function PassSubmit3(){
    Check++;
    if(Check == 1){
    document.getElementById('ActivateDiv').innerHTML="<p id='textbox'></p><button type='button' id='PassSubmitA' onclick='FinalSubmit() , RemoveForm()'>Confirm</button>";
    }
    document.getElementById('textbox').innerHTML="A Yearly Plan for the VIP slots and VIP services."
    Pass= 3;
    console.log(Pass);
}

function RemoveForm(){
    //console.log(Pass);
    var child = document.getElementById('formC');
    child.parentNode.removeChild(child);

}
// This is put in html page with innerHTML function in FinalSubmit()

/*

        <label for='Form' class='FormName' id='Formname'>Invoice</label>
        <div id='div2' >
            <div class='Side' id='EmployeeList' align-item='centre' style=' align-content: center; height: 100%; width: 48%; '>
                    <h3 class='Side' id='Word1'>First Name.........</h3><p class='Side' id='Show1' ></p><br>
                    <h3 class='Side' id='Word1'>Last Name..........</h3><p class='Side' id='Show2' ></p><br>
                    <h3 class='Side' id='Word1'>Phone Number.......</h3><p class='Side' id='Show3' ></p><br>
                    <h3 class='Side' id='Word1'>Email..............</h3><p class='Side' id='Show4' ></p><br>
                    <h3 class='Side' id='Word1'>Branch.............</h3><p class='Side' id='Show5' ></p><br>
                </div>
                <div class='Side' id='VehicleList' style='align-items: center; height: 100%; width: 48%;'>
                    <h3 class='Side' id='Word2'>Vehicle Number.....</h3><p class='Side' id='Show6' ></p><br>
                    <h3 class='Side' id='Word2'>Vehicle Type.......</h3><p class='Side' id='Show7' ></p><br>
                    <h3 class='Side' id='Word2'>Vehicle Colour.....</h3><p class='Side' id='Show8' ></p><br>
                    <h3 class='Side' id='Word2'>Unique Feature.....</h3><p class='Side' id='Show9' ></p><br>
                </div>
            </div>
                <div id='PassDetails' style=' align-items: center; display: flex; justify-content:space-evenly; border:rgb(0, 95, 95) 2px solid ;'>
                    <h3 class='Side' id='Word2'>Pass Selected</h3><p class='Side' id='Show10' ></p>    
                </div><br><br>
                <div id='confirmButton' style='display: flex; justify-content: space-evenly;'>
                <button class='Side' type='button' id='Another' onclick='location.reload()'>Buy Another Pass</button>
                <button class='Side' type='button' id='Print' >Print</button>
        </div>

*/ 


function FinalSubmit(){
    if(Pass == 1){Printee = 'Daily Pass (&#8377 5/ Day)'}
    if(Pass == 2){Printee = 'Monthly Pass (&#8377 210/ Month)'}
    if(Pass == 3){Printee = 'Annual Pass (&#8377 2000/ Year)'}
    document.getElementById('divP').innerHTML="<label for='Form' class='FormName' id='Formname'>Invoice</label><div id='div2' ><div class='Side' id='EmployeeList' align-item='centre' style=' align-content: center; height: 100%; width: 48%; '><h3 class='Side' id='Word1'>First Name.........</h3><p class='Side' id='Show1' ></p><br><h3 class='Side' id='Word1'>Last Name..........</h3><p class='Side' id='Show2' ></p><br><h3 class='Side' id='Word1'>Phone Number.......</h3><p class='Side' id='Show3' ></p><br><h3 class='Side' id='Word1'>Email..............</h3><p class='Side' id='Show4' ></p><br><h3 class='Side' id='Word1'>Branch.............</h3><p class='Side' id='Show5' ></p><br></div><div class='Side' id='VehicleList' style='align-items: center; height: 100%; width: 48%;'><h3 class='Side' id='Word2'>Vehicle Number.....</h3><p class='Side' id='Show6' ></p><br><h3 class='Side' id='Word2'>Vehicle Type.......</h3><p class='Side' id='Show7' ></p><br><h3 class='Side' id='Word2'>Vehicle Colour.....</h3><p class='Side' id='Show8' ></p><br><h3 class='Side' id='Word2'>Unique Feature.....</h3><p class='Side' id='Show9' ></p><br></div></div><div id='PassDetails' style=' align-items: center; display: flex; justify-content:space-evenly; border:rgb(0, 95, 95) 2px solid ;'><h3 class='Side' id='Word2'>Pass Selected</h3><p class='Side' id='Show10' ></p>    </div><br><br><div id='confirmButton' style='display: flex; justify-content: space-evenly;'><button class='Side' type='button' id='Another' onclick='location.reload()'>Buy Another Pass</button><button class='Side' type='button' id='Print' >Print</button></div>"
    document.getElementById('Show1').innerHTML=Fname;
    document.getElementById('Show2').innerHTML=Lname;
    document.getElementById('Show3').innerHTML=Phn;
    document.getElementById('Show4').innerHTML=Email;
    document.getElementById('Show5').innerHTML=Branch;
    document.getElementById('Show6').innerHTML=VehNo;
    document.getElementById('Show7').innerHTML=Type;
    document.getElementById('Show8').innerHTML=Colour;
    document.getElementById('Show9').innerHTML=Unique;
    document.getElementById('Show10').innerHTML=Printee;
}

