// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === ""){
    return
  }
  else if(license==='MIT'){
    console.log('hit')
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
    return licenseBadge
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license === ""){
  return
}
else if(license==='MIT'){
  licenseLink = "(https://opensource.org/licenses/MIT)"
  return licenseLink
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === ""){
    return
  }
  else if(license==='MIT'){
    licenseBadge = renderLicenseBadge("MIT")
    licenseLink = renderLicenseLink('MIT')
    licenseSectionReadme = `# License \n ${licenseBadge}${licenseLink}`
    return licenseSectionReadme
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  licenseSectionReadme = renderLicenseSection('MIT')
  return `# ${data.title} \n # Description \n ${data.projectDescription} \n # Installation \n ${data.projectDescription} \n # Usage \n ${data.projectDescription} \n ${licenseSectionReadme} \n # Contributing \n ${data.projectDescription} \n # Tests \n ${data.projectDescription} \n # Questions \n ${data.projectDescription}`;
}

module.exports = generateMarkdown;
