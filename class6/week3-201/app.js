let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let show = document.getElementById("show");
let list = document.getElementById("list");
let imgContainer = document.getElementById("imgContainer");
const ctx = document.getElementById("myChart").getContext("2d");

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let allImages = [];
let img1Indx = 0;
let img2Indx = 0;
let rounds = 0;

function Images(name) {
    this.name = name;
    this.path = "./img/" + name + ".jpeg";
    this.shown = 0;
    this.click = 0;
    allImages.push(this);
}

let images = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];

for (let i = 0; i < images.length; i++) {
    new Images(images[i]);
}

imgContainer.addEventListener("click", imgContainerEvent);

function imgContainerEvent(event) {
    if ((event.target.id == "img1" || event.target.id == "img2") && rounds <= 15) {
        if (event.target.id == "img1") {
            allImages[img1Indx].click++;
        } else {
            allImages[img2Indx].click++;
        }
        img1Indx = getRandomIntInclusive(0, 11);

        do {
            img2Indx = getRandomIntInclusive(0, 11);
        } while (img2Indx == img1Indx);

        img1.src = allImages[img1Indx].path;
        img2.src = allImages[img2Indx].path;
        allImages[img1Indx].shown++;
        allImages[img2Indx].shown++;
        rounds++;
        saveData();
    } else {
        myChart();
    }
}
console.log(allImages);

show.addEventListener("click", showResults);

function showResults() {
    for (let i = 0; i < allImages.length; i++) {
        let li = document.createElement("li");
        list.appendChild(li);
        li.textContent = `${allImages[i].name} had ${allImages[i].click} votes, and was seen ${allImages[i].shown} times.`;
    }
}

function saveData() {
    localStorage.setItem("data", JSON.stringify(allImages));
}

function getData() {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data) {
        allImages = data;
    }
}

getData();

function myChart() {
    let allNames = [];
    let allClicks = [];
    let allShown = [];

    for (let i = 0; i < allImages.length; i++) {
        allNames.push(allImages[i].name);
        allClicks.push(allImages[i].click);
        allShown.push(allImages[i].shown);
    }

    const myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: allNames,
            datasets: [{
                    label: "# clicks",
                    data: allClicks,
                    backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                    borderColor: ["rgba(255, 99, 132, 1)"],
                    borderWidth: 1,
                },
                {
                    label: "# Shown",
                    data: allShown,
                    backgroundColor: ["rgba(255, 50, 132, 0.2)"],
                    borderColor: ["rgba(255, 50, 132, 1)"],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}