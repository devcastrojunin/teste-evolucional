import express from 'express';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

const router = express.Router();



router.post('/', async (req, res, next) => {
    try {
        const studentList = req.body;
        const data = JSON.parse(await readFile(global.fileStudents));
        const currentData = Object.assign([], data);
        const mergeDataList = currentData.concat(studentList);
        await writeFile(global.fileStudents, JSON.stringify(mergeDataList));
        res.send({ message: "Alunos adicionados com sucesso!" });

    } catch (err) {
        next(err);
    }
});



router.get('/', async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileStudents));
        res.send(data);
    } catch (err) {
        next(err);
    }
});

router.post('/students-by-filter', async (req, res, next) => {
    try {
        const { degreeId, classId } = req.body;
        const students = JSON.parse(await readFile(global.fileStudents));
        let data = null;

        if (classId !== '' && degreeId == '')
            data = students
                .filter(item => item.classId == classId)
        else if (degreeId !== '' && classId == '')
            data = students
                .filter(item => item.degreeId == degreeId)
        else if (classId !== '' && degreeId !== '')
            data = students
                .filter(item => item.classId == classId && item.degreeId == degreeId)
        else
            data = students;
            
        res.send(data);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileStudents));
        let student = data.find(item => item.id === parseInt(req.params.id));
        res.send(student);
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

        res.send({ message: "Dados do Aluno atualizados com sucesso!" });
    } catch (err) {
        next(err);
    }
});

export default router;