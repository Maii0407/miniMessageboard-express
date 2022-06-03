const express = require( 'express' );
const router = express.Router();

router.get( '/', ( req, res, next ) => {
  res.render( 'form', { title: 'This is Form' } );
});

module.exports = router;