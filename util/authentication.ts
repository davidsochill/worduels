import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY as string;

export async function hashPassword(password: string): Promise<string> {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        throw new Error('Error verifying password');
    }
}

export function authenticate(id: number, username: string, password: string): string {
    return jwt.sign({ id, username, password }, JWT_SECRET_KEY, {
      expiresIn: '30d',
    });
}