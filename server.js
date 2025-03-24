const path = require("path");

const fspromises = require("fs").promises;

const fileoperations = async () => {
  try {
    // Reading a file
    const data = await fspromises.readFile(
      path.join(__dirname, "Files", "hello.txt"),
      "utf8"
    );
    console.log(data);

    // Writing a file
    await fspromises.writeFile(
      path.join(__dirname, "Files", "world.txt"),
      "Hello World!"
    );
    console.log("File created!");

    // Appending to a file
    await fspromises.appendFile(
      path.join(__dirname, "Files", "world.txt"),
      "\n I am learning Node.js"
    );
    console.log("File updated!");

    // Renaming a file
    await fspromises.rename(
      path.join(__dirname, "Files", "world.txt"),
      path.join(__dirname, "Files", "msg.txt")
    );
    console.log("File renamed!");

    // Deleting a file
    await fspromises.unlink(path.join(__dirname, "Files", "msg.txt"));
    console.log("File deleted!");
  } catch (err) {
    console.error(err);
  }
};
fileoperations();

process.on("uncaughtException", (err) => {
  console.log("There was an Uncaught: " + err);
  process.exit(1);
});
