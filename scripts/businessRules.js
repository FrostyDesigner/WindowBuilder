// tutorial reference
// https://www.sitepoint.com/using-node-mysql-javascript-client/

const mysql = require('mysql');

// Create a connection to the database
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Synergy1',
    database: 'sitepoint'
});

con.connect((err) => {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

// Create a connection to the database
function getSome() {
    alert('Starting!!!!')
    alert('Continuing!!!!');

    // insert query against a database
    const author = { name: 'Power Puff Girl', city: 'Townsville' };
    con.query('Insert into authors set ?', author, (err, res) => {
        if (err) throw err;

        console.log('Last insert ID:', res.insertID);
    })

    alert('Database Updated!');
}


// sample MySQL query
con.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

// select all from table
con.query('Select * from authors', (err, rows) => {
    if (err) throw err,

        console.log('Data received from DB:');
    console.log(rows);
});

// insert query against a database
const author = { name: 'Tree Frog', city: 'Frogzville' };
con.query('Insert into authors set ?', author, (err, res) => {
    if (err) throw err;

    console.log('Last insert ID:', res.insertID);
})

// update query against a database
con.query(
    'UPDATE authors SET city = ? Where ID = ?',
    ['ToadTownz', 3],
    (err, result) => {
        if (err) throw err;

        console.log(`Changed ${result.changedRows} row(s)`);
    }
);

// delete row that matches criteria
con.query(
    // 'DELETE FROM authors WHERE id = ?', [5], (err, result) => {
    // delete by other property
    'DELETE FROM authors WHERE name = ?', ['Karolina Gawron'], (err, result) => {
        if (err) throw err;

        console.log(`Deleted ${result.affectedRows} row(s)`);
    }
);

// close connection
con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
});