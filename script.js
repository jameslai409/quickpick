function promptUser() {
    const compareNumbers = (a, b) => a - b;


    var input = prompt("Enter winning numbers separate by spaces");
    var split = input.split(" ");
    var userArray = [];
    for (let i = 0; i < 5; i++) {
        userArray.push(parseInt(split[i]));
    }
    userArray.sort(compareNumbers);

    var userLuckyNum = prompt("Enter lucky ball number");

    //get and sort numbers
    var array = [];
    for (let i = 0; i < 5; i++) {
        array.push(Math.ceil(48 * Math.random()));
    }
    array.sort(compareNumbers);

    var luckyNum = Math.ceil(18 * Math.random());

    //comparing the two
    var match = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (userArray[i] == array[j]) {
                match = match + 1;
            }
        }
    }
    var luckyMatch = Boolean(luckyNum == userLuckyNum);
    
    //calculate prize
    var prize;
    switch(match) {
        case 0:
            prize = (luckyMatch ? "4" : "0");
            break;
        case 1:
            prize = (luckyMatch ? "6" : "0");
            break;
        case 2:
            prize = (luckyMatch ? "25" : "3");
            break;
        case 3:
            prize = (luckyMatch ? "150" : "20");
            break;
        case 4:
            prize = (luckyMatch ? "5000" : "200");
            break;
        case 5:
            prize = (luckyMatch ? "7000 a WEEK for LIFE" : "25000 a YEAR for LIFE");
            break;
        default:
            break;
    }

    //display output
    document.write("The quick pick numbers are ");
    for (let i = 0; i < 5; i++) {
        document.write(" " + array[i] + " ");
    }
    document.write("<br />");
    document.write("The lucky ball number is " + luckyNum + "<br />");
    document.write("<br />");
    document.write("The winning numbers are ");
    for (let i = 0; i < 5; i++) {
        document.write(" " + userArray[i] + " ");
    } 
    document.write("<br />");
    document.write("The lucky ball number is " + userLuckyNum + "<br />");
    document.write("<br />")
    document.write("The number of matches you made is " + match + "<br />");
    if (luckyMatch) {
        document.write("You matched the lucky number!<br />");
    }
    else {
        document.write("You did not match the lucky number.<br />");

    }
    document.write("INTERESTING! Your prize is $" + prize + "<br />");    

}


