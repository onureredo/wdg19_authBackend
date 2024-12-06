import jwt from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

const verifyToken = asyncHandler(async (req, res, next) => {
  /*
    Check if token is present in request []
        - If not, return an Error []
        - If present:
            - verify Token using jwt.verify []
            - If invalid return an error []
            - If valid
                - create uid 
                - next();
*/

  // const token = req.headers['authorization'];
  const token = req.cookies.token;
  if (!token) throw new ErrorResponse('Please login', 401);

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.uid = decoded.uid;
  next();
});

export default verifyToken;
