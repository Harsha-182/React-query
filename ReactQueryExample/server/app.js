import express from 'express';
import cors from 'cors';

import { films } from './data.js';
import { home, users, channels } from './home.js';
import { friend } from './friend.js';

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

app.get('/friend', (req, res) => {
	const friendList = friend();
	
	res.status(200).json({
		status:"success",
		data: friendList
	})
})

app.get('/user/:id', (req,res) => {
	const {id} = req.params;

	const result = users.find(user => {
		return user.id === id;
	})
	if(!result){
		return res.status(404).json({
			status:"fail",
			message:"user not found"
		})
	}
	res.status(200).json({
		status:"success",
		data: users
	})
})

app.get('/channel/:id', (req, res) => {
	const {id} = req.params;
	const result = channels.find((channel) => {
		return channel.id === id;
	})
	if(!result){
		return res.status(404).json({
			status:"fail",
			message:"channel not found"
		})
	}
	res.status(200).json({
		status:"success",
		data: result
	})
})

app.listen(7000, () => {
	console.log("server is runnnig on port 7000");
})