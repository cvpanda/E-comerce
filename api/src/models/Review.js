

const Review = ( Sequelize , S) => {

    const Rev= Sequelize.define('review',{
        raiting:{
            type: S.INTEGER,
            allowNull: true,
        },
        comentario:{
            type: S.TEXT,
            allowNull: true,
        },
    },{timestamps : false}
    )

    return Rev
}

module.exports=Review