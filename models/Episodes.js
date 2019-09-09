const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EpisodeSchema = new Schema({
  title_serie: String,
  title_episode: String,
  saison: Number,
  episode: Number,
  rating: Number
});

const Episode = mongoose.model("Episode", EpisodeSchema);
module.exports = Episode;
