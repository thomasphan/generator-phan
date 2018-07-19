'use strict';

const fse = require('fs-extra');
const path = require('path');

const indexPath = destinationPath => path.join(destinationPath, 'index.ts');

module.exports.addImportStatement = destinationPath => componentName => {
  fse.appendFile(indexPath(destinationPath), `import './${componentName}';\r\n`, err =>
    console.log(err || '...')
  );
};
