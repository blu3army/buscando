import express from 'express';
import { router as pagesRouter } from './routes/pages-routes.js';
import { router as apiRouter } from './routes/api-routes.js';
import { adminRouter } from './routes/admin-routes.js';
const app = express();
const port = process.env.PORT || 8080;
const cfg = {
    dir: {
        views: 'src/front-end/views/',
        static: 'src/front-end/static/',
        frontJS: 'build/front-end/', //para poner JavaScript que se utilizará en el lado del cliente...así podemos hacerlo en TypeScript
    }
};
app.use(express.static(cfg.dir.static));
app.use(express.static(cfg.dir.frontJS));
app.set('view engine', 'ejs');
app.set('views', cfg.dir.views);
app.use('/', pagesRouter);
app.use('/api', apiRouter);
app.use('/admin', adminRouter);
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
