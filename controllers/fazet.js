// Trouver tous les documents où l'âge est égal à 25
Model.find({ age: 25 }, (err, results) => {
    console.log(results);
  });
// Sélectionner seulement le champ 'name'
Model.find({}, 'name', (err, results) => {
    console.log(results);
  });
// Trouver tous les documents qui ont le tag 'javascript' dans le tableau tags
Model.find({ tags: 'javascript' }, (err, results) => {
    console.log(results);
  });
// Trouver tous les documents où l'âge est supérieur à 25
Model.find({ age: { $gt: 25 } }, (err, results) => {
    console.log(results);
  });
// Trier les documents par âge de manière décroissante
Model.find().sort({ age: -1 }).exec((err, results) => {
    console.log(results);
  });
// Trouver tous les documents où l'âge est soit 25 ou 30
Model.find({ $or: [{ age: 25 }, { age: 30 }] }, (err, results) => {
    console.log(results);
  });
// Trouver tous les documents où l'âge est supérieur à 25 et le tag est 'javascript'
Model.find({ $and: [{ age: { $gt: 25 } }, { tags: 'javascript' }] }, (err, results) => {
    console.log(results);
  });
// Trouver tous les documents où l'âge est dans un ensemble donné
Model.find({ age: { $in: [25, 30, 35] } }, (err, results) => {
    console.log(results);
  });
// Mettre à jour le champ 'name' à 'John' pour tous les documents où l'âge est 25
Model.updateMany({ age: 25 }, { $set: { name: 'John' } }, (err, results) => {
    console.log(results);
  });
      