import { Router, Request, Response } from "express";
import { userSchema } from "../utils/validations/joi";
import { registerValidationRules } from "../utils/validations/expressValidator";
import { validationResult } from "express-validator";

const router = Router()

// router validating data with joi;
router.post('/validate-with-joi', (req: Request, res: Response) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({success: false, message: "hey safee.. validation failed", error: error.details[0].message});
    }

    return res.send({success: true, message: "hey safee.. validation successfully completed"});
})

// router for validating data with express-validator;
// here we are using the validator as middleware;
router.post('/validate-with-ev', registerValidationRules, (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, message: "hey safee.. validation failed", errors: errors.array() });
    }

    res.send({success: true, message: "hey safee.. validation success"});
})


export default router