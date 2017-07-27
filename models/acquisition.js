'use strict'

const model = require('./base').model

const SQL = {
<<<<<<< HEAD
<<<<<<< HEAD
    GET: 'SELECT title, location FROM  acquisition '
}
=======
=======
>>>>>>> 5d321b8f37342db9fc600d5169e253aebce1ad35
    GET: 'SELECT  a.title, p.location, o.first_name, o.last_name, r.amount ' +
         'FROM acquisitions as a ' +  
         'INNER JOIN owner AS o ON a.id = o.accession_id ' +
         'INNER JOIN property AS p ON o.id = p.owner_id ' +
         'INNER JOIN receipt AS r ON o.id = r.owner_id ' 
}	
<<<<<<< HEAD
>>>>>>> 5d321b8f37342db9fc600d5169e253aebce1ad35
=======
>>>>>>> 5d321b8f37342db9fc600d5169e253aebce1ad35

exports.index = (cb)=>{
  model.query(SQL.GET, (err, acquisitions)=>{
    if(err) return cb(err)
    cb(null, acquisitions)
 	})
}

