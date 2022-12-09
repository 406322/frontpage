import express from 'express';

import logger from '../logger.js';
// Import manifests
import preview from '../views/preview.view.js';
import manifest from '../manifests/manifests.js';

// Import Views

// Initiate Router
const router = express.Router();

// Set up routes
router.get(
  '/manifest',
  (req, res) => {
    logger.info('Request /manifest route');
    return res.json(manifest);
  }
);

router.get('/component', (req, res) => {
  const publication = req.query.publication
  console.log(publication)
  logger.info('Request /component route');
  res.type('text/html');
  res.end(`<amedia-frontpage param-publication="${publication}"></amedia-frontpage>`);
  // res.end(`<amedia-frontpage param-publication="${publication}" id="teasers"></amedia-frontpage>`);
});


router.get('/preview', (req, res) => {
  const publication = req.query.publication
  logger.info('Request /preview route');
  res.type('text/html');

  const html = preview({ publication: publication });
  res.end(html);
});

// Legg inn

// Export application
export default router;
