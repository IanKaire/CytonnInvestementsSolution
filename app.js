"use strict";

// Investment object constructor
function Investment(clientName, solution) {
    this.clientName = clientName;
    this.solution = solution;
}

// Array to store investments
let investments = [];

// Function to create a new investment
function createInvestment() {
    const clientName = document.getElementById('clientNameInput').value;
    const solution = document.getElementById('investmentSolutionInput').value;
    const investment = new Investment(clientName, solution);
    investments.push(investment);
    displayInvestments();
}

// Function to read investments and display in the table
function readInvestment() {
    displayInvestments();
}

// Function to update an existing investment
function updateInvestment() {
    const clientName = document.getElementById('clientNameInput').value;
    const solution = document.getElementById('investmentSolutionInput').value;
    const index = investments.findIndex(inv => inv.clientName === clientName);
    if (index !== -1) {
        investments[index].solution = solution;
        displayInvestments();
    } else {
        alert('Investment not found!');
    }
}

// Function to delete an existing investment
function deleteInvestment() {
    const clientName = document.getElementById('clientNameInput').value;
    const index = investments.findIndex(inv => inv.clientName === clientName);
    if (index !== -1) {
        investments.splice(index, 1);
        displayInvestments();
    } else {
        alert('Investment not found!');
    }
}

// Function to display investments in the table
function displayInvestments() {
    const tableBody = document.getElementById('investmentTableBody');
    tableBody.innerHTML = '';
    investments.forEach(inv => {
        const row = `<tr><td>${inv.clientName}</td><td>${inv.solution}</td></tr>`;
        tableBody.innerHTML += row;
    });
}
