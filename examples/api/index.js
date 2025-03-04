import express from 'express';
import promMiddleware from 'express-prometheus-middleware';

import { logger } from './logger.js';

const app = express();

const PORT = process.env.PORT || 9091;

app.use(promMiddleware({
  metricsPath: '/metrics',
  collectDefaultMetrics: true,
  requestDurationBuckets: [0.1, 0.5, 1, 1.5],
}));

app.get('/hello', (req, res) => {
  logger.info('Request to hello endpoint v2');
  const { name = 'Anon' } = req.query;
  res.json({ message: `Hello, ${name}!` });
});

app.listen(PORT, () => {
  console.log(`Example api is listening on http://localhost:${PORT}`);
});