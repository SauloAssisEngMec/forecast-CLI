const minimist = require("minimist");

module.exports = () => {
  console.log("forecats CLI!");

  const args = minimist(process.argv.slice(2));
  console.log(args);
};
