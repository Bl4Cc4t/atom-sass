//import AtomSassView from "./atom-sass-view";
const { CompositeDisposable } = require("atom")

var Compiler = require("./compiler")

const AtomSass = {

  subscriptions: null,
  config: {
    additionalParameters: {
      type: "string",
      default: ""
    },
    compilePartials: {
      type: "boolean",
      default: false
    }
  },

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable()
    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add("atom-workspace", {
      "atom-sass:compile": () => this.compile()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  compile() {
    console.log("AtomSass Compile Started!")
    var compiler = new Compiler()
  }
}

module.exports = AtomSass
