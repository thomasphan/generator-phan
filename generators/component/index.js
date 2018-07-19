'use strict';

const { kebabCase } = require('lodash/fp');
const chalk = require('chalk');
const Generator = require('yeoman-generator');
const yosay = require('yosay');

const { addImportStatement } = require('../../helpers');

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
      this.templatePath('component/**/*'),
      this.destinationPath(componentName),
      { componentName, componentTag, moduleName }
    );
  }

  end() {
    const { componentName } = this.props;

    addImportStatement(this.destinationPath())(componentName);
  }
};
