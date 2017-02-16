const express = require('express');

const app = express();

app.use('/static', express.static(`${process.cwd()}/build/static`));

app.get('*', (req, res) => {
  res.sendFile(`${process.cwd()}/build/index.html`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Express server listening on port ${process.env.PORT || 3000}`);
});
