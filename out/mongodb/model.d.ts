export declare class GuildDocument {
    _id?: string;
    /**
     * The name of the guild
     */
    guild_name?: string;
    language?: string;
    blacklisted?: boolean;
    /**
     * The guild's tracking data
     */
    data?: GuildSchema;
}
/**
 * Handler for the GuildDocument model
 */
export declare const GuildDocumentModel: import("@typegoose/typegoose").ReturnModelType<typeof GuildDocument, import("@typegoose/typegoose/lib/types").BeAnObject>;
/** Typings for guild schema */
export interface GuildSchema {
    /** Tracks the guild member message activity */
    message?: number;
    /** Tracks the member join rates */
    member?: GuildSchemaMemberType;
    voice?: number;
}
/** Typings for guild member schema */
export interface GuildSchemaMemberType {
    guildJoins: number;
    guildLeaves: number;
    /** The last time a member joined the server. */
    lastJoin: Date | null;
}
/** Typings for our query helper */
export declare type KeyOptions = "message" | "data" | "member" | "language" | "voice" | "blacklisted" | "guild_name";
