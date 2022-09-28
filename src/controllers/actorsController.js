const db = require("../database/models");
module.exports = {
    list : (req , res) => {
        db.Actor.findAll().then((actors)=>{
            return res.render('actorsList',{actors})
        })
    },
    detail : (req,res) =>{
        db.Actor.findByPk(req.params.id)
        .then((actors) => res.render('actorsDetail', {actors}))
    }
}