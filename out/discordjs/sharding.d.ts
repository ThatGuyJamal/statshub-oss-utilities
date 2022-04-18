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
