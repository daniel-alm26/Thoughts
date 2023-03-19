const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Tought = db.define('Tought', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
})

Tought.belongsTo(User) // Explicando: Um pensamento (Tought) pertence a um usuário (User).
User.hasMany(Tought) // Explicando: Um usuário (User) pode ter vários pensamentos (Tought).

module.exports = Tought
