const { initializeTypeGooseConnection, GuildModelHandler } = require("../../out/index");

async function run() {
  await initializeTypeGooseConnection("mongodb://127.0.0.1:27017/?directConnection=true").then(() =>
    console.log("Connected to MongoDB")
  );

  const test = new GuildModelHandler();

  const Guild = {
    id: "123456789",
    name: "Test Guild",
    data: {
      message: 0,
    },
  };

  // Deletes any doc if it exists
  await test._model.deleteOne({ id: Guild.id }).exec().then(() => console.log("Deleted"));

  // // // Inserts a new doc
  await test._model
    .create({
      _id: Guild.id,
      name: Guild.name,
      data: Guild.data,
    })
    .then((doc) => {
      console.log(doc);
    });

  await test._model.updateOne(
    {
      _id: Guild.id,
    },
    {
      $inc: {
        "data.message": 10,
      },
    },
    {
      upsert: true,
    }
  ).exec().then((doc) => {
    console.log(doc);
  })
}

run();
