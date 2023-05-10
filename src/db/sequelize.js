const { Sequelize, DataTypes } = require('sequelize')
const CoursModel = require('../models/cours')
const UserModel = require('../models/user')
const cours = require('./mock-cours')
const users = require('./mock-users')
const bcrypt = require('bcrypt')
require('dotenv').config()

const sequelize = new Sequelize(
    'ma_formation_sport',
    'root',
    '',
    {
        host: 'localhost',
        port: 3307,
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT-2'
        },
        logging: false
    }
)
/* 
sequelize.authenticate()
    .then(_ => console.log('connexion à la db ok'))
    .catch(err => console.error(`connexion impossible ${err}`)) */

const Cours = CoursModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)

const seqAuth = () => {
    return sequelize.authenticate()
            .then(_ => console.log('connexion à la db ok'))
            .catch(err => console.error(`connexion impossible ${err}`))
}

const initDb = () => {
    return sequelize.sync({force: true}).then(_ => {
        cours.map(cour => {
            Cours.create({
                id: cour.id,
                title: cour.title,
                slug: cour.slug,
                resume: cour.resume,
                editor: cour.editor,
                duration: cour.duration,
                author: cour.author,
                premium: cour.premium,
                date: cour.date,
                picture_SD: cour.picture_SD,
                picture_HD: cour.picture_HD
            })
        })
        users.map(user => {
            console.log(user)
            /* bcrypt.hash(user.u_password, 10)
            .then(hash => {
                User.create({
                    u_email: user.u_email,
                    u_name: user.u_name,
                    u_role: user.u_role,
                    u_statut: user.u_statut,
                    u_password: hash
                })
            }) */
        })
        /* bcrypt.hash(process.env.USER_PWD, 10)
        .then(hash => {
            User.create({u_name: process.env.USER_NAME, u_email: process.env.USER_EMAIL, u_password: hash, u_role: process.env.USER_ROLE})
        }) */
    })
}

module.exports = { seqAuth, initDb, Cours, User }