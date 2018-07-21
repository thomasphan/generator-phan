'use strict';

const cheerio = require('cheerio');
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
    const $ = cheerio.load(fse.readFileSync(this.destinationPath('public/index.html')));

    $('body').attr('layout', 'column');

    $('body').prepend('<div ui-view="" flex layout="column"></div>');

    $('body p').remove();

    // Remove jQuery
    $('body script')
      .eq(1)
      .remove();
    $('body script')
      .eq(1)
      .remove();

    fse.outputFile(this.destinationPath('public/index.html'), $.html());

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
