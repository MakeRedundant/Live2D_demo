/*****************************************************************************************************
 く__,.ヘヽ.　　　　/　,ー､ 〉
 　　　　　＼ ', !-─‐-i　/　/´
 　　　 　 ／｀ｰ'　　　 L/／｀ヽ､                 Live2D Widget Setting
 　　 　 /　 ／,　 /|　 ,　 ,　　　 ',               Version 2.0.0
 　　　ｲ 　/ /-‐/　ｉ　L_ ﾊ ヽ!　 i                     Konata
 　　　 ﾚ ﾍ 7ｲ｀ﾄ　 ﾚ'ｧ-ﾄ､!ハ|　 |
 　　　　 !,/7 '0'　　 ´0iソ| 　 |　　　
 　　　　 |.从"　　_　　 ,,,, / |./ 　 |      Add Live2D widget in your website.
 　　　　 ﾚ'| i＞.､,,__　_,.イ / 　.i 　|
 　　　　　 ﾚ'| | / k_７_/ﾚ'ヽ,　ﾊ.　|       Thanks:
 　　　　　　 | |/i 〈|/　 i　,.ﾍ |　i　|    fghrsh / https://www.fghrsh.net/post/123.html
 　　　　　　.|/ /　ｉ： 　 ﾍ!　　＼　|       journey-ad / https://github.com/journey-ad/live2d_src
 　　　 　 　 kヽ>､ﾊ 　 _,.ﾍ､ 　 /､!         xiazeyu / https://github.com/xiazeyu/live2d-widget.js
 　　　　　　 !'〈//｀Ｔ´', ＼ ｀'7'ｰr'      Cubism Web Framework & All model authors.
 　　　　　　 ﾚ'ヽL__|___i,___,ンﾚ|ノ
 　　　　　 　　　ﾄ-,/　|___./
 　　　　　 　　　'ｰ'　　!_,.
 ****************************************************************************************************/
 const live2d_settings = {
    // basic
    'modelUrl': 'model',                        // URL of a directory which consists of all model folder. NO slash in the end
    'tipsMessage': 'waifu-tips.json',           // message tips file. Can leave blank
    // model
    'modelName': 'houmuya',                      // default model name when first visit website
    'modelStorage': true,                       // save model name in broswer
    'modelRandMode': false,                     // random switching model
    'preLoadMotion': false,                     // weather preload motion file. ONLY valid for model3 file,
                                                // not preloading may increase model loading speed, but it may cause jank when trigger motion.
    'tryWebp': true,                            // if broswer support WebP format, will try to load Webp texture first,
                                                // eg. origin texture file is klee.8192/texture_00.png, if enabled, will load klee.8192/texture_00.png.webp FIRST
                                                // will fallback to load origin file if any error occured 
    // tool menu
    'showToolMenu': true,                       // show tools
    'canCloseLive2d': true,                     // show close button
    'canSwitchModel': true,                     // show switch button
    'canSwitchHitokoto': false,                  // show switch Hitokoto button
    'canTakeScreenshot': true,                  // show screenshot button
    'canTurnToHomePage': true,                  // show home button
    'canTurnToAboutPage': true,                 // show about button
    'showVolumeBtn': false,                     // show volume control button, you could implement other logic yourself
    // message tips
    'showHitokoto': true,                       // show Hitokoto when inactive for 30 seconds
    'hitokotoAPI': '',                          // Hitokoto API, can be 'hitokoto.cn'(default), 'lwl12.com', 'jinrishici.com', 'fghrsh.net'
    'showWelcomeMessage': true,                 // show welcome message
    'showF12OpenMsg': true,                     // show message when open console
    'showCopyMessage': true,                    // show copy message. By default it watching copy operation inside '#articleContent' element,
                                                // if your article content is not under this tag, you could search and modify it below.
    // style
    'live2dHeight': 680,                        // height of Live2D model, NO 'px' in the end
    'live2dWidth': 500,                         // width of Live2D model, NO 'px' in the end
    'waifuMinWidth':  'disable',                  // hide model when window width less than setting, eg, '1040px' (Recommend) or 'disable'
    'waifuEdgeSide': 'right:0',                 // position of model, eg, 'left:0' or 'right:30', can be override by model setting
    // misc
    'debug': false,                             // global debug setting
    'debugMousemove': false,                    // log cursor postion to console, valid if debug is true
    'logMessageToConsole': true,                // log message tips to console
    'l2dVersion': '2.0.0',                      // script version
    'homePageUrl': 'https://github.com/MakeRedundant',  // homepage, could be URL or 'auto'
    'aboutPageUrl': 'https://github.com/MakeRedundant/Live2D_demo', // about page
    'screenshotCaptureName': 'live2d.png',   // filename of screenshot, eg, 'live2d.png'
}
// 模型列表
const live2d_models = [
    {
        name: 'paimon',                                     // model name, should be same as folder name
        message: 'SDK4 Emergency Food bilibili@根瘤菌rkzj',  // meassage when switch to this model
        version: 3,                                         // model verion, different version has differnt entry file： 2: model.json , 3: FolderName.model3.json
        // position: 'left'                                 // position of this model
    },
    {
        name: 'miku',
        message: 'SDK2.1 official sample 初音ミク <a href="https://www.live2d.com/eula/live2d-free-material-license-agreement_en.html">LICENSE</a>',
        version: 2
    },
    {
        name: 'shizuku',
        message: 'SDK2.1 official sample しずく <a href="https://www.live2d.com/eula/live2d-free-material-license-agreement_en.html">LICENSE</a>',
        version: 2
    },
    {
        name: 'houmuya',
        message: 'SDK3 bronya bilibili@呦克里斯汀娜呦',
        version: 3
    },
    {
        name: 'Rice',
        message: 'SDK4 official sample Rice <a href="https://www.live2d.com/eula/live2d-free-material-license-agreement_en.html">LICENSE</a>',
        version: 3
    },
]
/****************************************************************************************************/
// SessionStorage LocalStorage
const setSS = (k, v) => {
    try {
        sessionStorage.setItem(k, v);
    } catch (e) {
    }
}
const removeSS = (k) => {
    try {
        sessionStorage.removeItem(k);
    } catch (e) {
    }
}
const getSS = (k) => {
    try {
        return sessionStorage.getItem(k);
    } catch (e) {
        return null
    }
}
const setLS = (k, v) => {
    try {
        localStorage.setItem(k, v);
    } catch (e) {
    }
}
const removeLS = (k) => {
    try {
        localStorage.removeItem(k);
    } catch (e) {
    }
}
const getLS = (k) => {
    try {
        return localStorage.getItem(k);
    } catch (e) {
        return null
    }
}
String.prototype.render = function (context) {
    const tokenReg = /(\\)?{([^{}\\]+)(\\)?}/g;
    return this.replace(tokenReg, function (word, slash1, token, slash2) {
        if (slash1 || slash2) {
            return word.replace('\\', '');
        }
        const variables = token.replace(/\s/g, '').split('.');
        let currentObject = context;
        let i, length, variable;

        for (i = 0, length = variables.length; i < length; ++i) {
            variable = variables[i];
            currentObject = currentObject[variable];
            if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
    });
};
const $$ = (selector) => {
    try {
        const e = document.querySelectorAll(selector);
        if (e.length === 1) {
            return e[0];
        } else
            return Array.from(e);
    } catch (e) {
        console.error(e);
        return null;
    }
}
const re = /x/;
console.log(re);
const live2dId2 = 'live2d2';
const live2dId4 = 'live2d4';
const waifuTips = $$('#waifu-message');
const waifu = $$('#waifu');

function getRandText(text) {
    return Array.isArray(text) ? text[Math.floor(Math.random() * text.length + 1) - 1] : text
}

let timeoutID;

function testWebP() {
    return new Promise(res => {
        const webP = new Image();
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        webP.onload = webP.onerror = () => {
            res(webP.height === 2);
        };
    })
}

function showMessage(text, timeout, flag) {
    if (flag || getSS('waifu-text') === '' || getSS('waifu-text') === null) {
        if (timeoutID) window.clearTimeout(timeoutID);
        if (Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1) - 1];
        if (live2d_settings.logMessageToConsole) console.log('[WaifuTips]', text.replace(/<[^<>]+>/g, ''));
        if (flag) setSS('waifu-text', text);
        waifuTips.style.opacity = 1;
        waifuTips.innerHTML = text;
        if (timeout === undefined) timeout = 5000;
        hideMessage(timeout);
    }
}

