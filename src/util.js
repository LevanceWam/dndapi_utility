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
      // Display the output on terminal
      console.log(outputTerminal);
  }
};

exports.dndBumper = (version, bump) => {
  let major;
  let minor;
  let patch;

  console.log(version);
  console.log(bump);

  const bumper = [];
  for (let i = 0; i < version.length; i++) {
    if (version[i] === '.') {
      bumper.push(i);
    }
  }

  if (bump === 'major') {
    // If the user calls for major it will bump up it one.
    major++;
    minor = 0;
    patch = 0;
  } else if (bump === 'minor') {
    // If the user calls for minor it will bump up it one.
    minor++;
    patch = 0;
  } else if (bump === 'patch') {
    // If the user calls for patch it will bump up it one.
    patch++;
  } else {
    console.log('Nothing Was Updated');
  }


  major = version.substring(bumper[0],
  bumper[0] - version.length);

  minor = version.substring(bumper[0] + 1,
  bumper[1]);

  patch = version.substring(bumper[1] + 1,
  version.length);

  version = major + '.' + minor + '.' + patch;
  console.log('Updated version to: ' + version);
};
