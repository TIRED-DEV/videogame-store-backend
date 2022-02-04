import formidable from 'formidable';
import fs from 'fs';

import path from 'path';
const appDir = path.dirname('../');
const saveDir = '/uploads/images/users/';

const upload = (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    const file = files.file;
    const oldpath = file.filepath;
    const fileNameSplitted = file.originalFilename.split('.');
    const newName =
      req.user.email + '.' + fileNameSplitted[fileNameSplitted.length - 1];
    const newpath = appDir + saveDir + newName;
    //check folder
    if (!fs.existsSync(appDir + saveDir)) {
      fs.mkdirSync(appDir + saveDir, {
        recursive: true,
      });
    }

    fs.rename(oldpath, newpath, (err) => {
      if (err) throw err;
      else {
        res.send({ file: newName, original: file.originalFilename });
        res.end();
      }
    });
  });
};

const get = (req, res) => {
  const file = appDir + saveDir + req.params.file;
  fs.stat(file, (err, stats) => {
    if (err) {
      res.status(501).send(err.message);
    } else {
      res.download(file);
    }
  });
};

export { upload, get };
