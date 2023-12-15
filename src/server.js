import express from 'express';

const app = express();
const PORT = Number(process.env.PORT) || 9000;

const start = async () => {
    return {string: 'Server Started'}
}

start();