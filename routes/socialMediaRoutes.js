const express = require('express');
const router = express.Router();
const socialMediaController = require('../controllers/socialMediaController');

// Route to display social media links
router.get('/social-media-links', socialMediaController.getLinks);

// Route to add a new link (POST request)
router.post('/social-media-links/add', socialMediaController.addLink);

// Route to update an existing link (PUT request)
router.put('/social-media-links/:id/update', socialMediaController.updateLink);

module.exports = router;
