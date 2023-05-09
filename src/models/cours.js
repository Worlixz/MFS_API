const { DataTypes } = require("sequelize");

module.exports = ( sequelize, DataTypes) => {
    return sequelize.define('Cours', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg : 'Ce titre est déjà pris'
            },
            validate : {
                notNull : { msg : 'Un titre est obligatoire'},
                notEmpty: { msg : 'Le nom ne peut pas être vide' }
            }
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: { msg : 'Ce slug est déjà pris'},
            validate: {
                notNull: { msg : 'Le slug est obligatoire'},
                notEmpty: { msg : 'Le slug ne peut pas être null'}
            }
        },
        resume: {
            type: DataTypes.STRING,
            allowNull: false,
            validate : {
                notNull : { msg : 'Un résumé est obligatoire'},
                notEmpty: { msg : 'Le résumé ne peut pas être vide' }
            }
        },
        editor: {
            type: DataTypes.JSON,
            allowNull: false,
            validate: {
                notNull: { msg : 'Le contenu du cours ne peut pas être nul'},
                notEmpty: { msg : 'Le contenu du cours ne peut pas être vide'}
            }
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt : { msg : 'La durée doit être uniquement un entier'},
                max: {
                    args: [999],
                    msg : "La durée ne peut pas dépasser 999 minutes"
                },
                min: {
                    args: [0],
                    msg: "La durée ne peut être inférieur à 0 minute"
                },
                notNull: { msg : "La durée doit être un entier positif"}
            }
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate : {
                notNull : { msg : 'Un auteur est obligatoire'},
                notEmpty: { msg : "L'auteur ne peut pas être vide" }
            }
        },
        premium: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            validate: {
                notNull: { msg: "un statut est obligatoire"},
                notEmpty: { msg: "un statut ne peut pas être vide"}
            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: { msg: "Une date est obligatoire"},
                notEmpty: { msg: "Une date ne peut pas être vide"}
            }
        }, 
        picture_SD: {
            type: DataTypes.STRING,
            allowNull: false,
            /* validate : {
              isUrl : { msg : "Utiliser uniquement une Url valide pour l'image"},
              notNull : { msg : "L'image est une propriété requise"}
            } */
          },
        picture_HD: {
            type: DataTypes.STRING,
            allowNull: false,
            /* validate : {
              isUrl : { msg : "Utiliser uniquement une Url valide pour l'image"},
              notNull : { msg : "L'image est une propriété requise"}
            } */
          }
    })
}