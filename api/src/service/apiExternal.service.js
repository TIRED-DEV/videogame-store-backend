import { connection } from '../db/mysql.js';

const steal = async () => {
  let response = await fetch('http://80.34.34.150:8905/api/games');
  if (response.statusCode === 200) {
    let list = response.json();
    list.forEach((e) => {
      let query = `INSERT INTO games (title) VALUES ('${e}');`;
      connection.query(query, (err) => {
        if (err) {
          return err;
        } else {
          return true;
        }
      });
    });
  } else {
    return `Error-HTTP ${response.status}`;
  }
};

export { steal };
