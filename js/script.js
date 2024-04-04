// Created by: Niko
// Created on: march 2022
// This file contains the JS functions for index.html


"use strict"
// function to calculate pay
function calculateArea() {
  // declaring variable for hours worked with value set as value inputed by user 
  let sideA = parseInt(document.getElementById("sidea").value);
  
  // declaring variable for wage with value set as value inputed by user 
  let sideB = parseInt(document.getElementById("sideb").value);
  // declaring variable for wage with value set as value inputed by user 
  let height = parseInt(document.getElementById("height").value);
  
  // calculates result by multiplying the inputed wage and hours together to get total pay
  let area = height * (sideA + sideB)/2;
  document.getElementById("user-info").innerHTML = "The area is " + area.toFixed(3) + " cm².";
  
  return area;
}

