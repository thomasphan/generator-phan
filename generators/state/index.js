'use strict';

const { cond, get, kebabCase, pick, stubTrue } = require('lodash/fp');
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

    const optionsToProps = () => {
      this.props = pick(['moduleName', 'componentName'])(this.options);
    };

    const prompt = () =>
      this.prompt(prompts).then(props => {
        this.props = props;
      });

    return cond([
      [get('moduleName'), optionsToProps],
      [get('componentName'), optionsToProps],
      [stubTrue, prompt]
    ])(this.options);
  }

  writing() {
    const { componentName, moduleName } = this.props;
    const componentTag = kebabCase(componentName);

    if (this.options.dir) {
      this.destinationRoot(this.options.dir);
    }

    this.fs.copyTpl(
      this.templatePath('state/**/*'),
      this.destinationPath(componentName),
      { componentName, componentTag, moduleName }
    );

    this.fs.copyTpl(
      this.templatePath('../../component/templates/component/**/*'),
      this.destinationPath(`${componentName}/component`),
      { componentName, componentTag, moduleName }
    );
  }

  end() {
    const { componentName } = this.props;

    addImportStatement(this.destinationPath())(componentName);
  }
};
