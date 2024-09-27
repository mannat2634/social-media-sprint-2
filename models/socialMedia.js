const mongoose = require('mongoose');

// Define schema for social media links
const SocialMediaSchema = new mongoose.Schema({
    platform: { type: String, required: true },
    accountLink: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

// Create model
const SocialMedia = mongoose.model('SocialMedia', SocialMediaSchema);

module.exports = SocialMedia;
