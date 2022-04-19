"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShardController = void 0;
const discord_hybrid_sharding_1 = __importDefault(require("discord-hybrid-sharding"));
class ShardController {
    /**
     *
     * @param {string} path
     * @param {*} options
     */
    constructor(path, options) {
        if (!path) {
            throw new Error("Path to main file is required to start sharding.");
        }
        this.manager = new discord_hybrid_sharding_1.default.Manager(path, {
            totalShards: options.totalShards,
            shardsPerClusters: options.shardsPerCluster,
            mode: options.mode,
            token: options.token,
        });
        if (!options.totalShards) {
            options.totalShards = "auto";
        }
        if (!options.shardsPerCluster) {
            options.shardsPerCluster = 2;
        }
        if (!options.mode) {
            options.mode = "process";
        }
        if (!options.token) {
            throw new Error("No token provided");
        }
        try {
            this.manager.on("clusterCreate", (cluster) => console.log(`Launched Cluster ${cluster.id}`));
            this.manager.spawn({ timeout: -1 });
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.ShardController = ShardController;
//# sourceMappingURL=sharding.js.map