import { type ConnectOptions } from "mongoose";
import { GuildModelHandler } from "./handler";
import { GuildDocument, GuildDocumentModel, GuildSchema, GuildSchemaMemberType } from "./model";
export { GuildDocument, GuildDocumentModel, GuildSchema, GuildSchemaMemberType, GuildModelHandler };
/**
 * Connect to the database.
 * @param url The url to connect to.
 * @param options The options to use.
 */
export declare function initializeTypeGooseConnection(url: string, options?: ConnectOptions): Promise<void>;
