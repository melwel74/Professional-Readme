// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license;
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${
    data.github
  }
  ${
    data.description
  }

  ${
    data.install
  }

  ${
    data.usage
  }

  ${
    data.contribution
  }

  ${
    data.tests
  }

`;
}

module.exports = generateMarkdown;