function hideMessage(timeout) {
    if (timeout === undefined) timeout = 5000;
    timeoutID = window.setTimeout(function () {
        removeSS('waifu-text');
        waifuTips.style.opacity = 0;
    }, timeout);
}

function changePosition(position) {
    if (position === 'left') {
        $$('.waifu-tool').style.right = 'unset';
        $$('.waifu-tool').style.left = '10px';
        waifu.style.right = 'unset';
        waifu.style.left = live2d_settings.waifuEdgeSide.split(":")[1];
    } else if (position === 'right') {
        $$('.waifu-tool').style.left = 'unset';
        $$('.waifu-tool').style.right = '10px';
        waifu.style.left = 'unset';
        waifu.style.right = live2d_settings.waifuEdgeSide.split(":")[1];
    } else {
        $$('.waifu-tool').style.left = '';
        $$('.waifu-tool').style.right = '';
        waifu.style.left = '';
        waifu.style.right = '';
    }
}

function initModel() {
    /* Load style sheet */
    addStyle(waifuStyle);
    if (getSS('waifuHide') === '1') {
        waifu.classList.add('hide');
        return;
    } else if (window.innerWidth <= Number(live2d_settings.waifuMinWidth.replace('px', ''))) {
        waifu.classList.add('hide');
        return;
    } else {
        waifu.classList.remove('hide');
    }
    /* console welcome message */
    console.log("\u304f__,.\u30d8\u30fd.\u3000\u3000\u3000\u3000/\u3000,\u30fc\uff64 \u3009\n\u3000\u3000\u3000\u3000\u3000\uff3c ', !-\u2500\u2010-i\u3000/\u3000/\u00b4\n\u3000\u3000\u3000 \u3000 \uff0f\uff40\uff70'\u3000\u3000\u3000 L/\uff0f\uff40\u30fd\uff64\n\u3000\u3000 \u3000 /\u3000 \uff0f,\u3000 /|\u3000 ,\u3000 ,\u3000\u3000\u3000 ',\n\u3000\u3000\u3000\uff72 \u3000/ /-\u2010/\u3000\uff49\u3000L_ \uff8a \u30fd!\u3000 i\n\u3000\u3000\u3000 \uff9a \uff8d 7\uff72\uff40\uff84\u3000 \uff9a'\uff67-\uff84\uff64!\u30cf|\u3000 |\n\u3000\u3000\u3000\u3000 !,/7 '0'\u3000\u3000 \u00b40i\u30bd| \u3000 |\u3000\u3000\u3000\n\u3000\u3000\u3000\u3000 |.\u4ece\"\u3000\u3000_\u3000\u3000 ,,,, / |./ \u3000 |\n\u3000\u3000\u3000\u3000 \uff9a'| i\uff1e.\uff64,,__\u3000_,.\u30a4 / \u3000.i \u3000|\n\u3000\u3000\u3000\u3000\u3000 \uff9a'| | / k_\uff17_/\uff9a'\u30fd,\u3000\uff8a.\u3000|\n\u3000\u3000\u3000\u3000\u3000\u3000 | |/i \u3008|/\u3000 i\u3000,.\uff8d |\u3000i\u3000|\n\u3000\u3000\u3000\u3000\u3000\u3000.|/ /\u3000\uff49\uff1a \u3000 \uff8d!\u3000\u3000\uff3c\u3000|\n\u3000\u3000\u3000 \u3000 \u3000 k\u30fd>\uff64\uff8a \u3000 _,.\uff8d\uff64 \u3000 /\uff64!\n\u3000\u3000\u3000\u3000\u3000\u3000 !'\u3008//\uff40\uff34\u00b4', \uff3c \uff40'7'\uff70r'\n\u3000\u3000\u3000\u3000\u3000\u3000 \uff9a'\u30fdL__|___i,___,\u30f3\uff9a|\u30ce\n\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000\uff84-,/\u3000|___./\n\u3000\u3000\u3000\u3000\u3000 \u3000\u3000\u3000'\uff70'\u3000\u3000!_,.:\nLive2D \u770b\u677f\u5a18 v" + live2d_settings.l2dVersion + " / Konata");

    $$(`#${live2dId2}`).setAttribute('height', live2d_settings.live2dHeight);
    $$(`#${live2dId2}`).setAttribute('width', live2d_settings.live2dWidth);
    $$(`#${live2dId4}`).setAttribute('height', live2d_settings.live2dHeight);
    $$(`#${live2dId4}`).setAttribute('width', live2d_settings.live2dWidth);
    if (!live2d_settings.showToolMenu) $$('.waifu-tool').classList.add('hide');
    if (!live2d_settings.canCloseLive2d) $$('.waifu-tool .icon-cross').classList.add('hide');
    if (!live2d_settings.canSwitchModel) $$('.waifu-tool .icon-next').classList.add('hide');
    if (!live2d_settings.canSwitchHitokoto) $$('.waifu-tool .icon-message').classList.add('hide');
    if (!live2d_settings.canTakeScreenshot) $$('.waifu-tool .icon-camera').classList.add('hide');
    if (!live2d_settings.canTurnToHomePage) $$('.waifu-tool .icon-home').classList.add('hide');
    if (!live2d_settings.canTurnToAboutPage) $$('.waifu-tool .icon-about').classList.add('hide');
    if (!live2d_settings.showVolumeBtn) $$('.waifu-tool .icon-volumeup').classList.add('hide') || $$('.waifu-tool .icon-volumedown').classList.add('hide');
    $$('.waifu-tool .icon-next').addEventListener('click', () => loadOtherModel());
    $$('.waifu-tool .icon-home').addEventListener('click', () => window.location = live2d_settings.homePageUrl)
    $$('.waifu-tool .icon-about').addEventListener('click', () => window.open(live2d_settings.aboutPageUrl))
    $$('.waifu-tool .icon-camera').addEventListener('click', () => {
        window.live2dCurrentVersion === 3 ? window.live2dv4.CaptureCanvas() : window.live2dv2.captureFrame = true;
    });
    $$('.waifu-tool .icon-cross').addEventListener('click', () => {
        sessionStorage.setItem('waifuHide', '1');
        window.setTimeout(function () {
            waifu.classList.add('hide');
            // document.getElementById('show-live2d').classList.remove('btnHide');
        }, 1000);
    })

    window.waifuResize = () => {
        if (getSS('waifuHide') !== '1')
            window.innerWidth <= Number(live2d_settings.waifuMinWidth.replace('px', '')) ? waifu.classList.add('hide') : waifu.classList.remove('hide');
    };

    if (live2d_settings.waifuMinWidth !== 'disable') {
        waifuResize();
        window.addEventListener('resize', waifuResize)
    }

    live2d_settings.homePageUrl = live2d_settings.homePageUrl === 'auto' ? window.location.protocol + '//' + window.location.hostname + '/' : live2d_settings.homePageUrl;

    if (live2d_settings.tipsMessage)
        window.fetch(live2d_settings.tipsMessage)
            .then(res => res.json())
            .then(resjson => loadTipsMessage(resjson));

    let modelName = getLS('modelName');

    if (!live2d_settings.modelStorage || modelName == null)
        modelName = live2d_settings.modelName;

    window.live2dv4.setPreLoadMotion(live2d_settings.preLoadMotion);
    window.live2dv2.debug = live2d_settings.debug;
    window.live2dv4.debug = live2d_settings.debug;
    window.live2dv2.debugMousemove = live2d_settings.debug && live2d_settings.debugMousemove;
    window.live2dv4.debugMousemove = live2d_settings.debug && live2d_settings.debugMousemove;
    if (live2d_settings.tryWebp) {
        testWebP().then(r => window.webpReady = r).then(() => {
            if (window.webpReady === true)
                console.log("[WaifuTips] Your browser support WebP format. Try to load WebP texture first.");
            else
                console.log("[WaifuTips] Your browser do not support WebP format.");
            loadModel(modelName);
        });
    } else {
        loadModel(modelName);
    }
}

