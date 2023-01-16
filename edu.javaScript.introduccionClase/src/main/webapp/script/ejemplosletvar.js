var x= "global";

function eje1(){
    var a = 5;
var b = 10;

if (a === 5) {
  let a = 4;
  var b = 1;

  document.write("let a en if: " + a); 
  document.write(" || var b en if: " + b); 
}

	document.write(" || var a fuera if: " + a);
	document.write(" || var b fuera if: " + b);
}
function eje2(){
    if (true) {
  let foo;
  //let foo;
}
}
function eje31(){
     var x = 31;
  if (true) {
    var x = 71;   
    document.write("x como var dentro de if " + x);
  } 
document.write(" || x como var fuera del if" + x);
}
function eje32(){
      let x = 31;
  if (true) {
    let x = 71;
    document.write("x como let dentro de if " + x); 
  }
document.write(" || x como let fuera del if" + x); 
}

function eje4(){
    var x = 'global';
	let y = 'global';
	document.write(this.x);
	document.write(this.y);
}