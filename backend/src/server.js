const express = require('express');
const cors = require('cors');
const itemsRoutes = require('./api/items/items.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/items', itemsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
