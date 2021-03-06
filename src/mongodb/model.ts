import { getModelForClass, modelOptions, prop, Severity } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    id: false,
    collection: "guilds",
  },
  options: {
    allowMixed: Severity.ALLOW,
    runSyncIndexes: true,
  },
})
export class GuildDocument {
  @prop({ type: () => String, required: true })
  /**
   * Guild ID
   */
  public _id?: string;

  /**
   * The name of the guild
   */
  @prop({ type: () => String, default: null })
  public guild_name?: string;

  @prop({ type: () => String, required: false, default: "en-US" })
  /**
   * The guild's language config
   */
  public language?: string;

  @prop({ type: () => Boolean, required: false, default: false })
  /**
   * The guild's blacklist status
   */
  public blacklisted?: boolean;

  /**
   * The guild's tracking data
   */
  @prop({ type: () => Object, required: false, default: undefined })
  public data?: GuildSchema;
}

/**
 * Handler for the GuildDocument model
 */
export const GuildDocumentModel = getModelForClass(GuildDocument);

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
export type KeyOptions = "message" | "data" | "member" | "language" | "voice" | "blacklisted" | "guild_name";
