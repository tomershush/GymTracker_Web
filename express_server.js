const express = require('express');
const path = require('path');
const app = express();
const port = 8000;


const webListener = function (req, res){
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
}

const newExcFromUser = (req, res) => {
    console.log(req.body.exc_name + "" + req.body.exc_reps);
    res.redirect('/');
}

const serverLoop = () => {
    console.log(`Server listening on port ${port}`);
    console.log(path.join(__dirname, 'public/html/index.html'));
}


app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', webListener);
app.post('/addExc', newExcFromUser);


app.listen(port, serverLoop);