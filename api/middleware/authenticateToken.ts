import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;

export function authenticateToken(request: Request, response: Response, next: NextFunction) {
    try {
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
      
        if (!token) {
          return response.sendStatus(401);
        }
      
        jwt.verify(token, JWT_SECRET_KEY, (err, authDecoded) => {
          if (err) {
            return response.sendStatus(403);
          }
          response.locals.authDecoded = authDecoded;
          next();
        });
    }
    catch {
        return response.sendStatus(500);
    }
}