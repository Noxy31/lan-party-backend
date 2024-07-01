import express from 'express';
import { join } from 'path';

const app = express();
const port = 3000;


// app.use(express.static(join(__dirname, '../../lan-party-frontend/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(join(__dirname, '../../lan-party-frontend/dist', 'index.html'));
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});