const connection = require("./connection");

exports.query = (sql) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, null, (err, results) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
