import express from 'express';
import cors from 'cors';
import studentsRouter from './routes/students.js';
import degreesRouter from './routes/degrees.js';
import classesRouter from './routes/classes.js';
import relationshipsRouter from './routes/relationships.js';
import teacherRouter from './routes/teachers.js';
import matterRouter from './routes/matters.js';

global.fileStudents = "files/students.js";
global.fileDegrees = "files/degrees.js";
global.fileClasses = "files/classes.js";
global.fileRelationships = "files/relationships.js";
global.fileTeacher = "files/teachers.js";
global.fileMatters = "files/matters.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use('/students', studentsRouter);
app.use('/students-by-filter', studentsRouter);
app.use('/degrees', degreesRouter);
app.use('/classes', classesRouter);
app.use('/relationships', relationshipsRouter);
app.use('/teachers', teacherRouter);
app.use('/matters', matterRouter);

app.listen(3000, async () => {
    console.log('API Started');
});