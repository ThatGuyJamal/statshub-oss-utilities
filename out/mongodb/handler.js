"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildModelHandler = void 0;
const model_1 = require("./model");
const discord_js_1 = require("discord.js");
const framework_1 = require("@sapphire/framework");
class GuildModelHandler {
    /** Model types for mongoose query's... */
    _model = model_1.GuildDocumentModel;
    /** The local cache for quick setting information */
    _cache = new discord_js_1.Collection();
    async initCache() {
        // find all the documents in the db
        const guildsToCacheLimit = framework_1.container.client.guilds.cache.size;
        if (guildsToCacheLimit < 100) {
            const documents = await this._model.find();
            if (documents) {
                // add them to the cache
                for (const doc of documents)
                    this._cache.set(doc._id, doc);
                framework_1.container.logger.info(`[GuildModelHandler] Loaded ${documents.length} guilds from the database into the cache.`);
            }
        }
    }
    /**
     * Get a guild from the database
     * @param guild The guild to get the settings for
     * @returns The guild settings for the given guild id
     */
    async getDocument(guild) {
        if (this._cache.has(guild.id))
            return this._cache.get(guild.id);
        const doc = await this._model.findById(guild.id);
        if (doc)
            this._cache.set(guild.id, doc);
        return doc;
    }
    /**
     * Deletes a guild configuration from the database.
     * @param id Guild ID
     */
    async wipe(id) {
        this._cache.delete(id);
        return this._model.findByIdAndDelete(id);
    }
}
exports.GuildModelHandler = GuildModelHandler;
//# sourceMappingURL=handler.js.map