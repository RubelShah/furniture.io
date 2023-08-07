 /* Created by Tivotal */

 const priceInputs = document.querySelectorAll(".price-input input");
 const rangeInputs = document.querySelectorAll(".range-input input");
 const range = document.querySelector(".range-progress");
//  .range-slider .range-progress
 const showingvalue = document.querySelectorAll(".range-bar span");
 
 let priceGap = 1000;
 
 priceInputs.forEach((input) => {
   input.addEventListener("input", (e) => {
     let minPrice = parseInt(priceInputs[0].value);
     let maxPrice = parseInt(priceInputs[1].value);

     if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInputs[1].max) {
       if (e.target.dataset.forRangeinput === "min-input") {
         rangeInputs[0].value = minPrice;
         range.style.left = (minPrice / rangeInputs[0].max) * 100 + "%";
       } else {
         rangeInputs[1].value = maxPrice;
         range.style.right = 100 - (maxPrice / rangeInputs[1].max) * 100 + "%";
       }
     }
   });
 });
 
 rangeInputs.forEach((input) => {
   input.addEventListener("input", (e) => {
     let minVal = parseInt(rangeInputs[0].value);
     let maxVal = parseInt(rangeInputs[1].value);
       priceInputs[0].value = minVal;
       priceInputs[1].value = maxVal;
       showingvalue[0].innerText = minVal + "/-";
       showingvalue[1].innerText = maxVal + "/-";
       range.style.left = (minVal / rangeInputs[0].max) * 100 + "%";
       range.style.right = 100 - (maxVal / rangeInputs[1].max) * 100 + "%";
   });
 });
 /************************************************************/