function loadModel(modelName) {
    if (live2d_settings.modelStorage)
        setLS('modelName', modelName);
    else
        setSS('modelName', modelName);
    live2d_settings.debug && console.log(`[WaifuTips] 加载模型 ${modelName}`);
    let modelVersion = 2;
    // Find the version of the model you want to load in the configuration
    for (let model of live2d_models) {
        if (model.name === modelName) {
            modelVersion = model.version;
            changePosition(model.position);
            break;
        }
    }
    // If the version of the model to be loaded is different, first release the previous SDK and hide the canvas
    if (window.live2dCurrentVersion !== modelVersion) {
        if (window.live2dCurrentVersion === 2) {
            window.live2dv2.release();
            $$(`#${live2dId2}`).style.display = 'none';
        } else {
            window.live2dv4.release();
            $$(`#${live2dId4}`).style.display = 'none';
        }
    }
    // Choose different SDKs to load according to the model version
    if (modelVersion === 2) {
        $$(`#${live2dId2}`).style.display = 'block';
        window.live2dv2.load(live2dId2, `${live2d_settings.modelUrl}/${modelName}/model.json`);
    } else if (window.live2dCurrentVersion === modelVersion) {
        window.live2dv4.change(`${live2d_settings.modelUrl}/${modelName}`, `${modelName}.model3.json`);
    } else {
        $$(`#${live2dId4}`).style.display = 'block';
        window.live2dv4.load(live2dId4, `${live2d_settings.modelUrl}/${modelName}`, `${modelName}.model3.json`);
    }
    window.live2dCurrentVersion = modelVersion;
}

