const parseGithub = require('parse-github-url');
const git = require('simple-git/promise');

const githubLink = 'https://github.com/joshbuchea/HEAD.git';
const fileType = 'head';
const gitUrlParse = parseGithub(githubLink);

const submodulePath = `${fileType}/@${gitUrlParse.repo}`;
const submoduleDesc = `### [@${gitUrlParse.repo}](/${fileType}/@${gitUrlParse.repo}/)
[@${gitUrlParse.repo}](${githubLink})`;

console.log(submoduleDesc);
git()
  .submoduleAdd(githubLink, submodulePath)
  .then((...args) => {
    console.log(args);
  })
  .catch(err => {
    // console.log(err);
  });

const cheerio = require('cheerio');
const request = require('request');
request(githubLink, function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const $ = cheerio.load(body);
  const desc = $('[itemprop="about"]').html().trim();
  const fs = require('fs');
  let readmeContent = fs.readFileSync('README.md', 'utf8');
  readmeContent = readmeContent + '\n' + submoduleDesc + '\n> ' + desc;
  fs.writeFileSync('README.md', readmeContent);
  // console.log('body:', body); // Print the HTML for the Google homepage.
});

// document.querySelectorAll('[itemprop="about"]')[0].innerHTML.trim()

/**
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: 'lyfeyaj/awesome-resources.git',
  path: 'lyfeyaj/awesome-resources.git',
  href: 'https://github.com/lyfeyaj/awesome-resources.git',
  filepath: null,
  owner: 'lyfeyaj',
  name: 'awesome-resources',
  repo: 'lyfeyaj/awesome-resources',
  branch: 'master',
  repository: 'lyfeyaj/awesome-resources' }
 */
// git submodule add https://github.com/lyfeyaj/awesome-resources.git frameworks/@lyfeyaj/awesome-resources
//
// https://www.npmjs.com/package/git-url-parse
// https://www.npmjs.com/package/parse-github-repo-url
