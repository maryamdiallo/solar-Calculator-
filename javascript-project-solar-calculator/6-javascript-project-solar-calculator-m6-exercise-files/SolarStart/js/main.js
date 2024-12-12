/*jslint browser:true */
"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-02

      Project to calculate solar needs based on form input
      Author: 
      Date:   

      Filename: main.js
*/

function calculateSolar() {
    // Get form data
    let jan = parseInt(document.solarForm.jan.value);
    let feb = parseInt(document.solarForm.feb.value);
    let mar = parseInt(document.solarForm.mar.value);
    let apr = parseInt(document.solarForm.apr.value);
    let may = parseInt(document.solarForm.may.value);
    let jun = parseInt(document.solarForm.jun.value);
    let jul = parseInt(document.solarForm.jul.value);
    let aug = parseInt(document.solarForm.aug.value);
    let sep = parseInt(document.solarForm.sep.value);
    let oct = parseInt(document.solarForm.oct.value);
    let nov = parseInt(document.solarForm.nov.value);
    let dec = parseInt(document.solarForm.dec.value);
    let zone = document.solarForm.zone.value;
    let panelWattage = parseInt(document.solarForm.panel.value);

    // Calculate total consumption
    let totalConsumption = jan + feb + mar + apr + may + jun + jul + aug + sep + oct + nov + dec;

    // Average daily consumption
    let dailyConsumption = totalConsumption / 365;

    // Determine zone factor
    let zoneFactor;
    switch (zone) {
        case "Zone 1":
            zoneFactor = 4.0;
            break;
        case "Zone 2":
            zoneFactor = 4.5;
            break;
        case "Zone 3":
            zoneFactor = 5.0;
            break;
        case "Zone 4":
            zoneFactor = 5.5;
            break;
        case "Zone 5":
            zoneFactor = 6.0;
            break;
        case "Zone 6":
            zoneFactor = 6.5;
            break;
        default:
            zoneFactor = 4.0;
    }

    // Calculate the number of panels needed
    let panelsNeeded = Math.ceil(dailyConsumption / (zoneFactor * panelWattage / 1000));

    // Update feedback div
    let feedback = document.getElementById("feedback");
    feedback.innerHTML = `
        <p>Total Annual Consumption: ${totalConsumption} kWh</p>
        <p>Average Daily Consumption: ${dailyConsumption.toFixed(2)} kWh</p>
        <p>Sunshine Zone Factor: ${zoneFactor}</p>
        <p>Panel Wattage: ${panelWattage} W</p>
        <p><strong>Recommended Number of Panels: ${panelsNeeded}</strong></p>
    `;
}
