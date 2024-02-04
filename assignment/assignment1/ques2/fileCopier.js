
// Import required modules
const fs = require('fs');
const readline = require('readline');

// Function to copy the content of one file to another
function copyFile(inputFilePath, outputFilePath) {
  // Create a readable stream to read the input file
  const inputStream = fs.createReadStream(inputFilePath, 'utf-8');

  // Create a writable stream to write to the output file
  const outputStream = fs.createWriteStream(outputFilePath);

  // Create a readline interface for reading the input stream line by line
  const rl = readline.createInterface({
    input: inputStream,
    crlfDelay: Infinity,
  });

  // Event listener for each line read from the input file
  rl.on('line', (line) => {
    // Write the line to the output file
    outputStream.write(line + '\n');
  });

  // Event listener for the end of the input stream
  rl.on('close', () => {
    // Close the output stream
    outputStream.end();
    console.log('File copy completed.');
  });

  // Event listener for handling errors during input file reading
  rl.on('error', (err) => {
    console.error(`Error reading the input file: ${err.message}`);
  });

  // Event listener for handling errors during output file writing
  outputStream.on('error', (err) => {
    console.error(`Error writing to the output file: ${err.message}`);
  });
}

// Export the copyFile function to make it accessible in other modules
module.exports = {
  copyFile,
};
