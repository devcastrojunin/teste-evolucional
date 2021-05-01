import express from 'express';
import { promises as fs } from 'fs';
import winston from 'winston';
import cors from 'cors';
import studentsRouter from './routes/students.js';
import degreesRouter from './routes/degrees.js';
import classesRouter from './routes/classes.js';

const { readFile, writeFile } = fs;

global.fileStudents = "files/students.js";
global.fileDegrees = "files/degrees.js";
global.fileClasses = "files/classes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use('/students', studentsRouter);
app.use('/degrees', degreesRouter);
app.use('/classes', classesRouter);

app.listen(3000, async () => {
    console.log('API Started');
});