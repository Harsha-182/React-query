import express from 'express';
import cors from 'cors';

import { films } from './data.js';
import { home } from './home.js';

const app = express();

app.use(cors());

app.get('/film', (req, res) => {
	const filmList = films();

	res.status(200).json({
		status:"success",
		data: filmList
	})
})

app.get('/home', (req, res) => {
	const homeList = home();

	res.status(200).json({
		status:"success",
		data: homeList
	})
})

app.get('/home/:id', (req, res) => {
  const { id } = req.params;
  const homeList = home();
  const item = homeList.find((film) => film.id === parseInt(id));

  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  res.json({ data: item });
});

app.listen(7000, () => {
	console.log("server is runnnig on port 7000");
})