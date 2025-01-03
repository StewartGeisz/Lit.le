// src/routes/books.ts
import express from 'express';
import Book from '../models/Book';

const router = express.Router();

// Get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Add a new book
router.post('/', async (req, res) => {
    try {
        const { title, author, year, passage } = req.body;
        const newBook = new Book({ title, author, year, passage });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).send('Error saving book');
    }
});

export default router;