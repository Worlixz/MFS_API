const validRole = ["admin", "membre", "editeur"]

module.exports = ( sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        u_email: {
            type: DataTypes.STRING,
            unique : {
              msg : "Cet email est déjà pris !"
            }
          },
        u_name: {
          type: DataTypes.STRING,
          unique : {
            msg : "Le nom est déjà pris."
          }
        },
        u_role:  {
            type: DataTypes.STRING,
            defaultValue: "membre",
            validate : {
                isTypesValid(value){
                    if(!validRole.includes(value)){
                        throw new Error("Le rôle ne correspond pas au rôle possible")
                    }
                }
            }
        },
        u_password: {
          type: DataTypes.STRING
        }
      })
}