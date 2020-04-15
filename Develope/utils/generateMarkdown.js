function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `License

This project is licensed under the ${license} license.`
    )
  }
  return ''
}

function generateMarkdown(data) {
  return `
-${data.title}
${renderLicenseBadge(data.license, data.github, data.title)}

 Description

${data.description}

- Table of Contents 

 Installation

 Usage

 License

 Contributing

 Tests

 Questions

- Installation

Run the following command to install files:

\`\`\`
${data.installation}
\`\`\`

- Usage

${data.usage}

${renderLicenseSection(data.license)}
  
- Contributing

${data.contributing}

- Tests

Run the following command to test:

\`\`\`
${data.test}
\`\`\`

- Questions

<img src="${data.avatar_url}" alt="avatar" style="border-radius: 20px" width="40" />

If you have any questions about the repo, then please contact [${data.github}](${data.url}) directly at ${data.email}.

`;
}

module.exports = generateMarkdown;
