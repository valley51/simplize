import {
    nextTick
} from '../../../js/utils/index';

export let pull = {
    template: require('../../../html/webviews/components/pull.html'),
    events: {
        "webview:preset": function (headbar, toolbar) {
            headbar.active();
            headbar.data.left.icon = '<i class="iconfont icon-back"></i>';
            headbar.data.left.text = 'Back';
            headbar.data.left.click = function () { history.back(); };
            headbar.data.center.text = 'Simplize Component Pull Refresh';
        },
        'pulldown:loading': function(uuid){
            setTimeout(() => {
                this.pulldowns.unshift(this.pulldowns.length);
                this.$broadcast('pulldown:reset', uuid);
            }, 2000)

        },
        'pullup:loading': function(uuid){
            setTimeout(() => {
                this.pullups.push(this.pullups.length);
                nextTick(() => {
                    this.$broadcast('pullup:reset', uuid);
                })

            }, 2000)

        }
    },
    data: {
        list: ["http://www.jq22.com/demo/tuupola-jquery_lazyload/img/bmw_m1_hood.jpg", "http://www.jq22.com/demo/tuupola-jquery_lazyload/img/bmw_m1_side.jpg", "http://www.jq22.com/demo/tuupola-jquery_lazyload/img/viper_1.jpg", "http://www.jq22.com/demo/tuupola-jquery_lazyload/img/viper_corner.jpg", "http://www.jq22.com/demo/tuupola-jquery_lazyload/img/bmw_m3_gt.jpg", "http://www.jq22.com/demo/tuupola-jquery_lazyload/img/corvette_pitstop.jpg"]
    }
};