// A model for reading memory
function modelStorageGetItem(key) {
    return live2d_settings.modelStorage ? getLS(key) : getSS(key);
}

function loadOtherModel() {
    const modelName = modelStorageGetItem('modelName');
    let modelIndex = 0;
    if (live2d_settings.modelRandMode) {
        modelIndex = Math.floor(Math.random() * live2d_models.length + 1) - 1;
    } else {
        modelIndex = live2d_models.findIndex(modelObj => modelObj.name === modelName)
        if (modelIndex < live2d_models.length - 1)
            modelIndex++;
        else
            modelIndex = 0;
    }
    if (live2d_models[modelIndex].message) showMessage(live2d_models[modelIndex].message, 3000, true);
    loadModel(live2d_models[modelIndex].name);
}


function loadTipsMessage(result) {
    window.waifu_tips = result;

    const mouseenterListener = (e, tips) => {
        e.addEventListener('mouseenter', () => {
            let text = getRandText(tips.text);
            if (text.indexOf("{text}") > 0)
                text = text.replace(/{text}/, e.innerText);
            showMessage(text, 3000);
        });
    }
    const addMouseoverListener = () => {
        for (let tips of result.mouseover) {
            const select = $$(tips.selector);
            if (Array.isArray(select))
                select.forEach(e => mouseenterListener(e, tips));
            else if (select)
                mouseenterListener(select, tips);
            else
                live2d_settings.debug && console.warn(`[WaifuTips] can not found element: ${tips.selector}`)
        }
    }
    const addClickListener = () => {
        for (let tips of result.click) {
            const select = $$(tips.selector);
            if (Array.isArray(select))
                select.forEach(e => e.addEventListener('click', () => {
                    let text = getRandText(tips.text);
                    showMessage(text, 3000, true);
                }))
            else if (select)
                select.addEventListener('click', () => {
                    let text = getRandText(tips.text);
                    showMessage(text, 3000, true);
                })
            else
                live2d_settings.debug && console.warn(`[WaifuTips] can not found element: ${tips.selector}`)
        }
    }
    for (let tips of result.seasons) {
        const now = new Date();
        const after = tips.date.split('-')[0];
        const before = tips.date.split('-')[1] || after;
        if ((after.split('/')[0] <= now.getMonth() + 1 && now.getMonth() + 1 <= before.split('/')[0]) &&
            (after.split('/')[1] <= now.getDate() && now.getDate() <= before.split('/')[1])) {
            let text = getRandText(tips.text);
            if (text.indexOf("{year}") > 0)
                text = text.replace(/{year}/, now.getFullYear());
            showMessage(text, 6000, true);
        }
    }
    if (live2d_settings.showF12OpenMsg) {
        re.toString = function () {
            showMessage(getRandText(result.waifu.console_open_msg), 5000, true);
            return '';
        };
    }
    const addCopyListener = () => {
        if ($$('#articleContent').length !== 0)
            $$('#articleContent').addEventListener('copy', () => (showMessage(getRandText(result.waifu.copy_message), 5000, true)));
    }
    window.showWelcomeMessage = function (result) {
        let text;
        if (window.location.href === live2d_settings.homePageUrl) {
            const now = (new Date()).getHours();
            if (now > 23 || now <= 5) text = getRandText(result.waifu.hour_tips['t23-5']);
            else if (now > 5 && now <= 7) text = getRandText(result.waifu.hour_tips['t5-7']);
            else if (now > 7 && now <= 11) text = getRandText(result.waifu.hour_tips['t7-11']);
            else if (now > 11 && now <= 14) text = getRandText(result.waifu.hour_tips['t11-14']);
            else if (now > 14 && now <= 17) text = getRandText(result.waifu.hour_tips['t14-17']);
            else if (now > 17 && now <= 19) text = getRandText(result.waifu.hour_tips['t17-19']);
            else if (now > 19 && now <= 21) text = getRandText(result.waifu.hour_tips['t19-21']);
            else if (now > 21 && now <= 23) text = getRandText(result.waifu.hour_tips['t21-23']);
            else text = getRandText(result.waifu.hour_tips.default);
        } else {
            const referrer_message = result.waifu.referrer_message;
            if (document.referrer !== '') {
                const referrer = document.createElement('a');
                referrer.href = document.referrer;
                const domain = referrer.hostname.split('.')[1];
                if (window.location.hostname === referrer.hostname)
                    text = referrer_message.localhost[0] + document.title.split(referrer_message.localhost[2])[0] + referrer_message.localhost[1];
                else if (domain === 'baidu')
                    text = referrer_message.baidu[0] + referrer.search.split('&wd=')[1].split('&')[0] + referrer_message.baidu[1];
                else if (domain === 'so')
                    text = referrer_message.so[0] + referrer.search.split('&q=')[1].split('&')[0] + referrer_message.so[1];
                else if (domain === 'google')
                    text = referrer_message.google[0] + document.title.split(referrer_message.google[2])[0] + referrer_message.google[1];
                else {
                    text = referrer_message.default[0] + referrer.hostname + referrer_message.default[1];
                    for (let host in result.waifu.referrer_hostname)
                        if (host === referrer.hostname) {
                            text = getRandText(result.waifu.referrer_hostname[host]);
                            break;
                        }
                }
            } else text = referrer_message.none[0] + document.title.split(referrer_message.none[2])[0] + referrer_message.none[1];
        }
        showMessage(text, 6000);
    };
    if (live2d_settings.showWelcomeMessage) showWelcomeMessage(result);

    const waifu_tips = result.waifu;

    if (live2d_settings.showHitokoto) {
        window.getActed = false;
        window.hitokotoTimer = 0;
        window.hitokotoInterval = false;
        setInterval(function () {
            if (!getActed) ifActed();
            else elseActed();
        }, 1000);
    }
    /* Detect user activity status and display a message when idle */
    const addHitokotoListener = () => {
        document.addEventListener('mousemove', () => (getActed = true))
        document.addEventListener('keydown', () => (getActed = true))
    }

    if (document.readyState === "interactive" || document.readyState === "complete") {
        addMouseoverListener();
        addClickListener();
        if (live2d_settings.showCopyMessage) addCopyListener();
        if (live2d_settings.showHitokoto) addHitokotoListener();
    } else {
        window.addEventListener("DOMContentLoaded", addMouseoverListener);
        window.addEventListener("DOMContentLoaded", addClickListener);
        if (live2d_settings.showCopyMessage) window.addEventListener("DOMContentLoaded", addCopyListener);
        if (live2d_settings.showHitokoto) window.addEventListener("DOMContentLoaded", addHitokotoListener);
    }

    function ifActed() {
        if (!hitokotoInterval) {
            hitokotoInterval = true;
            hitokotoTimer = window.setInterval(showHitokotoActed, 30000);
        }
    }

    function elseActed() {
        getActed = hitokotoInterval = false;
        window.clearInterval(hitokotoTimer);
    }

    function showHitokotoActed() {
        if (document.visibilityState === 'visible') showHitokoto();
    }

    function showHitokoto() {
        const quotes = [
            "Hard work beats talent when talent doesn't work hard.",
            "The best way to predict the future is to invent it.",
            "People die when they are killed"
        ];
    
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        showMessage(randomQuote, 5000, true);
    }
    
    $$('.waifu-tool .icon-message').addEventListener('click', () => showHitokoto());
    
    
}

