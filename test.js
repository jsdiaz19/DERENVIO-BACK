const mongoose = require("mongoose");

const uri = "mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/";

const getCollectionSchema = async (collectionName) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const collection = mongoose.connection.db.collection(collectionName);
    const document = await collection.findOne(); // Obtener un documento de la colección

    console.log("Estructura del documento:", document);
    mongoose.connection.close();
  } catch (error) {
    console.error("Error:", error);
  }
};

const listCollections = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("Colecciones en la base de datos:");
    collections.forEach(col => console.log(col.name));

    await mongoose.connection.close();
  } catch (error) {
    console.error("Error:", error);
  }
};

//listCollections();

getCollectionSchema("preciosEspecialesPinedo72");