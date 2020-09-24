// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  [installation](#Installation)
  [instructions](#Instructions)
  [license](#License)
  [contributors](#Contributors)
  [tests](#Tests)
  [questions](#Questions)
  `;
  
  }
  
  module.exports = generateMarkdown;
  
//   function generateMarkdown(data) {
//     return `# ${data.title}
  
//   ## Description
  
//   ${data.description}`
//   }