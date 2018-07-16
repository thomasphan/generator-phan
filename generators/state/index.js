'use strict';

const { kebabCase } = require('lodash');
const fp = require('lodash/fp');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const fse = require('fs-extra');
const path = require('path');

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

    const { cond, get, pick, stubTrue } = fp;

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

    const indexPath = () => path.join(this.destinationPath(), 'index.ts');

    fse.appendFile(indexPath(), `import './${componentName}';\r\n`, err =>
      console.log(err || '...')
    );
  }

  install() {}
};
