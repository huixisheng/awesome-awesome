const parseGithub = require('parse-github-url');
const git = require('simple-git/promise');
const fs = require('fs');

const githubLinkList = [
  {
    url: 'https://github.com/trekhleb/javascript-algorithms.git',
    cate: 'javascript',
  },
  {
    url: 'https://github.com/lyfeyaj/awesome-resources.git',
    cate: 'frameworks',
  },
];


githubLinkList.forEach((item) => {
  // https://www.cnblogs.com/TomXu/archive/2011/12/31/2289423.html
  ;(function(item){
    console.log(item);
    writeIntoReadmeRepo(item);
  })(item);
});


function existSubmodule(submodulePath) {
  return fs.existsSync(submodulePath);
}

function submoduleAdd(githubLink, submodulePath) {
  console.log('githubLink', githubLink);
  console.log('submodulePath', submodulePath);
  git()
    .submoduleAdd(githubLink, submodulePath)
    .then((...args) => {
      console.log(args);
    })
    .catch(err => {
      // console.log(err);
    });
}

function writeIntoReadmeRepo(githubLinkListItem) {
  const githubLink = githubLinkListItem.url;
  const fileType = githubLinkListItem.cate;
  const gitUrlParse = parseGithub(githubLink);

  const submodulePath = `${fileType}/@${gitUrlParse.repo}`;
  if (existSubmodule(submodulePath)) {
    return;
  }
  submoduleAdd(githubLink, submodulePath);
  const submoduleDesc = `### [@${gitUrlParse.repo}](/${fileType}/@${gitUrlParse.repo}/)
  [@${gitUrlParse.repo}](${githubLink})`;

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
}

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
