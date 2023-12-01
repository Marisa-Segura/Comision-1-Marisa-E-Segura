
import { body } from "express-validator";

export const createPostValidation = [
  body("title")
    .notEmpty()
    .withMessage("El título es requerido.")
    .isString()
    .withMessage("El título debe ser un string")
    .isLength({ min: 2 })
    .withMessage("El título debe tener al menos 2 caracteres"),
  body("desc")
    .notEmpty()
    .withMessage("La descripción es requerida.")
    .isString()
    .withMessage("La descripción debe ser un string")
    .isLength({ min: 12 })
    .withMessage("La descripción debe tener al menos 12 caracteres")
    .isLength({ max: 1000 })
    .withMessage("La descripción debe tener menos de 1000 caracteres"),
  body("author")
    .notEmpty()
    .withMessage("El autor es requerido.")
    .isString()
    .withMessage("El autor debe ser un string")
    .isLength({ min: 2 })
    .withMessage("El nombre del autor debe tener al menos 2 caracteres"),
  body("comments")
    .isEmpty()
    .withMessage("El comentario no puede estar vacio")
    .isLength({ min: 2 })
    .withMessage("Los comentarios deben tener al menos 2 caracteres"),
  body("image")
    .notEmpty()
    .withMessage("La image es requerida.")
    .isURL()
    .withMessage("La imagen deber ser una url."),
  body("date")
    .notEmpty()
    .withMessage("La fecha es requerida.")
    .isNumeric()
    .withMessage("La fecha debe estar expresada en número.")
    .isDate()
    .withMessage("La fecha debe ser una fecha válida"),

];
