"use strict";

let hours = [
    "6:00am",
    "7:00am",
    "8:00am",
    "9:00am",
    "10:00am",
    "11:00am",
    "12:00pm",
    "1:00pm",
    "2:00pm",
    "3:00pm",
    "4:00pm",
    "5:00pm",
    "6:00pm",
    "7:00pm",
];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let table = document.getElementById("test");

function tableHead() {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    for (let i = 0; i < hours.length; i++) {
        let newItem = document.createElement("td");
        tr.appendChild(newItem);
        newItem.textContent = hours[i];
    }
    let totalItem = document.createElement("td");
    tr.appendChild(totalItem);
    totalItem.textContent = "Total cookies";
}
tableHead();

let allBranches = [];

function Branches(min, max, averageCookies) {
    this.min = min;
    this.max = max;
    this.averageCookies = averageCookies;
    this.customersPerHour = [];
    this.cookiesPurchased = [];
    this.totalCookies = 0;

    allBranches.push(this);
}
Branches.prototype.setData = function() {
    for (let i = 0; i < hours.length; i++) {
        let customers = getRandomIntInclusive(this.min, this.max);
        this.customersPerHour.push(customers);
        let cookie = Math.ceil(customers * this.averageCookies);
        this.cookiesPurchased.push(cookie);
        this.totalCookies += cookie;
    }
};

Branches.prototype.render = function() {
    let tr = document.createElement("tr");
    table.appendChild(tr);

    for (let i = 0; i < hours.length; i++) {
        let newItem = document.createElement("td");
        tr.appendChild(newItem);
        newItem.textContent = this.cookiesPurchased[i];
    }

    let totalItem = document.createElement("td");
    tr.appendChild(totalItem);
    totalItem.textContent = this.totalCookies;
};

let seattle = new Branches(23, 65, 6.3);
let tokyo = new Branches(3, 24, 1.2);
let dubai = new Branches(11, 38, 3.7);
let paris = new Branches(20, 38, 2.3);
let lima = new Branches(2, 16, 4.6);

seattle.setData();
tokyo.setData();
dubai.setData();
paris.setData();
lima.setData();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

function renderFooter() {
    let tr = document.createElement("tr");
    table.appendChild(tr);
    let TotalOfTotal = 0;
    for (let i = 0; i < hours.length; i++) {
        let oneHourTotal = 0;
        for (let j = 0; j < allBranches.length; j++) {
            oneHourTotal += allBranches[j].cookiesPurchased[i];
        }
        TotalOfTotal += oneHourTotal;
        let newItem = document.createElement("td");
        tr.appendChild(newItem);
        newItem.textContent = oneHourTotal;
    }

    let totalItem = document.createElement("td");
    tr.appendChild(totalItem);
    totalItem.textContent = TotalOfTotal;
}
renderFooter();

let form = document.getElementById("form");

form.addEventListener("submit", addBranch);

function addBranch(e) {
    e.preventDefault();

    let rowCount = table.rows.length;
    table.deleteRow(rowCount - 1);

    let max = e.target.max.value;
    let min = e.target.min.value;
    let avg = e.target.avg.value;
    let newBranch = new Branches(min, max, avg);
    newBranch.setData();
    newBranch.render();

    renderFooter();
}

// let firstBranch = {
//     max: 20,
//     min: 5,
//     averageCookies: 5.2,
//     customersPerHour: [],
//     cookiesPurchased: [],
//     totalCookies: 0,
//     setData: function() {
//         for (let i = 0; i < hours.length; i++) {
//             let customers = getRandomIntInclusive(this.min, this.max);
//             this.customersPerHour.push(customers);
//             let cookie = Math.ceil(customers * this.averageCookies);
//             this.cookiesPurchased.push(cookie);
//             this.totalCookies += cookie;
//         }
//     },
//     render: function() {
//         let myList = document.getElementById("test");
//         for (let i = 0; i < hours.length; i++) {
//             let newItem = document.createElement("li");
//             myList.appendChild(newItem);
//             newItem.textContent = hours[i] + " cookie " + this.cookiesPurchased[i];
//         }
//         let totalItem = document.createElement("li");
//         myList.appendChild(totalItem);
//         totalItem.textContent = `Total cookies = ${this.totalCookies}`;
//     },
// };

// firstBranch.setData();
// firstBranch.render();