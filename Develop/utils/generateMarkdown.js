// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD-2") {
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else {
    return "";
  }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GPL 3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (license === "BSD-2") {
    return "https://opensource.org/licenses/BSD-2-Clause";
  } else {
    return "";
  }
}

// A function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}\n

${renderLicenseBadge(data.license)}
## Description

  ${data.description}\n

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions?](#questions)

## Installation

${data.installation}\n

## Usage

${data.usage}\n

## License

Please check out the following site regarding the license:
${renderLicenseSection (data.license)};

## Contribution

${data.contribution}\n

## Tests

${data.tests}\n

## Questions

Here is how to contact me if you have any additional questions:

<https://github.com/${data.gitHubUser}>\n
<${data.email}>\n
`;
}

module.exports = generateMarkdown;
