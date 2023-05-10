const cours = [
    {
      "u_email": process.env.USER_EMAIL_ADMIN,
      "u_name": process.env.USER_NAME_ADMIN,
      "u_role": process.env.USER_ROLE_ADMIN,
      "u_statut": process.env.USER_STATUT_ADMIN,
      "u_password": process.env.USER_PWD_ADMIN
    },
    {
      "u_email": process.env.USER_EMAIL_EDITOR,
      "u_name": process.env.USER_NAME_EDITOR,
      "u_role": process.env.USER_ROLE_EDITOR,
      "u_statut": process.env.USER_STATUT_EDITOR,
      "u_password": process.env.USER_PWD_EDITOR
    },
    {
      "u_email": process.env.USER_EMAIL_PREMIUM,
      "u_name": process.env.USER_NAME_PREMIUM,
      "u_role": process.env.USER_ROLE_PREMIUM,
      "u_statut": process.env.USER_STATUT_PREMIUM,
      "u_password": process.env.USER_PWD_PREMIUM
    },
    {
      "u_email": process.env.USER_EMAIL_MEMBRE,
      "u_name": process.env.USER_NAME_MEMBRE,
      "u_role": process.env.USER_ROLE_MEMBRE,
      "u_statut": process.env.USER_STATUT_MEMBRE,
      "u_password": process.env.USER_PWD_MEMBRE
    },
    
  ]
  
    module.exports = cours