import { Router } from "express";
import UserCollection from "../models"

const router = Router();

// in this file we will be using various methods from mongoose to alter the mongodb document;

// router for to create a new user
// here we will be using the "create" method from mongoose,
// this method creates a new document and saves it to the database;
router.post('/', async (req, res) => {
  try {
    const user = await UserCollection.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// router for to get all users
// here we will be using the "find" method from mongoose,
// this method retrieves documents that match the query criteria.
// we can pass the queries inside the an object as argument to the method;
router.get('/', async (req, res) => {
  try {
    const users = await UserCollection.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// router for to get a single user by matching the id;
// here we will be using the "findById" method from mongoose,
// this method finds a document by its _id field.
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserCollection.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// router for to update information of a specific user;
// here we will be using the "findByIdAndUpdate" method from mongoose,
// this method finds a document by its _id field and updates it with the provided data. 
// the { new: true } option returns the updated document.
router.put('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserCollection.findByIdAndUpdate(userId, req.body, { new: true });
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// to delete a user by ID
// here we will be using the "findByIdAndDelete" method from mongoose,
// this method finds a document by its _id field and deletes it.
router.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserCollection.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.status(200).send('User deleted');
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;