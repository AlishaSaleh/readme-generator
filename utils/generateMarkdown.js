// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  if (license) {
    switch (license) {
      case 'Apache License 2.0':
        badge = '[![License](https://img.shields.io/badge/license-Apache-green.svg)](https://shields.io/)';
        break;
      case 'GNU General Public License v3.0':
        badge = '[![License](https://img.shields.io/badge/license-GNU-green.svg)](https://shields.io/)';
        break;
      case 'MIT License':
        badge = '[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://shields.io/)';
        break;
      case 'Mozilla Public License 2.0':
        badge = '[![License](https://img.shields.io/badge/license-Mozilla-green.svg)](https://shields.io/)';
        break;
      case 'Open Software License 3.0':
        badge = '[![License](https://img.shields.io/badge/license-OpenSoftware-green.svg)](https://shields.io/)';
        break;
    }
    return badge;
  }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let mdContents = `## Table of Contents`;
  if (data.installation !== '') {
    `* [Installation](#installation)`
  };
  if (data.usage !== '') {
    `* [Usage](#usage)`
  };
  if (data.credits !== '') {
    `* [Credits](#credits)`
  };
  if (data.license !== '') {
    `* [Licese](#license)`
  };
  if (data.contributing !== '') {
    `* [Contributing](#contributing)`
  };
  if (data.tests !== '') {
    `* [Tests](#tests)`
  };

  let mdMain = `# ${data.title}

  ## Description

  ${data.description}

  `;
  mdMain += mdContents;
  
  if (data.installation !== '') {
    mdMain += `## Installation
    
    ${data.installation}`
  };
  if (data.usage !== '') {
    mdMain += `## Usage
    
    ${data.usage}`
  };
  if (data.credits !== '') {
    mdMain += `## Credits
    
    ${data.credits}`
  };
  if (data.license !== '') {
    mdMain += `## License
    
    ${data.license}`
  };
  if (data.contributing !== '') {
    mdMain += `## Contributing
    
    ${data.contributing}`
  };
  if (data.tests !== '') {
    mdMain += `## Tests
    
    ${data.tests}`
  };

  return mdMain
}

module.exports = generateMarkdown;
