"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeTypeGooseConnection = exports.GuildModelHandler = exports.GuildDocumentModel = exports.GuildDocument = void 0;
const mongoose_1 = require("mongoose");
const handler_1 = require("./handler");
Object.defineProperty(exports, "GuildModelHandler", { enumerable: true, get: function () { return handler_1.GuildModelHandler; } });
const model_1 = require("./model");
Object.defineProperty(exports, "GuildDocument", { enumerable: true, get: function () { return model_1.GuildDocument; } });
Object.defineProperty(exports, "GuildDocumentModel", { enumerable: true, get: function () { return model_1.GuildDocumentModel; } });
/**
 * Connect to the database.
 * @param url The url to connect to.
 * @param options The options to use.
 */
async function initializeTypeGooseConnection(url, options) {
    try {
        await (0, mongoose_1.connect)(url, options);
    }
    catch (err) {
        console.error(err);
    }
}
exports.initializeTypeGooseConnection = initializeTypeGooseConnection;
//# sourceMappingURL=index.js.map