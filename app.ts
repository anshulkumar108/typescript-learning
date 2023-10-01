const express = require('express');
import * as bodyParser from 'body-parser';

import todoRoutes from './routes/todos';

const app = express();

app.use(bodyParser.json()); 

app.use(todoRoutes);

app.listen(2000);