const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// test1.js - Temperature conversion
rl.question("Enter temperature in Celsius: ", function(input) {
    let c = Number(input);
    let f = (c * 9 / 5) + 32;
    console.log(c + "°C is " + f + "°F");
    // test2.js - Fetching user data from API
    rl.question("Enter user ID: ", async function(idInput) {
        let id = Number(idInput);

        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/users");
            let data = await response.json();

            console.log("User data fetched!");

            // Print data for the entered ID
            let user = data.find(u => u.id === id);
            if (user) {
                console.log(`Data for User ID ${id}:`, user);
            } else {
                console.log(`User with ID ${id} not found.`);
            }

            // Print all IDs data
            console.log("All users data:", data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }

        // test3.js - Number and array
        let numbers = [1, 2, 3, 4, 5];
        rl.question("Enter a number: ", function(input) {
            let num = Number(input);
            console.log(num);
            console.log(numbers);

            if (numbers.includes(num)) {
                console.log("Found in array");
            } else {
                console.log("Not found");
            }

            // test4.js - Greeting
            rl.question("Enter your name: ", function(name) {
                rl.question("Enter your age: ", function(age) {
                    function greet(name, age = "unknown") {
                        console.log("Hello, " + name + "! You are " + age + " years old.");
                    }
                    greet(name, age || "unknown");

                    // test5.js - Array
                    let names = ["LILLY", "ROSE", "JASMINE"];
                    rl.question("Enter a name to search: ", function(searchName) {
                        console.log(names.includes(searchName.toUpperCase()));
                        console.log(searchName);
                        console.log(names);
                        rl.close();
                    });
                });
            });
        });
    });
});