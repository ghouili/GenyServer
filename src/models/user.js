const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  title: { type: String, require: true },
  nom: { type: String, require: true },
  prenom: { type: String, require: true },
  dateNaiss: { type: String, require: true },
  email: { type: String, require: true },
  tel: { type: String, require: true },
  telPrincipal: { type: String, require: true },
  telSecond: { type: String, require: true },
  codeSSocial: { type: String, require: true },
  codeGonventionnel: { type: String, require: true },
  ExistSignature: { type: String, require: true },
  signature: { type: String, require: true },
  echoParDefaut: { type: String, require: true },
  profil: { type: String, require: true },
  username: { type: String, require: true },
  password: { type: String, require: true },
  actif: { type: String, require: true },
  avatar: { type: String, require: true },
});

module.exports = mongoose.model("user", UserSchema);
