"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redis = void 0;
const tedis_1 = require("tedis");
class Redis {
  /**
   * @param {any} options redis options
   */
  constructor(options) {
    // Production Redis Environment
    this.client = new tedis_1.Tedis({
      host: options.host,
      port: options.port,
      password: options.password,
    });
    this.client.on("connect", () => {
      console.info("Redis Client is connected!");
    });
    this.client.on("error", (err) => {
      console.warn(`Redis Client has an error! - ${err}`);
    });
    this.client.on("timeout", () => {
      console.error("Redis Client has a timeout!");
    });
    this.client.on("close", () => {
      console.error("Redis Client has closed!");
    });
  }
  /**
   * Finds a key in the database and returns it's value
   * Useful for searching for data for a specific guild or user
   * @param {string} key The key to search for
   * @param {string | number} value The value to search for
   */
  async find(key, value) {
    try {
      return await this.client.get(`${key}:${value}`);
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  /**
   * Finds a key in the database and returns all of its values
   * @param {string} key
   */
  async findAll(key) {
    try {
      return await this.client.keys(`${key}:*`);
    } catch (err) {
      console.error(err);
      return [];
    }
  }
  /**
   * Inserts a key into the database
   * @param {string}  key The key to insert
   * @param {string} value The value to insert
   */
  async set(key, value) {
    try {
      await this.client.set(key, value);
    } catch (err) {
      console.error(err);
    }
  }
  /**
   * Deletes a key from the database
   * @param {string} key The key to delete
   * @param {string} value The value to delete
   */
  async delete(key, value) {
    try {
      await this.client.del(`${key}:${value}`);
    } catch (err) {
      console.error(err);
    }
  }
  /**
   * A function to set cooldowns on the redis command
   * @param {string} commandName The name of the command
   * @param {string} id The id of the user or guild
   * @param {any} time The time to set the cooldown for
   */
  async setCooldown(commandName, id, time) {
    const identifier = `cooldown:${id}:${commandName}`;
    try {
      await this.client.set(identifier, time);
    } catch (err) {
      console.error(err);
    }
  }
  /**
   * Removes a cooldown for redis command
   * @param {string} commandName The name of the command
   * @param {string} id The id of the user or guild
   */
  async removeCooldown(commandName, id) {
    const identifier = `cooldown:${id}:${commandName}`;
    try {
      await this.client.del(identifier);
    } catch (err) {
      console.error(err);
    }
  }
  /**
   * Checks if the cooldown exists in the cache
   * @param {string} commandName The name of the command
   * @param {string} id The id of the user or guild
   * @returns id
   */
  async checkCooldown(commandName, id) {
    const identifier = `cooldown:${id}:${commandName}`;
    try {
      const r = await this.client.get(identifier);
      return r !== null ? r : false;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
  /**
   * @param {string} key The key to search for
   * @returns
   */
  async lifeCycle(key) {
    try {
      return await this.client.ttl(key);
    } catch (err) {
      console.error(err);
      return 0;
    }
  }
}
exports.Redis = Redis;
//# sourceMappingURL=redis.js.map
