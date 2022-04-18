declare module "queue" {
    export class Queue {
        elements: {};
        head: number;
        tail: number;
        /**
         * Add an element to the end of the queue
         * @param {any} element the element to add
         * @returns {Record<string, any>} the queued element
         */
        enqueue(element: any): Record<string, any>;
        /**
         * Remove the element at the front of the queue
         * @returns {any} the element at the front of the queue
         */
        dequeue(): any;
        /**
         * Get the element at the front of the queue without removing it
         * @returns {number} the element at the front of the queue
         */
        peek(): number;
        /**
         * Get the length of the queue
         * @returns {number} the length of the queue
         */
        get length(): number;
        /**
         * Check if the queue is empty
         * @returns {boolean} true if the queue is empty, false otherwise
         */
        get isEmpty(): boolean;
    }
}
declare module "redis" {
    export class Redis {
        /**
         * @param {any} options redis options
         */
        constructor(options: any);
        client: Tedis;
        /**
         * Finds a key in the database and returns it's value
         * Useful for searching for data for a specific guild or user
         * @param {string} key The key to search for
         * @param {string | number} value The value to search for
         */
        find(key: string, value: string | number): Promise<string | number | null>;
        /**
         * Finds a key in the database and returns all of its values
         * @param {string} key
         */
        findAll(key: string): Promise<string[]>;
        /**
         * Inserts a key into the database
         * @param {string}  key The key to insert
         * @param {string} value The value to insert
         */
        set(key: string, value: string): Promise<void>;
        /**
         * Deletes a key from the database
         * @param {string} key The key to delete
         * @param {string} value The value to delete
         */
        delete(key: string, value: string): Promise<void>;
        /**
         * A function to set cooldowns on the redis command
         * @param {string} commandName The name of the command
         * @param {string} id The id of the user or guild
         * @param {any} time The time to set the cooldown for
         */
        setCooldown(commandName: string, id: string, time: any): Promise<void>;
        /**
         * Removes a cooldown for redis command
         * @param {string} commandName The name of the command
         * @param {string} id The id of the user or guild
         */
        removeCooldown(commandName: string, id: string): Promise<void>;
        /**
         * Checks if the cooldown exists in the cache
         * @param {string} commandName The name of the command
         * @param {string} id The id of the user or guild
         * @returns id
         */
        checkCooldown(commandName: string, id: string): Promise<string | number | false>;
        /**
         * @param {string} key The key to search for
         * @returns
         */
        lifeCycle(key: string): Promise<number>;
    }
    import { Tedis } from "tedis";
}
declare module "sharding" {
    export class ShardController {
        /**
         *
         * @param {string} path
         * @param {*} options
         */
        constructor(path: string, options: any);
        manager: ShardCluster.Manager;
    }
    import ShardCluster from "discord-hybrid-sharding";
}
declare module "index" {
    import { Queue } from "queue";
    import { Redis } from "redis";
    import { ShardController } from "sharding";
    export { Queue, Redis, ShardController };
}
