module.exports = (sequelize, dataTypes) => {
    const alias = 'Usuario';

    const collumns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_completo: {
            type: dataTypes.STRING,
            allowNull: true
        },
        nome_de_usuario: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: dataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: dataTypes.STRING,
            allowNull: true,
            unique: true
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        CPF: {
            type: dataTypes.STRING,
            allowNull: true,
            unique: true
        },
        site: {
            type: dataTypes.STRING,
            allowNull: true
        },
        admin: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        
    }

    const config = {
        tableName: 'usuario',
        timestamps: false
    }

    const Usuario = sequelize.define(alias, collumns, config)

    Usuario.associate = (models) => {
        Usuario.hasMany(models.PagamentoUsuario, { foreignKey: 'usuario_id', as: 'usuario' });
      }
    
      return Usuario
}