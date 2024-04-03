// Copyright (c) 2020 Mr. Coxall All rights reserved
// Created by: Niko
// Created on: march 2022
// This file contains the JS functions for index.html

"use strict"

// function to calculate pay
function calculateArea() {
  // declaring variable for hours worked with value set as value inputed by user 
  let sideA = document.getElementById("sidea").value
  
  // declaring variable for wage with value set as value inputed by user 
  let sideB = document.getElementById("sideb").value

  // declaring variable for wage with value set as value inputed by user 
  let height = document.getElementById("height").value
  
  // calculates result by multiplying the inputed wage and hours together to get total pay
  let area = ((sideA + sideB)*height)/2;
  document.getElementById("user-info").innerHTML = "The area is " + area.toFixed(2) + " cm²";

  return area;
 