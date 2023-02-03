const vscode = require("vscode");
const urls = require("./urls.json");

function activate(context) {
  let disposable = vscode.languages.registerHoverProvider("*", {
    provideHover(document, position) {
      let range = document.getWordRangeAtPosition(position);
      let word = document.getText(range);

      if (urls.includes(word)) {
        return new vscode.Hover(`I found it!\nURL: ${word}`);
      }
    },
  });

  context.subscriptions.push(disposable);
}

exports.activate = activate;
