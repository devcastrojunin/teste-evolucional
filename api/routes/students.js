import express from 'express';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

const router = express.Router();

const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

router.post('/', async (req, res, next) => {
    try {
        /*
            Fazer todo esse processo no front componente, pegando o ultimo id da lista retornada no front.
        */
        let classIdList = [1, 2, 3, 4, 5, 6];
        let degreeIdList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        let ra = getRandom(1, 50000);
        let classId = classIdList[Math.floor(Math.random() * classIdList.length)];
        let degreeId = degreeIdList[Math.floor(Math.random() * degreeIdList.length)];
        let student = req.body;

        const data = JSON.parse(await readFile(global.fileStudents));
        for (let index = 0; index < 301; index++) {
            setTimeout(() => {
                let lastStudent = data.slice(-1);
                student = {
                    id: lastStudent[0].id + 1,
                    ra,
                    name: `Nome do aluno ${lastStudent[0].id + 1}`,
                    degreeId,
                    classId
                }
                data.push(student);
            }, 500);
            await writeFile(global.fileStudents, JSON.stringify(data));
            console.log('index: ', index);

        }
        console.log('index: ', data.length);
        res.send(student);

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