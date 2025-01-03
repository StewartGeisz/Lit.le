
// src/controllers/BookController.ts
import { Request, Response } from 'express';
import Book from '../models/Book';

const BookController = {
    getAllBooks: async (req: Request, res: Response) => {
        try {
            const books = await Book.find();
            res.json(books);
        } catch (err) {
            res.status(500).send('Server error');
        }
    },
    addBook: async (req: Request, res: Response) => {
        try {
            const { title, author, year, passage } = req.body;
            const newBook = new Book({ title, author, year, passage });
            await newBook.save();
            res.status(201).json(newBook);
        } catch (err) {
            res.status(400).send('Error saving book');
        }
    }
};

export default BookController;
