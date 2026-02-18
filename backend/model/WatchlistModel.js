const { model } = require("mongoose");

const { WatchlistSchema } = require("../schemas/WatchlistSchema");

const Watchlistmodel = new model("watchlist", WatchlistSchema);

module.exports = { Watchlistmodel };
