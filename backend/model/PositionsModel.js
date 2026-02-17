const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = new model("positon", PositionsSchema);
module.exports = PositionsModel;
