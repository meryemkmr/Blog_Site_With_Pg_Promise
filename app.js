const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// public folder
app.use(express.static('public'));

//routes

app.use(require('./routes/blogs'))
app.use(require('./routes/editblogs'))



app.listen(3000, () => {
    console.log('listening on port 3000');
});