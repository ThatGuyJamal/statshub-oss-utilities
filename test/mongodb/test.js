const { initializeTypeGooseConnection, GuildModelHandler } = require("../../out/index");
const config = require("./test.json");

async function run() {
  await initializeTypeGooseConnection(config.mongoUrl).then(() => {
    console.log("Connected to MongoDB");
  });

  const test = new GuildModelHandler();

  const Guild = {
    id: "123456789",
    name: "Test Guild",
  };

  // Deletes any doc if it exists
  // await test._model.deleteOne({ id: Guild.id }).exec().then(() => console.log("Deleted"));

  // // Inserts a new doc
  await test._model.findByIdAndUpdate(
    {
      _id: Guild.id,
    },
    {
      $set: {
        guild_name: Guild.name,
      data: {
        member: {
          guildJoins: 8,
          guildLeaves: 5,
          lastJoin: new Date(),
        },
        message: 10,
        voice: 2,
      },
      }
    },
    {
      upsert: true,
      new: true,
    }
  ).exec().then(doc => {
    console.log(doc);
  })
}

run();
