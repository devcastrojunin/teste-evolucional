import express from 'express';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileDegrees)); 
        res.send(data);
    } catch (err) {
        next(err);
    }
});

export default router;