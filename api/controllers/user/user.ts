import express, { Request, Response } from 'express';
import { createUser, selectUserByUsername } from '../../../db/queries/user'
import { authenticate, hashPassword, verifyPassword } from '../../../util/authentication';

const router = express.Router();

router.get('/', async(request: Request, response: Response) => {
	return response.status(200).send('/user - SUCCESS');
});

router.post('/login', async(request: Request, response: Response) => {
	const { body } = request;
	const { username, password } = body;
	const user = await selectUserByUsername(username);

	if (!user) {
		return response.status(401);
	}

	const { password: hashedPassword } = user;	
	const validatedPassword = verifyPassword(password, hashedPassword)

	if (!validatedPassword) {
		return response.status(401);
	}
	
	const authToken = authenticate(user.id, username, hashedPassword)

	return response.status(200).send({
		id: user.id,
		username: user.username,
		authToken
	})
});

router.post('/create', async(request: Request, response: Response) => {
	const { body } = request;
	const { username, password } = body;
	const user = await selectUserByUsername(username);

	if (user) {
		return response.status(403).send({
			ERROR_STATE: 'DUPLICATE_USERNAME'
		})
	}

	const hashedPassword = await hashPassword(password);
	const newUser = await createUser({
		username,
		password: hashedPassword
	});
	const authToken = authenticate(newUser.id, username, password)

	return response.status(200).send({
		id: newUser.id,
		username: newUser.username,
		authToken
	});
});

export default router;