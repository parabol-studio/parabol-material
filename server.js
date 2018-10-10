/* Node modules */
const express = require('express')
const path = require('path')
const app = express();

/* Middleware */
app.use(express.static(path.join(__dirname, 'dist')))

app.listen(8081, () => {
  console.log(`Node server running on port 8081`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, `dist/index.html`));
});