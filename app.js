import express from 'express';
import AdminJS from 'adminjs';
import { buildAuthenticatedRouter } from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';
import provider from './admin/auth-provider.js';
import options from './admin/options.js';
import initializeDb from './db/index.js';
import adminDashboardRoutes from './routes/admin.js';
import * as url from 'url';
import path from 'path';
const port = process.env.PORT || 3000;
AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
});
const start = async () => {
    const app = express();
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
    const publicPath = path.join(__dirname, '../public');
    app.use('/public', express.static(publicPath));
    await initializeDb();
    app.use('/admin/api', adminDashboardRoutes);
    const admin = new AdminJS(options);
    app.get('/', (req, res) => {
        res.redirect('/admin');
    });
    if (process.env.NODE_ENV === 'production') {
        await admin.initialize();
    }
    else {
        admin.watch();
    }
    const adminRouter = buildAuthenticatedRouter(admin, {
        cookiePassword: process.env.COOKIE_SECRET,
        cookieName: 'adminjs',
        provider,
    }, null, {
        secret: process.env.COOKIE_SECRET,
        saveUninitialized: true,
        resave: true,
    });
    app.use(admin.options.rootPath, adminRouter);
    app.listen(port, () => {
        console.log(`✅ AdminJS running at http://localhost:${port}${admin.options.rootPath}`);
    });
};
start();
