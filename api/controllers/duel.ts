import express, { Request, Response } from 'express';
import { createDuel, selectDuelById } from '../../db/queries/duel'
import { createDuelHasUser, selectDuelHasUserByRelation } from '../../db/queries/duelHasUser'
import { authenticateToken } from '../middleware/authenticateToken';

const router = express.Router();

router.get('/', authenticateToken, async(request: Request, response: Response) => {
	try {
		return response.status(200).send('/duel - SUCCESS');
	}
	catch (err) {
		console.log(err);
		return response.status(500);
	}
});

router.post('/create', authenticateToken, async(request: Request, response: Response) => {
	try {
		const { locals } = response;
		const { authDecoded } = locals;

		const { id: userId } = authDecoded;

		if (!userId) {
			return response.status(500);
		}
	
		const newDuel = await createDuel({
			ownerUserId: userId
		});

		const { id: duelId } = newDuel;

		await createDuelHasUser({
			duelId,
			userId
		})

		return response.status(200).send(newDuel);
	}
	catch (err) {
		console.log(err);
		return response.status(500);
	}
});

router.post('/join', authenticateToken, async(request: Request, response: Response) => {
	try {
		const { locals } = response;
		const { authDecoded } = locals;

		const { id: userId } = authDecoded;

		if (!userId) {
			return response.status(500);
		}

		const { body } = request;
		const { id: duelId } = body;
	
		const existingDuel = await selectDuelById(duelId);

		console.log(existingDuel, duelId)

		if (!existingDuel) {
			return response.status(403).send({
				ERROR_STATE: 'INVALID_REQUEST'
			});
		}

		const duplicateDuelHasUser = await selectDuelHasUserByRelation(userId, duelId);

		if (duplicateDuelHasUser) {
			return response.status(403).send({
				ERROR_STATE: 'DUPLICATE_RELATION'
			});
		}

		await createDuelHasUser({
			duelId,
			userId
		})

		return response.status(200).send(existingDuel);
	}
	catch (err) {
		console.log(err);
		return response.status(500);
	}
});

router.post('/get/personal', authenticateToken, async(request: Request, response: Response) => {
	try {
		
	}
	catch (err) {
		console.log(err);
		return response.status(500);
	}
});

export default router;