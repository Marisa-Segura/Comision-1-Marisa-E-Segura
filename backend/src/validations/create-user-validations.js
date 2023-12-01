import { body } from "express-validator";

export const createUserValidation = [
  body("username")
    .notEmpty()
    .withMessage("El título es requerido.")
    .isString()
    .withMessage("El título debe ser un string"),
  body("email")
    .notEmpty()
    .withMessage("El mail es requerido.")
    .isEmail
    .withMessage("El mail debe ser un mail válido")
    .isLength({ min: 9 })
    .withMessage("El mail debe tener al menos 9 caracteres entre ellos el @.")
    .isAlphanumeric()
    .withMessage("El mail debe ser alfanumérico.")
    .normalizeEmail()
    .withMessage("El mail debe ser un mail válido."),
  body("avatarURL")
    .notEmpty()
    .withMessage("La imagen es requerida.")
    .isString("Este dato debe ser un string")
    .isURL()
    .withMessage("La imagen deber ser una url."),
    body("password")
    .notEmpty()
    .withMessage("La password es requerida")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres."),
    
];