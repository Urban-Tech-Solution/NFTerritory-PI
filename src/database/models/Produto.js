module.exports = (sequelize, dataTypes) => {
    const alias = 'Produto';

    const columns = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        preco: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        disponibilidade: {
            type: dataTypes.BOOLEAN,
            allowNull: false
        },
        categoria_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }

    const config = {
        tableName: 'produto',
        timestamps: false
    }

    const Produto = sequelize.define(alias, columns, config)

    Produto.associate = (models) => {
        Produto.belongsTo(models.CategoriaProduto, { foreignKey: 'categoria_id' })
    }

    return Produto
}