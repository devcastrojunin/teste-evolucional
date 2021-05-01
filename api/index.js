import express from 'express';
import { promises as fs } from 'fs';
import winston from 'winston';
import cors from 'cors';

const { readFile, writeFile } = fs;