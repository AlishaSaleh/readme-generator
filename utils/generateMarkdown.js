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
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Licese](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}

  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions?
  You can reach me on GitHub:
  [${data.username}](${data.profile})
  OR via this email:
  ${data.email}
  
  `
}

module.exports = generateMarkdown;
