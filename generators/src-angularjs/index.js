'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(this.templatePath(), this.destinationPath());
  }

  end() {
    const moduleName = 'app';
    const componentName = 'landing';
    const dir = 'src';

    this.composeWith(require.resolve('../state'), { moduleName, componentName, dir });
  }
};
