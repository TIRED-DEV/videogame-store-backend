import formidable from 'formidable';
import fs from 'fs';

import path from 'path';
const appDir = path.dirname('../');

const upload = (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    const file = files.file;
    const oldpath = file.filepath;
    const fileNameSplitted = file.originalFilename.split('.');
    const newName =
      req.user.email + '.' + fileNameSplitted[fileNameSplitted.length - 1];
    const newpath = appDir + '/uploads/images/users/' + newName;
    fs.rename(oldpath, newpath, (err) => {
      if (err) throw err;
      else {
        res.send({ file: newName, original: file.originalFilename });
        res.end();
      }
    });
  });
};

export { upload };
