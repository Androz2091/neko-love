import fetch from 'node-fetch';
import { stringify } from 'query-string';

interface NekoClientOptions {
    url: string;
}

interface NekoResponse {
    code: number;
    url: string;
}

/**
 * Client for Neko Love Wrapper
 */
class NekoClient {
    private baseURL: string;

    constructor(
        options: NekoClientOptions = {
            url: 'https://neko-love.xyz/api'
        }
    ) {
        this.baseURL = options.url;
    }

    /**
     * Neko endpoint
     */
    neko() {
        return this._get('neko').then((body) => body.url);
    }

    /**
     * Nekolewd endpoint
     */
    nekolewd() {
        return this._get('nekolewd').then((body) => body.url);
    }

    /**
     * Kistune endpoint
     */
    kitsune() {
        return this._get('kitsune').then((body) => body.url);
    }

    /**
     * Pat endpoint
     */
    pat() {
        return this._get('pat').then((body) => body.url);
    }

    /**
     * Hug endpoint
     */
    hug() {
        return this._get('hug').then((body) => body.url);
    }

    /**
     * Waifu endpoint
     */
    waifu() {
        return this._get('waifu').then((body) => body.url);
    }

    /**
     * Cry endpoint
     */
    cry() {
        return this._get('cry').then((body) => body.url);
    }

    /**
     * Kiss endpoint
     */
    kiss() {
        return this._get('kiss').then((body) => body.url);
    }

    /**
     * Slap endpoint
     */
    slap() {
        return this._get('slap').then((body) => body.url);
    }

    /**
     * Smug endpoint
     */
    smug() {
        return this._get('smug').then((body) => body.url);
    }

    /**
     * Punch endpoint
     */
    punch() {
        return this._get('punch').then((body) => body.url);
    }

    /**
     * Burple endpoint
     */
    blurple(url: string) {
        return this._get('blurple', 'v2', {
            url
        }).then((body) => body.url);
    }

    /**
     * Brightness endpoint
     */
    brightness(url: string) {
        return this._get('brightness', 'v2', {
            url
        }).then((body) => body.url);
    }

    /**
     * Pixelate endpoint
     */
    pixelate(url: string) {
        return this._get('pixelate', 'v2', {
            url
        }).then((body) => body.url);
    }

    /**
     * Gotham endpoint
     */
    gotham(url: string) {
        return this._get('gotham', 'v2', {
            url
        }).then((body) => body.url);
    }

    /**
     * Invert endpoint
     */
    invert(url: string) {
        return this._get('invert', 'v2', {
            url
        }).then((body) => body.url);
    }

    /**
     * Sepia endpoint
     */
    sepia(url: string) {
        return this._get('sepia', 'v2', {
            url
        }).then((body) => body.url);
    }

    /**
     * Posterize endpoint
     */
    posterize(url: string) {
        return this._get('posterize', 'v2', {
            url
        }).then((body) => body.url);
    }

    /**
     * Blur endpoint
     */
    blur(url: string) {
        return this._get('blur', 'v2', {
            url
        }).then((body) => body.url);
    }

    /**
     * Private method used to get endpoints with querys
     */
    async _get(endpoint: string, version: string = 'v1', params?: object) {
        let fetchURL = `${this.baseURL}/${version}/${endpoint}`;
        if (params) {
            fetchURL += stringify(params);
        }
        const res = await fetch(fetchURL);
        if (res.status !== 200) throw res;
        const data = await res.json();
        return data as NekoResponse;
    }
}

export default NekoClient;
