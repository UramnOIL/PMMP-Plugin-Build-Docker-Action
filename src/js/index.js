const core = require('@actions/core');
const core = require('@actions/github');

try {
    console.log("Hello World");
} catch (error) {
    core.setFailed(error.message);
}