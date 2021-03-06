var express = require('express');
var router = express.Router();
var pool = require( '../modules/pool' );

// GET Route
router.get( '/', ( req, res ) => {
    console.log( 'In GET request for entry' );
    const queryText = `SELECT * from feedback;`
    pool.query( queryText )
    .then(  ( result ) => {
        console.log( `Back from the database with ${ result }`);
        res.send( result.rows );
    }).catch( ( error ) => {
        console.log( `Error getting feedback: ${ error }` );
        res.sendStatus( 500 );
    });
})


router.post( '/', ( req, res ) => {
    console.log( 'In POST request for feedback' );
    let newEntry = req.body;

    const queryText = `INSERT INTO feedback ( feeling, understanding, support, comments ) VALUES ( $1, $2, $3, $4 );`;
    pool.query( queryText,
        [ newEntry.feelingReducer,
        newEntry.understandingReducer,
        newEntry.supportReducer,
        newEntry.commentsReducer ] )
    .then( ( result ) => {
        console.log( 'Successfully posted to database with', result );
        res.sendStatus( 201 );
    }).catch( ( error ) => {
        console.log( 'Error posting: ', error );
        res.sendStatus( 500 );
    })
})

router.delete( '/:id', ( req, res ) => {
    let id = req.params.id
    const queryText = `DELETE FROM feedback WHERE id=$1;`;
    pool.query( queryText, [ id ])
    .then( ( result ) => {
        console.log( 'Successfully deleted from database' );
        res.sendStatus( 200 );
    })
    .catch( ( error ) => {
        console.log( 'Error deleting: ', error );
        res.sendStatus( 500 );
    })
})

module.exports = router;