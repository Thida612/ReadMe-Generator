//TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== "none") {
return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
}
return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== "none") {
return `n* [License](#license)\n`;
}
return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== "none") {
return `## License
This project is licensed under the ${license} license.`;
}
return"";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}




## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Contact Me](#contact-me)

## Description 
${data.description}

## Installation 
${data.installation}

## Usage 
${data.usage}

## License 
${data.license}

## Contributing 
${data.contribution}

## Tests 
${data.test}

## Contact Me:
* Email: ${data.email}
* Github: ${data.github}


`;
}

export default generateMarkdown;