const minimist = require("minimist");

module.exports = () => {
  console.log("forecats CLI!");

  const args = minimist(process.argv.slice(2));

  let commands = args._[0] || "help";

  if (args.version || args.v) {
    commands = "version";
  }

  if (args.help || args.h) {
    commands = "help";
  }
  switch (commands) {
    case "today":
      require("./commands/today")(args);
      break;
    case "version":
      require("./commands/version")(args);
      break;

    case "help":
      require("./commands/help")(args);
      break;
    case "forecast":
      require("./commands/forecast")(args);
      break;
    default:
      console.log(`${commands} isnt a valid command`);
      break;
  }
};
