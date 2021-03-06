import { GuildDocument, GuildDocumentModel } from "./model";
import { Collection, Guild } from "discord.js";
import { container } from "@sapphire/framework";

export class GuildModelHandler {
  /** Model types for mongoose query's... */
  public _model = GuildDocumentModel;
  /** The local cache for quick setting information */
  public _cache = new Collection<string, GuildDocument>();

  public async initCache() {
    // find all the documents in the db

    const guildsToCacheLimit = container.client.guilds.cache.size;

    if (guildsToCacheLimit < 100) {
      const documents = await this._model.find();

      if (documents) {
        // add them to the cache
        for (const doc of documents) this._cache.set(doc._id, doc);
        container.logger.info(
          `[GuildModelHandler] Loaded ${documents.length} guilds from the database into the cache.`
        );
      }
    }
  }

  /**
   * Get a guild from the database
   * @param guild The guild to get the settings for
   * @returns The guild settings for the given guild id
   */
  public async getDocument(guild: Guild) {
    if (this._cache.has(guild.id)) return this._cache.get(guild.id);
    const doc = await this._model.findById(guild.id);
    if (doc) this._cache.set(guild.id, doc);
    return doc;
  }

  /**
   * Deletes a guild configuration from the database.
   * @param id Guild ID
   */
  public async wipe(id: string) {
    this._cache.delete(id);
    return this._model.findByIdAndDelete(id);
  }
}
