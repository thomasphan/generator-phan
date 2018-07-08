'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      this.templatePath('../../../node_modules/html5-boilerplate/dist/**/*'),
      this.destinationPath('public')
    );
    this.fs.copyTpl(this.templatePath('**/*'), this.destinationPath());
  }
};
