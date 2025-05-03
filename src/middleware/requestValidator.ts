import {Request, Response, NextFunction} from 'express';

const validateContentType = (req: Request, res: Response, next: NextFunction) => {
    if(req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
        // Check if Content-Type is application/json
        // If not, return a 400 Bad Request response
        // and a message indicating the required Content-Type
        const contentType = req.headers['content-type'];
        if (!contentType || !contentType.includes('application/json')) {
            res.status(400).json({ error: 'Content-Type must be application/json' });
            return;
        }
    }
    next();
}

export default validateContentType;