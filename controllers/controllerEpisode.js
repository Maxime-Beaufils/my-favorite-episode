const EpisodeSchema = require("../models/Episode.js");

module.exports.controller = app => {
  // ajouter un épisode
  app.post("/episode", (req, res) => {
    const newEpisode = new EpisodeSchema({
      title_serie: req.body.title_serie,
      title_episode: req.body.title_episode,
      saison: req.body.saison,
      episode: req.body.episode,
      rating: req.body.rating
    });
    newEpisode.save((error, episode) => {
      if (error) {
        console.log(error);
      }
      res.send(episode);
    });
  });
};
