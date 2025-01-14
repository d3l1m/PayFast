import jwt from 'jsonwebtoken';
import express from 'express';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const verifyToken = (req:express.Request, res: express.Response) => {
    jwt.verify(req.cookies.access_token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req['user'] = decoded;
    });
};

const verifyAdmin = (req:express.Request, res: express.Response, next) => {
    verifyToken(req, res);
    if (req['user'].isAdmin) {
        next();
    } else {
        return res.status(403).json({ message: "Forbidden" });
    }
};

//verificar si un usuario es dueño de su método
const verifyTransaccion = async (req:express.Request, res: express.Response, next) => {
    verifyToken(req, res);
    if(req['user'].id === req.body.userid){
        try{
            const metodo = await prisma.metodopago.findUnique({
                where: {
                    id: parseInt(req.body.metodoId),
                }
            });
            if (req['user'].id == metodo['userId'] || req['user'].isAdmin) {
                next();
            } else {
                return res.status(403).json({ message: "This payment method is not yours" });
            }
        }catch(err){
            console.log(err);
            return res.status(403).json({ message: "Not payment method found with this id" });
        }
    }else{
        return res.status(403).json({ message: "Forbidden" });
    }
};

export { verifyAdmin, verifyTransaccion };
