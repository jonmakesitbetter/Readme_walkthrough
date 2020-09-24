// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    # ${data.description}
    ## Table of Contents
  #[installation](#Installation)
  #[instructions](#Instructions)
  #[license](#License)
  #[contributors](#Contributors)
  #[tests](#Tests)
  #[questions](#Questions)
  # ${data.installation}
  # ${data.instructions}
  # ${data.license}
  # ${data.contributors}
  # ${data.tests}
  # ${data.questions}
  `;
  
  }
  
  module.exports = generateMarkdown;
  
//   function generateMarkdown(data) {
//     return `# ${data.title}
  
//   ## Description
  
//   ${data.description}`
//   }