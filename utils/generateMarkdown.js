// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// A switch statement that runs through all the possible license options
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

// A function that returns the license link
// If there is no license, return an empty string
// A switch statement that runs through all the possible license options
function renderLicenseLink(license) { 
  let link;
  if (license) {
    switch (license) {
      case 'Apache License 2.0':
        link = '> This project was created under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)';
        break;
      case 'GNU General Public License v3.0':
        link = '> This project was created under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)';
        break;
      case 'MIT License':
        link = '> This project was created under the [MIT License](https://opensource.org/licenses/MIT)';
        break;
      case 'Mozilla Public License 2.0':
        link = '> This project was created under the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)';
        break;
      case 'Open Software License 3.0':
        link = '> This project was created under the [Open Software License 3.0](https://opensource.org/licenses/OSL-3.0)';
        break;
    }
    return link;
  }
}

// Function that generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
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
  ${renderLicenseBadge(data.license)}


  ${renderLicenseLink(data.license)}

  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions?
  You can reach me on GitHub:
  [${data.username}](${data.profile})
  \n OR via this email:
  ${data.email}
  
  `
}

module.exports = generateMarkdown;
