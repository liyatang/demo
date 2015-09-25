define(function (require, exports, module) {

    console.log('hello , i am app');

    $('button').click(function () {
        var mo = $(this).data('module');

        require.async(mo, function (m) {
            m.init();
        });
    });
});