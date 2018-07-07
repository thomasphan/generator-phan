'use strict';

const { kebabCase } = require('lodash');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the sublime ${chalk.red('generator-phan')} generator!`));

    const prompts = [
      {
        type: 'input',
        name: 'moduleName',
        message: 'Module name',
        default: 'app'
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Component name',
        default: 'myComponent'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const { componentName, moduleName } = this.props;
    const componentTag = kebabCase(componentName);
    this.fs.copyTpl(
      this.templatePath('state/**/*'),
      this.destinationPath(componentName),
      { componentName, componentTag, moduleName }
    );
    this.fs.copyTpl(
      this.templatePath('../../component/templates/component/**/*'),
      this.destinationPath('component'),
      { componentName, componentTag, moduleName }
    );
  }

  install() {
    // This.installDependencies();
  }
};
