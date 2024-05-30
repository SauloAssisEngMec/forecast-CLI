const menus = {
  main: `
      outside [command] <options>
  
      today .............. information for today forecast
      version ............ show package version of app
      help ............... show help menu for a command`,

  today: `
      outside today <options>
  
      --location, -l ..... the location to use`,
  forecast: `information about forecast`,
};

module.exports = (args) => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
