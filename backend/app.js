import express  from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { env }   from "./src/settings/envs.js";

import { commentsRouter } from './src/routes/comment-routes.js';
import { postsRouter } from './src/routes/post-routes.js';
import { usersRouter } from "./src/routes/user-routes.js";
import { authValidation } from "./src/middlewares/authValidation.js";
import { startConnection } from "./src/settings/database.js";

const app = express();
//Middlewares for the routes that require authentication and authorization

app.use(cors());

app.use(helmet());

app.use(morgan('dev'));

app.use(express.json());

//app.use(authValidation);

app.use("/posts", authValidation, postsRouter);

app.use("/users", usersRouter);

app.use("/comments", commentsRouter);
//En preparación ...

// app.use("/likes", likesRouter);

// app.use("/dislikes", dislikesRouter);


app.listen(env.PORT, async() => {
  await startConnection
    console.log(`Server running on port ${env.PORT}`);
});

