export declare class GuildDocument {
  _id?: string;
  /**
   * The name of the guild
   */
  GuildName?: string;
  language?: string;
  blacklisted?: boolean;
  /**
   * The guild's tracking data
   */
  data?: GuildSchema;
}
export declare const GuildDocumentModel: import("@typegoose/typegoose").ReturnModelType<
  typeof GuildDocument,
  import("@typegoose/typegoose/lib/types").BeAnObject
>;
/** Typings for guild schema */
export interface GuildSchema {
  /** Tracks the guild member message activity */
  message?: number;
  /** Tracks the member join rates */
  member?: GuildSchemaMemberType;
  voice?: number;
}
export interface GuildSchemaMemberType {
  guildJoins: number;
  guildLeaves: number;
  /** The last time a member joined the server. */
  lastJoin: Date | null;
}
