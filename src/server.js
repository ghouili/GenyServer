const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const UserRouter = require("./routes/user");
const CourrierRoute = require("./routes/courrier");
const PatientRoute = require("./routes/patient");
const AntecedentRoute = require("./routes/antecedents");
const RDVRoute = require("./routes/rdv");
const ConsultationRoute = require("./routes/consultation");
const GrossesseRoute = require("./routes/grossesse");
const EchoPelvienneRoute = require("./routes/consultationechopelvienne");
const ConsultationGynecologiqueRoute = require("./routes/consultationgynecologique");
const ConsultationColposcopieRoute = require("./routes/consultationcolposcopie");
const AdresseRoute = require("./routes/adresse");
const CompteRoute = require("./routes/compte");
const ProfileRoute = require("./routes/profile");
const ParamCompteRoute = require("./routes/parametrecompte");
const EtablissementRoute = require("./routes/etablissement");
const PraticienRoute = require("./routes/praticien");
const MyomeRoute = require("./routes/myome");
const ConsultationObstetriqueRoute = require("./routes/consultationobstetrique");
const InformationsConjointRoute = require("./routes/informationconjoint");
const DonnesFoetusRoute = require("./routes/donnesfoetus");
const EchoElevenRoute = require("./routes/ehoelevensa");
const BilanEndocrinienPMARoute = require("./routes/bilanendocrinienpma");
const TentativeHistoriquePMARoute = require("./routes/tentativehistoriquepma");
const SpermogrammePMARoute = require("./routes/spermogramme");
const InterrogatoirePMARoute = require("./routes/interrogatoirepma");
const TraitementPMARoute = require("./routes/traitementpma");
const TentativePMARoute = require("./routes/tentativepma");
const TraitementValeurPMARoute = require("./routes/traitementvaleurpma");
const ReglementsRoute = require("./routes/reglements");
const PrescriptionAlanyseBiologiqueRoute = require("./routes/prescriptionanalysebiologique");
const AlanyseBiologiqueRoute = require("./routes/analysebiologique");
const CollectionAnalyseBiologiqueRoute = require("./routes/collectionanalysebiologique");
const ResultatAnalysebiologiqueRoute = require("./routes/resultatanalysebiologique");
const FactureRoute = require("./routes/facture");
const ImageConsultationRoute = require("./routes/imageconsultation");
const LigneReglementsRoute = require("./routes/lignereglement");
const SRConsultationRoute = require("./routes/srconsultation");
const SuivistraitementPMARoute = require("./routes/suivitraitementpma");
const DeviceRoute = require("./routes/devices");
const WorkListItemRoute = require("./routes/worklistitem");
const TemplateEditionRoute = require("./routes/templateedition");
const ConsulatationGenycologRoute = require("./routes/consulatationGenycolog")

const port = 5000;
const server = express();
server.use(express.json());
server.use(cors());

server.use("/courrier", CourrierRoute);
server.use("/patient", PatientRoute);
server.use("/antecedent", AntecedentRoute);
server.use("/rdv", RDVRoute);
server.use("/consultation", ConsultationRoute);
server.use("/echo-pelvienne", EchoPelvienneRoute);
server.use("/grossesse", GrossesseRoute);
server.use("/consultation-gyneco", ConsultationGynecologiqueRoute);
server.use("/consultation-colposcopie", ConsultationColposcopieRoute);
server.use("/adresse", AdresseRoute);
server.use("/compte", CompteRoute);
server.use("/profile", ProfileRoute);
server.use("/parametre-compte", ParamCompteRoute);
server.use("/etablissement", EtablissementRoute);
server.use("/praticien", PraticienRoute);
server.use("/myome", MyomeRoute);
server.use("/consultation-obs", ConsultationObstetriqueRoute);
server.use("/foetus", DonnesFoetusRoute);
server.use("/informations-conjoint", InformationsConjointRoute);
server.use("/echo-11-SA", EchoElevenRoute);
server.use("/bilan-endocrinien-pma", BilanEndocrinienPMARoute);
server.use("/tentative-historique-pma", TentativeHistoriquePMARoute);
server.use("/spermogramme-pma", SpermogrammePMARoute);
server.use("/interrogatoire-pma", InterrogatoirePMARoute);
server.use("/traitement-pma", TraitementPMARoute);
server.use("/tentative-pma", TentativePMARoute);
server.use("/traitement-valeur-pma", TraitementValeurPMARoute);
server.use("/reglements", ReglementsRoute);
server.use(
  "/prescription-analyse-biologique",
  PrescriptionAlanyseBiologiqueRoute
);
server.use("/analyse-biologique", AlanyseBiologiqueRoute);
server.use("/collection-analyse-biologique", CollectionAnalyseBiologiqueRoute);
server.use("/resultat-analyse-biologique", ResultatAnalysebiologiqueRoute);
server.use("/facture", FactureRoute);
server.use("/image-consultation", ImageConsultationRoute);
server.use("/ligne-reglements", LigneReglementsRoute);
server.use("/sr-consultation", SRConsultationRoute);
server.use("/suivi-traitement-pma", SuivistraitementPMARoute);
server.use("/devices", DeviceRoute);
server.use("/work-list-item", WorkListItemRoute);
server.use("/template-edition", TemplateEditionRoute);
server.use("/user", UserRouter);
server.use("/consultGynecol", ConsulatationGenycologRoute);

server.use(
  "/src/uploads/images",
  express.static(path.join("src", "uploads", "images"))
);

mongoose
  .connect(
    "mongodb+srv://admin:admin@geny.aorcy6w.mongodb.net/?retryWrites=true&w=majority&appName=geny"
  )
  .then(() => {
    server.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
