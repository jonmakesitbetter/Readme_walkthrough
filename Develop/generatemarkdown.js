// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Badge](https://img.shields.io/github/languages/code-size/${data.user}/${data.repository})
  ![${data.license}](https://img.shields.io/static/v1?label=License&message=${data.license}&color=green)
  ## Description
  ${data.description}
  ## Table of Contents
  [installation](#Installation)
  [usage](#Usage)
  [license](#License)
  [contributing](#Contributing)
  [tests](#Tests)
  [questions](#Questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  This project is under the ${data.license} license. 
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions, please feel free to contact me at
  ![${data.questions}](${data.questions}) or see my GitHub at 
  ![${data.user}](https://github.com/${data.user}/).
  `;
}

module.exports = generateMarkdown;