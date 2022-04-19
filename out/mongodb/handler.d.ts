import { GuildDocument } from "./model";
import { Collection, Guild } from "discord.js";
export declare class GuildModelHandler {
    /** Model types for mongoose query's... */
    _model: import("@typegoose/typegoose").ReturnModelType<typeof GuildDocument, import("@typegoose/typegoose/lib/types").BeAnObject>;
    /** The local cache for quick setting information */
    _cache: Collection<string, GuildDocument>;
    initCache(): Promise<void>;
    /**
     * Get a guild from the database
     * @param guild The guild to get the settings for
     * @returns The guild settings for the given guild id
     */
    getDocument(guild: Guild): Promise<GuildDocument | (import("mongoose").Document<any, import("@typegoose/typegoose/lib/types").BeAnObject, any> & GuildDocument & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
        _id: any;
    }) | null | undefined>;
    /**
     * Deletes a guild configuration from the database.
     * @param id Guild ID
     */
    wipe(id: string): Promise<(import("mongoose").Document<any, import("@typegoose/typegoose/lib/types").BeAnObject, any> & GuildDocument & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
        _id: any;
    }) | null>;
}
