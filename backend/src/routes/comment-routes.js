import { Router } from 'express';

const appRouter = Router();

appRouter.use('/users', usersRouter);

appRouter.use('/posts', postsRouter);

export { appRouter };
