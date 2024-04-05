// Created by: Niko
// Created on: april 2024
// This file contains the JS functions for index.html


"use strict"
// function to calculate pay
function calculateArea() {
  // declaring variable for side a
  let sideA = parseInt(document.getElementById("sidea").value);
  
  // declaring variable for side b
  let sideB = parseInt(document.getElementById("sideb").value);
  // declaring variable for height
  let height = parseInt(document.getElementById("height").value);
  
  // calculates result by multiplying height by the sum of side a and side b and then dividing by 2
  let area = height * (sideA + sideB)/2;
  document.getElementById("user-info").innerHTML = "The area is " + area.toFixed(3) + " cm².";
  
  return area;
}

