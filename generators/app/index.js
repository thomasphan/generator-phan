'use strict';

const Generator = require('yeoman-generator');
const fse = require('fs-extra');

module.exports = class extends Generator {
  writing() {
    fse.removeSync(this.templatePath('./node_modules'));

    this.fs.copyTpl(
      this.templatePath('../../../node_modules/html5-boilerplate/dist/**/*'),
      this.destinationPath('public')
    );

    this.fs.copyTpl(this.templatePath('**/*'), this.destinationPath());

    this.installDependencies({ bower: false });
  }

  end() {
    const moduleName = 'app';
    const componentName = 'landing';
    const dir = 'src';

    this.composeWith(require.resolve('../state'), {
      moduleName,
      componentName,
      dir
    });
  }
};
