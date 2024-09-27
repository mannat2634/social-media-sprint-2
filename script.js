document.getElementById('socialMediaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const platform = document.getElementById('platform').value;
    const link = document.getElementById('link').value;

    app.set('view engine', 'ejs');

    
    if (platform && link) {
        alert(`Social Media Account Added:\nPlatform: ${platform}\nLink: ${link}`);
        document.getElementById('socialMediaForm').reset();
    } else {
        alert('Please fill out all fields');
    }
    const socialMediaRoutes = require('./routes/socialMediaRoutes');
app.use(socialMediaRoutes);
app.use(express.static('public'));


});
