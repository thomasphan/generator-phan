'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'appName',
        message: 'App name',
        default: 'app'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const { appName } = this.props;

    this.spawnCommandSync('npx', ['create-react-app', appName]);
  }

  install() {
    const { appName } = this.props;

    this.npmInstall(['@material-ui/core'], {}, { cwd: appName });
  }
};
