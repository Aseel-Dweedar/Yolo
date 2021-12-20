// function myTheory(qus, ansYes, ansNo) {
//     let theAnswer;

//     do {
//         theAnswer = prompt(qus);
//     } while (
//         theAnswer.toLowerCase() != "yes" &&
//         theAnswer.toLowerCase() != "y" &&
//         theAnswer.toLowerCase() != "n" &&
//         theAnswer.toLowerCase() != "no"
//     );

//     if (theAnswer.toLowerCase() == "yes" || theAnswer.toLowerCase() == "y") {
//         alert(ansYes);
//     } else if (theAnswer.toLowerCase() == "n" || theAnswer.toLowerCase() == "no") {
//         alert(ansNo);
//     }
// }

// let username = prompt("name");
// alert("hi " + username);

function myTheory(qus, ansYes, ansNo) {
    let theAnswer = prompt(qus);

    while (
        theAnswer.toLowerCase() != "yes" &&
        theAnswer.toLowerCase() != "y" &&
        theAnswer.toLowerCase() != "n" &&
        theAnswer.toLowerCase() != "no"
    ) {
        theAnswer = prompt("Please enter yes or no !! , " + qus);
    }

    if (theAnswer.toLowerCase() == "yes" || theAnswer.toLowerCase() == "y") {
        alert(ansYes);
    } else if (theAnswer.toLowerCase() == "n" || theAnswer.toLowerCase() == "no") {
        alert(ansNo);
    }
}

function guessNumber() {
    let guessingNum = prompt("gusess");
    for (let i = 0; i < 3; i++) {
        if (guessingNum < 5) {
            guessingNum = prompt("guess higher");
        } else if (guessingNum > 5) {
            guessingNum = prompt("guess lower");
        } else if (guessingNum == 5) {
            alert("right !!");
            break;
        } else {
            guessingNum = prompt("guess number");
        }
    }
}
// guessNumber();
// myTheory("qus1", "not really", "true !!");
// myTheory("qus2", "Wow!!", "No !!");
// myTheory("qus3", "haha", "hehe !!");