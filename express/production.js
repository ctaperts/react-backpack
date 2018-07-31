const express = require('express');
const path = require('path');
const app = express();
const ClientStatsPath = path.join(__dirname, './../dist/stats.json');
const ServerRendererPath = path.join(__dirname, './../dist/server.js');
const ServerRenderer = require(ServerRendererPath).default;
const Stats = require(ClientStatsPath);

app.get('/client.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use('/', express.static(path.join(__dirname, '../dist')));
app.use('/robots.txt', express.static(path.join(__dirname, '../dist/static/robots.txt')));
app.use('/sitemap.xml', express.static(path.join(__dirname, '../dist/static/sitemap.xml')));

app.use(ServerRenderer(Stats));

const PORT = process.env.PORT || 3000;

app.listen(PORT, error => {
  if (error) {

    return console.error(error);

  } else {

    console.log(`Prod server http://localhost:${PORT}`);
  }
});
