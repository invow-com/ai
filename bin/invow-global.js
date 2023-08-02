#!/usr/bin/env node
import { run } from "../lib/index.js";
import { actions as _actions } from "../invow.json";

// Delete the 0 and 1 argument (node and script.js)
const args = process.argv.splice(process.execArgv.length + 2);

// Retrieve arguments
const action = args[0];
const output = args[1];
let actions = _actions;

getOutputs = (action, outputs) => {
  for (let index = 0; index < outputs.length; index++) {
    switch (output) {
      case outputs[index]:
        run(action, outputs[index]);
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
