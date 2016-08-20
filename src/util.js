// Exports the debug method of this file.
exports.debug = (title, obj) => {
  // Requires in the terminal-colors module.
  require('terminal-colors');

  // Get's the the date and time when used.
  const ts = new Date();
  // A seperator for formatting.
  const seperator = '\n====================================\n';
  // This is formatted and colored output for the terimal
  const outputTerminal = seperator.grey + title.bold.yellow + seperator.grey + obj + '\n' + ts;

  // If the DEBUG environmental variable exits
  if (process.env.DEBUG) {
      // If there is an error throw it
      if (err) throw err;
      // Display the output on terminal
      console.log(outputTerminal);
  }
};
