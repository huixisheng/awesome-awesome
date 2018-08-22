const path = require('path');
const fs = require('fs');
const fg = require('fast-glob');
const debuglog = require('debug')('MarkdownBeforeParse');


class MarkdownBeforeParse {
  constructor(rules) {
    this.rules = rules;
    this.parseProcess();
  }

  parseProcess() {
    const rules = this.rules;
    rules.forEach((rule) => {
      const files = fg.sync([rule.filter]);
      const cwd = process.cwd();
      files.forEach((file) => {
        const filepath = path.join(cwd, file);
        let content = fs.readFileSync(filepath, 'utf8');
        if (Array.isArray(rule.replaces)) {
          rule.replaces.forEach((replace) => {
            content = content.replace(replace.find, replace.replace);
          });
          fs.writeFileSync(filepath, content, 'utf8');
        }
      });
      console.log(files);
      debuglog(files);
    });
  }
}

// cheat-sheet/flyhigher139-Git-Cheat-Sheet
// fe/@dypsilon/frontend-dev-bookmarks
// fe/sorrycc-awesome-javascript
// fe/uhub-awesome-css
// tutorial/@byoungd/English-level-up-tips-for-Chinese
// frameworks/@JingwenTian/awesome-frontend
// javascript/@trekhleb/javascript-algorithms

const rules = [
  {
    filter: 'fe/uhub-awesome-css/README.md',
    replaces: [
      {
        find: /`*\<paper-spinner\>`*/g,
        replace(matchs, word) {
          return '`<paper-spinner>`';
        }
      },
      {
        find: /`*\<span\>`*/g,
        replace() {
          return '`<span>`';
        }
      },
    ],
  },
  {
    filter: 'tutorial/@byoungd/English-level-up-tips-for-Chinese/part-1/2-vocabulary.md',
    replaces: [
      {
        find: 'assets/dict.JPG',
        replace() {
          return 'assets/dict.jpg';
        },
      },
      {
        find: '![OCE Artboard@2x.png](../assets/OCE%20Artboard@2x.png)',
        replace() {
          return '';
        },
      }
    ],
  },
  {
    filter: 'tutorial/@byoungd/English-level-up-tips-for-Chinese/part-2/x-misc.md',
    replaces: [
      {
        find: '![黑人问号.jpg](../assets/黑人问号.jpg)',
        replace() {
          return '';
        },
      }
    ]
  },
  {
    filter: 'cheat-sheet/flyhigher139-Git-Cheat-Sheet/other-sheets/*.md',
    replaces: [
      {
        find: 'Merge <branch>',
        replace() {
          return 'Merge `<branch>`';
        },
      },
      {
        find: 'मा <branch>',
        replace() {
          return 'मा `<branch>`';
        },
      },
      {
        find: 'src="./Img/git-flow-commands.png"',
        replace() {
          return 'src="../Img/git-flow-commands.png"';
        },
      },
      {
        find: 'Fusionar <rama>',
        replace() {
          return 'Fusionar `<rama>`';
        },
      },
    ]
  },
  {
    filter: 'fe/@dypsilon/frontend-dev-bookmarks/**/*.md',
    replaces: [
      {
        find: /`*\<head\>`*/g,
        replace() {
          return '`<head>`';
        },
      },
      {
        find: /`*\<picture\>`*/g,
        replace() {
          return '`<picture>`';
        },
      },
    ],
  },
  {
    filter: 'fe/sorrycc-awesome-javascript/README.md',
    replaces: [
      {
        find: /`*\<canvas\>`*/g,
        replace() {
          return '`<canvas>`';
        },
      },
      {
        find: /`*\<svg\>`*/g,
        replace() {
          return '`<svg>`';
        },
      },
      {
        find: 'Enables <video> and <audio>',
        replace() {
          return 'Enables `<video>` and `<audio>`';
        },
      },
      {
        find: 'browsers. <https://html5media.info/>',
        replace() {
          return 'browsers. `<https://html5media.info/>`';
        },
      },
      {
        find: 'HTML5 <audio> or <video>',
        replace() {
          return 'HTML5 `<audio>` or `<video>`';
        },
      },
    ],
  },
  {
    filter: 'frameworks/@JingwenTian/awesome-frontend/README.md',
    replaces: [
      {
        find: /`*\<head\>`*/g,
        replace() {
          return '`<head>`';
        },
      },
    ],
  },
  {
    filter: 'javascript/@trekhleb/javascript-algorithms/src/algorithms/sets/power-set/README.md',
    replaces: [
      {
        find: '`{{}, {x}, {y}, {z}, {x, y}, {x, z}, {y, z}, {x, y, z}}`',
        replace(matchs) {
          console.log(matchs);
          return '`\\{\\{}, {x}, {y}, {z}, {x, y}, {x, z}, {y, z}, {x, y, z\\}\\}`';
        },
      },
    ],
  },
  {
    filter: 'cheat-sheet/tiimgreen-github-cheat-sheet/*.md',
    replaces: [
      {
        find: '`{{ site.github.project_title }}`',
        replace() {
          return '`\\{\\{ site.github.project_title \\}\\}`';
        },
      },
    ],
  }
];

new MarkdownBeforeParse(rules);