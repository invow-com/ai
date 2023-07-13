#!/usr/bin/env node
const invow = require("../lib/index.js");
const config = require("../invow.json");

// Delete the 0 and 1 argument (node and script.js)
const args = process.argv.splice(process.execArgv.length + 2);

// Retrieve arguments
const action = args[0];
const output = args[1];
let actions = config.actions;

getOutputs = (action, outputs) => {
  for (let index = 0; index < outputs.length; index++) {
    switch (output) {
      case outputs[index]:
        invow.run(action, outputs[index]);
        break;
    }
  }
};

(getActions = () => {
  actions.forEach((item) => {
    switch (action) {
      case item.action:
        getOutputs(item.action, item.outputs);
        break;
    }
  });
})();
