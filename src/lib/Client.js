const wumpfetch = require("wumpfetch");

/**
 * Client for Neko Love Wrapper
 */
class NekoClient {

    /**
     * @typedef {Object} NekoClientOptions
     * @property {String} [url] Base URL for Neko Love API
     * @memberof NekoClient
     */

    /**
     * @param {NekoClientOptions} [options] Client options
     */
    constructor(options = {}) {
        /**
         * Client options
         * @type {Object}
         */
        this.options = options;
        /**
         * Base URL for Idiot's Guide API
         * @type {String}
         */
        this.baseUrl = options.url || "https://neko-love.xyz/api/v1/";
    }

    /**
     * Neko endpoint
     * @returns {string} The image URL
     */
    neko(){
        return this._get("neko").then((body) => body.url);
    }

    /**
     * Kistune endpoint
     * @returns {string} The image URL
     */
    kitsune(){
        return this._get("kitsune").then((body) => body.url);
    }

    /**
     * Hug endpoint
     * @returns {string} The image URL
     */
    hug(){
        return this._get("hug").then((body) => body.url);
    }

    /**
     * Pat endpoint
     * @returns {string} The image URL
     */
    pat(){
        return this._get("pat").then((body) => body.url);
    }

    /**
     * Waifu endpoint
     * @returns {string} The image URL
     */
    waifu(){
        return this._get("waifu").then((body) => body.url);
    }

    /**
     * Cry endpoint
     * @returns {string} The image URL
     */
    cry(){
        return this._get("cry").then((body) => body.url);
    }

    /**
     * Kiss endpoint
     * @returns {string} The image URL
     */
    kiss(){
        return this._get("kiss").then((body) => body.url);
    }

    /**
     * Nekolewd endpoint
     * @returns {string} The image URL
     */
    nekolewd(){
        return this._get("nekolewd").then((body) => body.url);
    }

    /**
     * Private method used to get endpoints with querys
     * @param {string} endpoint endpoint string
     * @returns {Promise<any>}
     * @private
     */
    async _get(endpoint) {
        const req = await wumpfetch(`${this.baseUrl}${endpoint}`).send();
        if(req.statusCode !== 200) throw req;
        const res = req.parse();
        return res;
    }

}

module.exports = NekoClient;