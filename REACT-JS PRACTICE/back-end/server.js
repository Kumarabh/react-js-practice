import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import authRoutes from './auth/auth.js';
import sideBarRoutes from './routes/side-bar.route.js';
import dealerWiseRoutes from './routes/dealer-wise-claim-chart.route.js';
import filterStatisticsRoutes from './routes/filter-statistics.route.js';
import filterWiseCategoriesRoutes from './routes/filter-wise-categories.route.js';
import modelWiseClaimChartRoutes from './routes/model-wise-claim-chart.route.js';
import userGridRoutes from './routes/user-grid.route.js';
import violationCategoriesCountRoutes from './routes/violation-categories-count.route.js';
import violationTrendOverTimeRoutes from './routes/violation-trend-over-time.route.js';
import connectDB from './config/db.js';
import helmet from 'helmet';
import morgan from 'morgan';
const app = express();
dotenv.config({path: './config/.env'});

// DB CONNECTION
// connectDB();

// MIDDLE WARES
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(cors());
app.use('/api/v1/users', userRoutes);``
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/side-bar', sideBarRoutes);
app.use('/api/v1/dealer-wise-claim-chart', dealerWiseRoutes);
app.use('/api/v1/filter-statistics', filterStatisticsRoutes);
app.use('/api/v1/filter-wise-categories', filterWiseCategoriesRoutes);
app.use('/api/v1/model-wise-claim-chart', modelWiseClaimChartRoutes);
app.use('/api/v1/user-grid', userGridRoutes);
app.use('/api/v1/violation-categories-count', violationCategoriesCountRoutes);
app.use('/api/v1/violation-trend-over-time', violationTrendOverTimeRoutes);

app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));