import { HTTP_STATUS } from "../constants/http-status.constant.js";
import { MESSAGES } from "../constants/message.constant.js";

export class UserController {
  getMe = (req, res, next) => {
    try {
      const getMe = req.user;

      return res.status(HTTP_STATUS.OK).json({
        status: HTTP_STATUS.OK,
        message: MESSAGES.USERS.READ_ME.SUCCEED,
        data: getMe,
      });
    } catch (error) {
      next(error);
    }
  };
}
