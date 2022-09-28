const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    db.Movie.findAll().then((movies) => {
      return res.render('moviesList',{movies});
    })
        
  },
  new: (req, res) => {
    db.Movie.findAll({
      order : [
        ['release_date', 'DESC'],
      ]
    })
      .then(movies => res.render('newestMovies',{movies}))
  },
  recomended: (req, res) => {
    db.Movie.findAll({order : [['release_date', 'ASC']], limit : 5})
    .then(movies => res.render('recommendedMovies',{movies}))
  },
  detail: (req, res) => {
    db.Movie.findByPk(req.params.id)
      .then(movie => res.render('moviesDetail', {movie}))
      .catch(error => console.log(error))
  },
};
