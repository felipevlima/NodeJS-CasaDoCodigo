const { check } = require('express-validator')

class Livro {
    static validacoes() {
        return [
            check('titulo').isLength({ min: 5 }).withMessage('O titulo precisa ter no minimo 5 caracteres!'), 
            check('preco').isCurrency().withMessage('O preço precisa ter um valor monetario valido!')
        ]
    }
}

module.exports = Livro