const addStyle = (() => {
    const style = document.createElement('style');
    document.head.append(style);
    return (styleString) => style.textContent = styleString;
})();

const blobDownload = (blob) => {
    if (typeof blob == 'object' && blob instanceof Blob) {
        blob = URL.createObjectURL(blob); // 创建blob地址
    }
    const aLink = document.createElement('a');
    aLink.href = blob;
    aLink.download = live2d_settings.screenshotCaptureName || 'live2d.png'; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
    let event;
    if (window.MouseEvent) event = new MouseEvent('click');
    else {
        event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    }
    aLink.dispatchEvent(event);
}

const waifuStyle = `
#waifu {
${live2d_settings.waifuEdgeSide}px;
position:fixed;
bottom:0;
z-index:998;
font-size:0
}

#waifu-message {
font-size:1rem;
width:-moz-fit-content;
width:fit-content;
height:auto;
left:2rem;
top:20px;
opacity:0;
z-index:998;
margin:auto;
padding:5px 10px;
border:1px solid rgba(104,216,255,0.62);
border-radius:12px;
background-color:rgba(76,191,255,0.8);
box-shadow:0 3px 15px 2px rgba(16,51,49,0.3);
text-overflow:ellipsis;
overflow:hidden;
position:relative;
animation-delay:5s;
animation-duration:50s;
animation-iteration-count:infinite;
animation-name:shake;
animation-timing-function:ease-in-out;
transition:opacity .3s ease
}

#waifu-message>a {
color:#7500b7;
}

#live2d2,#live2d4 {
position:relative;
display:none;
z-index:997
}

.waifu-tool {
display:none;
color:#d73b66;
top:130px;
${live2d_settings.waifuEdgeSide.split(":")[0]}:10px;
position:absolute;
z-index:998
}

#waifu:hover > .waifu-tool {
display:block
}

.waifu-tool > span {
font-family:"waifuico"!important;
display:block;
cursor:pointer;
color:#0396FF;
transition:.2s;
font-size:18px;
font-style:normal;
-webkit-font-smoothing:antialiased;
-moz-osx-font-smoothing:grayscale
}

.waifu-tool > span:hover {
color:#43CBFF
}

/* Media query for smaller screens */
@media (max-width: 768px) {
    #live2d, #live2d4 {
        /* Adjust size for smaller screens */
        height: 480px;
        width: 350px;
    }
}

/* Add more media queries as needed for different screen sizes */
@media (max-width: 480px) {
    #live2d, #live2d4 {
        /* Further adjust size for even smaller screens */
        height: 320px;
        width: 240px;
    }
}

.waifu-tool > .icon-next:before{padding-left:1px;content:"\\e6ba"}.waifu-tool > .icon-message:before{content:"\\e632"}.waifu-tool > .icon-cross:before{content:"\\e606"}.waifu-tool > .icon-about:before{content:"\\e60c"}.waifu-tool > .icon-home:before{content:"\\e604"}.waifu-tool > .icon-camera:before{content:"\\e635"}.waifu-tool > .icon-volumedown:before{content:"\\e6c2"}.waifu-tool > .icon-volumeup:before{content:"\\e6c3"}#waifu.hide,.waifu-tool > span.hide{display:none}@font-face{font-family:"waifuico";src:url(data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAWcAAsAAAAAC0gAAAVNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCEAgqIVIcCATYCJAMkCxQABCAFhG0HchuYCVGUT06K7OeB7R6lCBOgbWnZzIYDWz+EMHANCwis4uG/tdf7dmbx/wC6VAGqgCuhAwBFIEwVsNJVwEb21LKO3q1lyz+tCZvx3+UrWlPV795l73pusllKVXgcRqIMCNk9wkGaA/IP1K2mWg6WmlnR1Qqa7lwLoaYD/FpfOAE/f7i06QU2n2W5rPV/cy2K44ACGrcnLqDD0wI/YTkL68xspUBnvQo9T6CzQkdr1/bhCczKuDJQdj1LDMwmDHIFPTTqquDavDGelJricfGKl+7w8d98zFIoE/6iA9e2Ylj9lX1P9TmTXns0nA3bm0jYCGTiTaHjmRQkNprQnXOzC8C4sE0w1P4qQ/OWvPO97zOkb72kik5d+CcPlJKsUAm1hqhw1ZCot5MNv7LiUvKr4pL4NVSqQvPQKYCWoNQMvYNOAH2DTg30HQ0a0JprJoEpEPsB4i2ON7lEyOJpoGWF9Uoz6iBtQmEZSR0YgyVVYPFeOIPN3GSY5uUOTjKmlLks4xwO30ihSfCIyrtB4/PlZurwHsUBoelpYahQGMsORi9mnmOcZ53Fz4BQ8IuaCKZRdi7BW+cZ52Szpw+ehI6b5uVwWNcZJrl5XEaG4Bld+DyO/5TGe5LbP7LAWhojkRiji8z5YcW4eTbOYXEZBO3YphYFXCQmlfO4fOOcAZytB5LH1+1A0uQ5B/DIGQ0gj8ejLuvzhMI4gSALZBJK9MFFEGbOK1D72SB4ZF2DPLFhL3v8OkqZ3MwXCOi1BHU/icfLYxIMLouDs5sWjxhRQR6VjJ+FINpJiKW8dBgVnzyUAzNnYNNHlnYjV2upFMVP6IFi1tXVmW8ihqPPJMWLn3H3seGju3ci3kxPEJTA0jrAQ0fD8Bh6dl1hXf0jKHdKaRsxTzcO0JWMCoNpvbEutxBvrD4E64xscguymJWl87Zjuz13sbN3o1/REc9hj2HPEfRfUA14VOUN+7FLSlHD9gF0AN/dJbxQrsdqTB3bWeDw0/XbbtrtD/xvuymCYSI3VzoM07Joq6QFcq1EreSY1AupY67wGmL52IowWn008LOtnCa+PdJrVOzu58O13kDd54MrhoRV1HZxf/zUr1jBGrG7pF/6h14kOo20kntvDF6kSO5t+TgvfqwJSQ/VSg0rQ5KRsjB/bGg60jQ9Ai1DI9N26w1XrItJXd3kYnKRURRvBJG8CHy8T2KLtC/qq2WL2gJ6vtlO77JfPuylAcBR1HTZpJf91SwxeD4oigJToj4caJer06uTaZep061vZt/78dVJJWe2AnU4gB5PDpTgyF6yu7ScXvf3eIak4yE/dIofEGczzzlM3ABqvZvHHD39P3t+ZdNyM/gthH9c/L6TBMMoWrqXvkajeBuRb7kuP60g/JddpNzY5pNEGfo/hx8k0VMSdQi2thsxVqATC3y7PZM+hsUzjVX+THgmgkJtDpLGSmKmboTSwCJUGluhs8HOzQNTxITILdZ7ZBDGvUBh1GdIxr0RM/UdSrN+oTIeE9A5FlP3HFgd2fxOIaMUo73CLOLaSbPO+/IjSkJpJC51jDMSn4Vx2Buk0ztUkwxxgT9PRqoOnXCF2+xlVJaMjXBOkfZS1Wbc77uib+pFXMG8nQQxFIkh6wrKRFjNmeVqPrP/IyQRlAyp6HvmPUOEl62PhnoGDYg7qrpR36XUeucSI0oxB7ltKaugbbKRUiQYaoqPypGI6kk7xBpjfZrnmqp60+PqsV6BDv+YNopIkaOMKupooo1OvkmXOnODvDcJTV0W9tVTFy0Hnb6Xmpwrmr5sqjtz7PwxLkNFMV/Us6E/NAAAAAA=) format("woff2"),url(waifuico.woff?t=1597741284606) format("woff")}@keyframes shake{2%{transform:translate(0.5px,-1.5px) rotate(-0.5deg)}4%{transform:translate(0.5px,1.5px) rotate(1.5deg)}6%{transform:translate(1.5px,1.5px) rotate(1.5deg)}8%{transform:translate(2.5px,1.5px) rotate(0.5deg)}10%{transform:translate(0.5px,2.5px) rotate(0.5deg)}12%{transform:translate(1.5px,1.5px) rotate(0.5deg)}14%{transform:translate(0.5px,0.5px) rotate(0.5deg)}16%{transform:translate(-1.5px,-0.5px) rotate(1.5deg)}18%{transform:translate(0.5px,0.5px) rotate(1.5deg)}20%{transform:translate(2.5px,2.5px) rotate(1.5deg)}22%{transform:translate(0.5px,-1.5px) rotate(1.5deg)}24%{transform:translate(-1.5px,1.5px) rotate(-0.5deg)}26%{transform:translate(1.5px,0.5px) rotate(1.5deg)}28%{transform:translate(-0.5px,-0.5px) rotate(-0.5deg)}30%{transform:translate(1.5px,-0.5px) rotate(-0.5deg)}32%{transform:translate(2.5px,-1.5px) rotate(1.5deg)}34%{transform:translate(2.5px,2.5px) rotate(-0.5deg)}36%{transform:translate(0.5px,-1.5px) rotate(0.5deg)}38%{transform:translate(2.5px,-0.5px) rotate(-0.5deg)}40%{transform:translate(-0.5px,2.5px) rotate(0.5deg)}42%{transform:translate(-1.5px,2.5px) rotate(0.5deg)}44%{transform:translate(-1.5px,1.5px) rotate(0.5deg)}46%{transform:translate(1.5px,-0.5px) rotate(-0.5deg)}48%{transform:translate(2.5px,-0.5px) rotate(0.5deg)}50%{transform:translate(-1.5px,1.5px) rotate(0.5deg)}52%{transform:translate(-0.5px,1.5px) rotate(0.5deg)}54%{transform:translate(-1.5px,1.5px) rotate(0.5deg)}56%{transform:translate(0.5px,2.5px) rotate(1.5deg)}58%{transform:translate(2.5px,2.5px) rotate(0.5deg)}60%{transform:translate(2.5px,-1.5px) rotate(1.5deg)}62%{transform:translate(-1.5px,0.5px) rotate(1.5deg)}64%{transform:translate(-1.5px,1.5px) rotate(1.5deg)}66%{transform:translate(0.5px,2.5px) rotate(1.5deg)}68%{transform:translate(2.5px,-1.5px) rotate(1.5deg)}70%{transform:translate(2.5px,2.5px) rotate(0.5deg)}72%{transform:translate(-0.5px,-1.5px) rotate(1.5deg)}74%{transform:translate(-1.5px,2.5px) rotate(1.5deg)}76%{transform:translate(-1.5px,2.5px) rotate(1.5deg)}78%{transform:translate(-1.5px,2.5px) rotate(0.5deg)}80%{transform:translate(-1.5px,0.5px) rotate(-0.5deg)}82%{transform:translate(-1.5px,0.5px) rotate(-0.5deg)}84%{transform:translate(-0.5px,0.5px) rotate(1.5deg)}86%{transform:translate(2.5px,1.5px) rotate(0.5deg)}88%{transform:translate(-1.5px,0.5px) rotate(1.5deg)}90%{transform:translate(-1.5px,-0.5px) rotate(-0.5deg)}92%{transform:translate(-1.5px,-1.5px) rotate(1.5deg)}94%{transform:translate(0.5px,0.5px) rotate(-0.5deg)}96%{transform:translate(2.5px,-0.5px) rotate(-0.5deg)}98%{transform:translate(-1.5px,-1.5px) rotate(-0.5deg)}0%,100%{transform:translate(0,0) rotate(0)}}
`;
initModel();
window.downloadCap = blobDownload;
window.initModel = initModel;
export {showMessage, initModel}