import { GuildDocument, GuildSchema, GuildSchemaMemberType } from "./model";
import { Collection, Guild } from "discord.js";
export declare class GuildModelHandler {
  /** Model types for mongoose query's... */
  _model: import("@typegoose/typegoose").ReturnModelType<
    typeof GuildDocument,
    import("@typegoose/typegoose/lib/types").BeAnObject
  >;
  /** The local cache for quick setting information */
  _cache: Collection<string, GuildDocument>;
  initCache(): Promise<void>;
  /**
   * Handler allowing us to update a guild's settings.
   * @param guild The guild to update
   * @param options The option to update
   * @param value The value to update the option with
   * @returns
   */
  insertOne(
    guild: Guild,
    options: _OneOptions,
    value: string | number | boolean | GuildSchemaMemberType | GuildSchema
  ): Promise<
    | string
    | number
    | boolean
    | GuildSchema
    | GuildSchemaMemberType
    | (import("mongoose").Document<any, import("@typegoose/typegoose/lib/types").BeAnObject, any> &
        GuildDocument &
        import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
          _id: any;
        })
    | undefined
  >;
  deleteOne(
    guild: Guild,
    options: _OneOptions
  ): Promise<
    (import("mongoose").Document<any, import("@typegoose/typegoose/lib/types").BeAnObject, any> &
      GuildDocument &
      import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
        _id: any;
      })[]
  >;
  /**
   * Get a guild from the database
   * @param guild The guild to get the settings for
   * @returns The guild settings for the given guild id
   */
  getDocument(guild: Guild): Promise<
    | GuildDocument
    | (import("mongoose").Document<any, import("@typegoose/typegoose/lib/types").BeAnObject, any> &
        GuildDocument &
        import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
          _id: any;
        })
    | null
    | undefined
  >;
  /**
   * Deletes a guild configuration from the database.
   * @param id Guild ID
   */
  wipe(id: string): Promise<
    | (import("mongoose").Document<any, import("@typegoose/typegoose/lib/types").BeAnObject, any> &
        GuildDocument &
        import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & {
          _id: any;
        })
    | null
  >;
}
/** Typings for our query helper */
declare enum _OneOptions {
  message = "message",
  language = "language",
  blacklisted = "blacklisted",
  member = "member",
  voice = "voice",
  data = "data",
}
export {};
