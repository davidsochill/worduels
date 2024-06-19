import bcrypt from 'bcrypt';

// Function to hash password
export async function hashPassword(password: string): Promise<string> {
    try {
        const saltRounds = 10; // Recommended number of salt rounds
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

// Function to verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        throw new Error('Error verifying password');
    }
}