const SocialMedia = require('../models/socialMedia');

// Fetch and display all social media links
exports.getLinks = async (req, res) => {
    try {
        const links = await SocialMedia.find({}); // Fetch all links from the database
        res.render('linksList', { links }); // Render the view with fetched links
    } catch (error) {
        res.status(500).send('Error fetching social media links');
    }
};

// Add a new social media link
exports.addLink = async (req, res) => {
    const { platform, accountLink } = req.body;
    try {
        const newLink = new SocialMedia({
            platform,
            accountLink,
            userId: req.user._id // Assuming the user is authenticated
        });
        await newLink.save(); // Save to the database
        res.redirect('/social-media-links'); // Redirect to the list page
    } catch (error) {
        res.status(500).send('Error adding social media link');
    }
};

// Update an existing social media link
exports.updateLink = async (req, res) => {
    const { id } = req.params;
    const { platform, accountLink } = req.body;
    try {
        await SocialMedia.findByIdAndUpdate(id, { platform, accountLink }); // Update link in the database
        res.redirect('/social-media-links'); // Redirect to the list page
    } catch (error) {
        res.status(500).send('Error updating social media link');
    }
};
