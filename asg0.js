// Shaun Munshi
// CRUZID smunshi
// Assignment 0
// asg0.js
var ctx;
var canvas;

function main() {
  // Retrieve <canvas> element
  canvas = document.getElementById('asg0');
  if (!canvas) {
    console.log('Failed to retrieve the <canvas> element');
    return false;
  }

  ctx = canvas.getContext('2d');

  
  ctx.fillStyle = 'black'; // Set color to black
  ctx.fillRect(0, 0, 400, 400);
}

function drawVector(v, color){
   ctx.strokeStyle = color; 
   ctx.beginPath();
   ctx.moveTo(canvas.width/2, canvas.height/2);
   ctx.lineTo(200+v.elements[0]*20, 200-v.elements[1]*20, v.elements[2]*20);
   ctx.stroke();
}

function handleDrawEvent(){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.fillStyle = 'black'; 
   ctx.fillRect(0, 0, 400, 400);


   var x = document.getElementById('v1_x').value;
   var y = document.getElementById('v1_y').value;

   var x2 = document.getElementById('v2_x').value;
   var y2 = document.getElementById('v2_y').value;
   
   var v1 = new Vector3([x, y, 0.0]);
   drawVector(v1, "red");
   var v2 = new Vector3([x2, y2, 0.0]);
   drawVector(v2, "blue");
}

function handleDrawOperationEvent(){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.fillStyle = 'black'; 
   ctx.fillRect(0, 0, 400, 400);

   var x = document.getElementById('v1_x').value;
   var y = document.getElementById('v1_y').value;
   
   var x2 = document.getElementById('v1_x').value;
   var y2 = document.getElementById('v2_y').value;
   var v1 = new Vector3([x, y, 0.0]);
   drawVector(v1, "red");
   var v2 = new Vector3([x2, y2, 0.0]);
   drawVector(v2, "red");

   var operator = document.getElementById('opt').value;
   
   switch(operator){
      case "add":
         v1.add(v2);
         drawVector(v1, "green");
         break;

      case "Subtract":
         v1.sub(v2);
         drawVector(v1, "green");
         break;

      case "Multiply":
         v1.mul(document.getElementById('scalar').value);
         drawVector(v1, "green");
         v2.mul(document.getElementById('scalar').value);
         drawVector(v2, "green");
         break;

      case "Divide": 
         v1.div(document.getElementById('scalar').value);
         drawVector(v1, "green");
         v2.div(document.getElementById('scalar').value);
         drawVector(v2, "green");
         break;

      case "Magnitude":
         console.log("Magnitude v1: "+ v1.magnitude());
         console.log("Magnitude v2: "+ v2.magnitude());
         break;

      case "Normalize":
         var normalize_v1 = v1.normalize();
         drawVector(normalize_v1, "green");
         var normalize_2 = v2.normalize();
         break;

      case "Angle":
         console.log("Angle: " + (angleBetween(v1, v2)).toFixed(2));
         break;

      case "Area":
         console.log("Area of this triangle: " + (areaTriangle(v1, v2)).toFixed(2));
         break;
   }

   
}

function angleBetween(v1, v2){
   var m1 = v1.magnitude();
   var m2 = v2.magnitude();
   var x = Vector3.dot(v1, v2) / m1 / m2;
   rV = Math.acos(x) * 180 / Math.PI;
   return rV;
}

function areaTriangle(v1, v2){
   const rV = Vector3.cross(v1, v2);

   return rV.magnitude()/2;
}
