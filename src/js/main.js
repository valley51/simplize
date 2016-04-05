import './polyfill';
import vue from 'vue';
import fastclick from 'fastclick';
import domReady from 'domready';
import asyncBrowser from './application/browser';
import asyncWebview from './application/webview';
import { bootstrap } from './application/bootstrap';
import * as PROXY from './application/proxy';
import * as ANIMATE from './application/animate';
import SCROLL from './application/scroll';
import DEDINE from './application/define';
import { Promise } from 'es6-promise';
import * as utils from './utils/index';

export default {
    vue,
    Promise,
    bootstrap,
    ready: domReady,
    proxy: PROXY,
    browser: asyncBrowser,
    webview: asyncWebview,
    animate: ANIMATE,
    scroll: SCROLL,
    define: DEDINE,
    util: utils
}

/*
-----------------------------------------------------
    common plugins install
-----------------------------------------------------
 */
import { ALERT } from './plugins/alert/index';
import { CONFIRM } from './plugins/confirm/index';
import { PROMPT } from './plugins/prompt/index';

// install

DEDINE('$alert', ALERT);
DEDINE('$confirm', CONFIRM);
DEDINE('$prompt', PROMPT);
