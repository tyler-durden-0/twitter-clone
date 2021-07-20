import validator from 'express-validator'

export const registerValidations = [
    validator
        .body('email', 'Введите E-Mail')
        .isEmail()
        .withMessage('Неверный E-Mail')
        .isLength({min: 10, max: 40})
        .withMessage('Допустимое кол-во символов в почте от 10 до 40'),
    validator
        .body('fullname', 'Введите имя')
        .isString()
        .isLength({min: 2, max: 40})
        .withMessage('Допустимое кол-во символов в имени от 2 до 40'),
    validator
        .body('username', 'Укажите логин')
        .isString()
        .isLength({min: 2, max: 40})
        .withMessage('Допустимое кол-во символов в логине от 2 до 40'),
    validator
        .body('password', 'Укажите пароль')
        .isString()
        .isLength({min: 6})
        .withMessage('Минимальное длина пароля 6 символов'),
]