const mongoose = require("mongoose");
const readline = require("readline-sync");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, required: true, unique: true }
});

const User = mongoose.model("User", userSchema);

async function main() {
  await mongoose.connect("mongodb://localhost:27017/vansh");
  console.log("Connected to MongoDB");

  while (true) {
    console.log("\n===== USER MENU =====");
    console.log("1. Create User");
    console.log("2. Read Users");
    console.log("3. Update User");
    console.log("4. Delete User");
    console.log("5. Exit");

    const choice = readline.question("Enter your choice: ");

    switch (choice) {
      case "1": {
        console.log("\n--- CREATE USER ---");
        const name = readline.question("Enter name: ");
        const age = readline.questionInt("Enter age: ");
        const email = readline.question("Enter email: ");

        try {
          const user = await User.create({
            name: name,
            age: age,
            email: email
          });
          console.log("User inserted successfully");
          console.log(user);
        } catch (error) {
          console.log("Error:", error.message);
        }
        break;
      }

      case "2": {
        console.log("\n--- READ USERS ---");
        const users = await User.find()
          .select("name age email -_id")
          .lean();

        if (users.length === 0) {
          console.log("No users found");
        } else {
          console.table(users);
        }
        break;
      }

      case "3": {
        console.log("\n--- UPDATE USER ---");
        const updateEmail = readline.question(
          "Enter email of user to update: "
        );
        const newName = readline.question("Enter new name: ");
        const newAge = readline.questionInt("Enter new age: ");

        const update = await User.updateOne(
          { email: updateEmail },
          {
            $set: {
              name: newName,
              age: newAge
            }
          }
        );

        if (update.matchedCount === 0) {
          console.log("User not found");
        } else {
          console.log("User updated successfully");
        }
        break;
      }

      case "4": {
        console.log("\n--- DELETE USER ---");
        const deleteEmail = readline.question(
          "Enter email of user to delete: "
        );

        const deleted = await User.deleteOne({
          email: deleteEmail
        });

        if (deleted.deletedCount === 0) {
          console.log("User not found");
        } else {
          console.log("User deleted successfully");
        }
        break;
      }

      case "5": {
        console.log("Exiting...");
        await mongoose.disconnect();
        process.exit(0);
      }

      default:
        console.log("Invalid choice. Please enter 1-5.");
    }
  }
}

main().catch(console.error);