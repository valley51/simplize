export let layout = {
    zindex: 3,
        template: require('../../html/webviews/layout.html'),
    events: {
    "webview:load": function() {
    },
    "webview:preset": function(head) {
        head.active();
        head.data.left.icon = '<i class="iconfont icon-back"></i>';
        head.data.left.text = 'Back';
        head.data.right.icon = '';
        head.data.right.text = '';
        head.data.left.click = () => {
            this.$redirect('/');
        }
        head.data.center.text = 'Layout';
    },
    "webview:refresh": function() {
        console.log('refresh');
    }
}
}
