import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bold.yellowBright("WELCOME IN AHAD STUD-MANAG-SYS"));

const randomnumber: number = Math.floor(10000 + Math.random() * 90000)

let mybalance: number = 50000

let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter students name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Select course to enrolled:",
        choices: ["WEB DESINNING", "GRAPHIC DESIGNING", "GEN AI ENGINERING", "VIDEO EDITING"]
    }
]);

// {[key: String]:Number}
const tutionfee: any = {
    "WEB DESINNING": 6000,
    "GRAPHIC DESIGNING": 5000,
    "GEN AI ENGINERING": 10000,
    "VIDEO EDITING": 4000
};

console.log(`\nTutuin feea: ${tutionfee[answer.courses]}/\n`);
console.log(`Balance: ${mybalance}\n`);

let paymenttype = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment type:",
        choices: ["CASH", "CARD"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter amount to pay:",
        validate: function (value) {
            if (isNaN(value) || value <= 0) {
                return "Please enter a valid positive number.";
            }
            return true;
        }

    }
]);

console.log(`\n You select payment method ${paymenttype.payment}`);

const tutionfees = tutionfee[answer.courses];
const paymentamount = parseFloat(paymenttype.amount)

if (tutionfees === paymentamount) {
    console.log(`congtratulation, you have successfully enrolled in ${answer.courses}`);

    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do next",
            choices: ["view status", "exit"]
        }
    ])
    if (ans.select === "view status") {
        console.log("\n*********status*********\n");

        console.log(`\nYour status: ${answer.students}`)
        console.log(`Student name: ${answer.students}`);
        console.log(`Student ID: ${randomnumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tution fees paid: ${paymentamount}`);
        console.log(`Balance: ${mybalance += paymentamount}`);
    } else {
        console.log(`\nExiting Student Management system\n`)
    }

} else {
    console.log("invalid amount due to course\n");

}