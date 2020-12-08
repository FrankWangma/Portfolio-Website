import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';
import Project from './models/project';

// and create our instances
const app = express();
const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
const API_PORT = process.env.API_PORT || 3001;

mongoose.connect(getSecret('dbUri'), {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// now we can set the route path & initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

router.get('/projects', (req, res) => {
    Project.find((err, projects) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: projects });
    });
  });
  
router.post('/projects', (req, res) => {
    const project = new Project();
    // body parser lets us use the req.body
    const { projectName, description } = req.body;
    if (!projectName || !description) {
        // we should throw an error. we can do this check on the front end
        return res.json({
        success: false,
        error: 'You must provide an projectName and description'
        });
    }

    project.projectName = projectName;
    project.description = description;
    project.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// Use our router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));