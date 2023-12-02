// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === ""){
    return ""
  }
  else if(license==='MIT'){
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
    return licenseBadge
  }
  else if(license==='Apache'){
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
    return licenseBadge
  }
  else if(license==='Boost'){
    licenseBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]"
    return licenseBadge
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license === ""){
  return ""
}
else if(license==='MIT'){
  licenseLink = "(https://opensource.org/licenses/MIT)"
  return licenseLink
}
else if(license==='Apache'){
  licenseLink = "(https://opensource.org/licenses/Apache-2.0)"
  return licenseLink
}
else if(license==='Boost'){
  licenseLink = "(https://www.boost.org/LICENSE_1_0.txt)"
  return licenseLink
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === ""){
    return ""
  }
  else if(license==='MIT' || license==='Apache' || license==='Boost'){
    licenseBadge = renderLicenseBadge(license)
    licenseLink = renderLicenseLink(license)
    licenseSectionReadme = `${licenseBadge}${licenseLink}`
    return licenseSectionReadme
  }
  else{
    return ""
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if(data.license===""){
    licenseString = "None"
  }
  else{
    console.log(data.license)
    licenseLink = renderLicenseLink(data.license)
    licenseString = `This project is licensed under the ${data.license} License. See here: ${licenseLink}`
  }

  licenseSectionReadme = renderLicenseSection(data.license)
  return `
  ${licenseSectionReadme}
  # ${data.title} 
  ## Description
  ${data.projectDescription} 

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.install}
  ## Usage 
  ${data.projectDescription}
  ![alt text](./images/recipeAppDemo.png)
 
  ## License 
  ${licenseString} 
  ## Credits
  ${data.contribution}
  ## Tests 
  ${data.testInstructions}
  ## Questions 
  - Github URL is at: http://github.com/${data.githubUsername}
  - Reach me with any questions at ${data.email}
  `;
}

module.exports = generateMarkdown;
