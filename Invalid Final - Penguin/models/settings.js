// We grab Schema and model from mongoose library.
const { Schema, model } = require("mongoose");

// We declare new schema.
const guildSettingSchema = new Schema({
  gid: { type: String },
  prefix: { type: String, default: "!" },
  dark: { type: String, default: "◾𝐃𝐚𝐫𝐤-𝐂𝐡𝐚𝐭" },
  insta: { type: String, default: "📷𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦" },
  suggestions: { type: String, default: "👊𝐒𝐮𝐠𝐠𝐞𝐬𝐭𝐢𝐨𝐧𝐬" },
  vehiclesuggest: { type: String, default: "🚙𝐕𝐞𝐡𝐢𝐜𝐥𝐞-𝐒𝐮𝐠𝐠𝐞𝐬𝐭𝐢𝐨𝐧𝐬" },
  polls: { type: String, default: "🔍𝐏𝐨𝐥𝐥𝐬" }
});

// We export it as a mongoose model.
module.exports = model("guild_settings", guildSettingSchema);