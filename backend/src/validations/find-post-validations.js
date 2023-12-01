import { body, param } from "express-validator";

export const find-post-validation = [
  param("postId")
   .isString()
   .withMessage("La id debe ser un string de tipo UUIDv4"),
   body("title")
   .optional()
   //.isString()
   //.withMessage("El título debe ser un string")
  .isString()
  .withMessage("El título debe ser un string"),
  body("desc")
  .optional()
  //.isString()
  //.withMessage("La descripcion debe ser un string")
 .isString()
 .withMessage("La descripcion debe ser un string"),
  body("image").optional().isURL().withMessage("La imagen deber ser una url."),
  body("likes").optional().isInt().withMessage("El numero de likes debe ser un numero entero"),
  body("comments").optional().isInt().withMessage("El numero de comentarios debe ser un numero entero"),
  body("likes").optional().isInt().withMessage("El numero de likes debe ser un numero entero"),
  body("likes
  .optional()
  //.isString()
  //.withMessage("El título debe ser un string")
  //.isString()
  //.withMessage("El título debe ser un string"),
  // body("desc")
  //.optional()
  //.isString()
  //.withMessage("La descripcion debe ser un string")
  //.isString()
  //.withMessage("La descripcion debe ser un string"),
  // body("image").optional().isURL().withMessage("La imagen deber ser una url.")
  // body("likes").optional().isInt().withMessage("El numero de likes debe ser un numero entero"),
  // body("comments").optional().isInt().withMessage("El numero de comentarios debe ser un numero entero"),
  // body("likes").optional().isInt().withMessage("El numero de likes debe ser un numero entero"),
  // body("likes
 .optional()
 .isString()

 //.withMessage("El título debe ser un string")
 //.isString()
 //.withMessage("El título debe ser un string"),
  // body("desc")
  //.optional()
  //.isString()
  //.withMessage("La descripcion debe ser un string")
  //.isString()
  //.withMessage("La descripcion debe ser un string"),
  // body("image").optional().isURL().withMessage("La imagen deber ser una url.")
  // body("likes").optional().isInt().withMessage("El numero de likes debe ser un numero entero"),
  // body("comments").optional().isInt().withMessage("El numero de comentarios debe ser un numero entero"),
  // body("likes").optional().isInt().withMessage("El numero de likes debe ser un numero entero"),
  // body("likes
  //.optional()
  //.isString()
  //.withMessage("El título debe ser un string")
  //.isString()
  //.withMessage("El título debe ser un string"),
  // body("desc")
  //.optional()
  //.isString()
  //.withMessage("La descripcion debe ser un string")
  //.isString()
  //.withMessage("La descripcion debe ser un string"),
  // body("image").optional().isURL().withMessage("La imagen deber ser una url.")
  // body("likes").optional().isInt().withMessage("El numero de likes debe ser un numero entero"),
  // body("comments").optional().isInt().withMessage("El numero de comentarios debe ser un numero entero"),
  // body("likes").optional().isInt().withMessage("El numero de likes debe ser un numero entero"),
  // body("likes
  
]