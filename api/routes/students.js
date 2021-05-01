import express from 'express';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileStudents)); 
        res.send(data);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        let student = req.body;
        const data = JSON.parse(await readFile(global.fileStudents));
        const index = data.findIndex(item => item.id === student.id);
        data[index] = student;
        
        await writeFile(global.fileStudents, JSON.stringify(data));
        
        res.send(data);
    } catch (err) {
        next(err);
    }
});

export default router;