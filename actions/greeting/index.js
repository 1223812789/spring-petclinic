const core = require('@actions/core');

try {
  const username = core.getInput('username', { required: true }).trim();
  const greeting = core.getInput('greeting') || 'Hello';

  if (!username) {
    throw new Error('The input "username" is required and cannot be empty.');
  }

  const message = `${greeting}, ${username}!`;

  console.log(`Generated greeting: ${message}`);
  core.setOutput('message', message);
} catch (error) {
  core.setFailed(error.message || 'An unexpected error occurred while generating the greeting.');
}
