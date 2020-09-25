// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Badge](https://img.shields.io/github/languages/code-size/${data.user}/${data.repository})
  ## Description
  ${data.description}
  ## Table of Contents
  [installation](#Installation)
  [instructions](#Instructions)
  [license](#License)
  [contributors](#Contributors)
  [tests](#Tests)
  [questions](#Questions)
  ## Installation
  ${data.installation}
  ## Instructions
  ${data.instructions}
  ## License
  This project is under the ${data.license} license. 
  ## Contributors
  ${data.contributors}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions, please feel free to contact me at
  ![${data.questions}](${data.questions}) or see my GitHub at 
  ![${data.user}](https://github.com/${data.user}/).
  `;
}

module.exports = generateMarkdown;