"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildDocumentModel = exports.GuildDocument = void 0;
const typegoose_1 = require("@typegoose/typegoose");
let GuildDocument = class GuildDocument {
  _id;
  /**
   * The name of the guild
   */
  GuildName;
  language;
  blacklisted;
  /**
   * The guild's tracking data
   */
  data;
};
__decorate(
  [(0, typegoose_1.prop)({ type: () => String, required: true }), __metadata("design:type", String)],
  GuildDocument.prototype,
  "_id",
  void 0
);
__decorate(
  [(0, typegoose_1.prop)({ type: () => String, default: null }), __metadata("design:type", String)],
  GuildDocument.prototype,
  "GuildName",
  void 0
);
__decorate(
  [(0, typegoose_1.prop)({ type: () => String, required: false, default: "en-US" }), __metadata("design:type", String)],
  GuildDocument.prototype,
  "language",
  void 0
);
__decorate(
  [(0, typegoose_1.prop)({ type: () => Boolean, required: false, default: false }), __metadata("design:type", Boolean)],
  GuildDocument.prototype,
  "blacklisted",
  void 0
);
__decorate(
  [
    (0, typegoose_1.prop)({ type: () => Object, required: false, default: undefined }),
    __metadata("design:type", Object),
  ],
  GuildDocument.prototype,
  "data",
  void 0
);
GuildDocument = __decorate(
  [
    (0, typegoose_1.modelOptions)({
      schemaOptions: {
        id: false,
        collection: "guilds",
      },
      options: {
        allowMixed: typegoose_1.Severity.ALLOW,
        runSyncIndexes: true,
      },
    }),
  ],
  GuildDocument
);
exports.GuildDocument = GuildDocument;
exports.GuildDocumentModel = (0, typegoose_1.getModelForClass)(GuildDocument);
//# sourceMappingURL=model.js.map
