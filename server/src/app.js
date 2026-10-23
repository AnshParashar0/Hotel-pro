import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import env from './config/env.js';
import routes from './routes/index.js';
import errorHandler from './middleware/error.js';
import { globalLimiter } from './middleware/rateLimit.js';

const app = express();

// Security headers
app.use(helmet());

// CORS – only allow the client origin
app.use(cors({ origin: env.CLIENT_URL, credentials: true }));

// Request logging (dev only)
if (env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parsers with size limit
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Cookie parser
app.use(cookieParser());

// Sanitize mongo queries
app.use(mongoSanitize());

// Prevent HTTP param pollution
app.use(hpp());

// Global rate limit
app.use(globalLimiter);

// Routes
app.use('/api', routes);

// Central error handler (must be last)
app.use(errorHandler);

export default app;
