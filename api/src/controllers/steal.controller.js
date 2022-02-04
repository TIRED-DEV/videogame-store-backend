// import { steal } from '../service/apiExternal.service.js';
// import { connection } from '../db/mysql.js';
// import fetch from 'node-fetch';

// const get = (req, res) => {
//   fetch('http://80.34.34.150:8905/api/games')
//     .then((list) => list.json())
//     .then((list) => {
//       list.forEach((e) => {
//         let query = `INSERT INTO games (title) VALUES ("${e}");`;
//         console.log(query);
//         connection.query(query, (err) => {
//           if (err) {
//             res.status(500).send(err);
//           }
//         });
//       });
//     })
//     .catch((err) => res.status(500).send(err));
// };
// const joke = (req, res) => {
//   fetch('http://80.34.34.150:8905/api/joke')
//     .then((list) => list.text)
//     .then((list) => res.status(200).send('That was bad'))
//     .catch((err) => res.status(500).send(err));
// };
// export { get, joke };
