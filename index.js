const express = require('express');
const app = express();
const port = 3000;
const sampleData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json(sampleData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
