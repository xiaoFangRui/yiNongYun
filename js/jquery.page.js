(function($) {
    var ms = {
        init: function(obj, args) {
            return (function() {
                ms.fillHtml(obj, args);
                ms.bindEvent(obj, args);
            })();
        },
        fillHtml: function(obj, args) {
            return (function() {
                obj.empty();
                if (args.current > 1) {
                    obj.append('<li class="prevPage">上一页</li>');
                } else {
                    obj.remove('.prevPage');
                    obj.append('<li class="disabled">上一页</li>');
                }
                if (args.current != 1 && args.current >= 4 && args.pageCount != 4) {
                    obj.append('<li class="num">' + 1 + '</li>');
                }
                if (args.current - 2 > 2 && args.current <= args.pageCount && args.pageCount > 5) {
                    obj.append('<li>...</li>');
                }
                var start = args.current - 2,
                    end = args.current + 2;
                if ((start > 1 && args.current < 4) || args.current == 1) {
                    end++;
                }
                if (args.current > args.pageCount - 4 && args.current >= args.pageCount) {
                    start--;
                }
                for (; start <= end; start++) {
                    if (start <= args.pageCount && start >= 1) {
                        if (start != args.current) {
                            obj.append('<li class="num">' + start + '</li>');
                        } else {
                            obj.append('<li class="current">' + start + '</li>');
                        }
                    }
                }
                if (args.current + 2 < args.pageCount - 1 && args.current >= 1 && args.pageCount > 5) {
                    obj.append('<li class="elli">. . .</li>');
                }
                if (args.current != args.pageCount && args.current < args.pageCount - 2 && args.pageCount != 4) {
                    obj.append('<li class="num">' + args.pageCount + '</li>');
                }
                if (args.current < args.pageCount) {
                    obj.append('<li class="nextPage">下一页</li>');
                } else {
                    obj.remove('.nextPage');
                    obj.append('<li class="disabled">下一页</li>');
                }
            })();
        },
        bindEvent: function(obj, args) {
            return (function() {
                obj.on("click", "li.num", function() {
                    var current = parseInt($(this).text());
                    ms.fillHtml(obj, {
                        "current": current,
                        "pageCount": args.pageCount
                    });
                    if (typeof(args.backFn) == "function") {
                        args.backFn(current);
                    }
                });
                obj.on("click", "li.prevPage", function() {
                    var current = parseInt(obj.children("li.current").text());
                    ms.fillHtml(obj, {
                        "current": current - 1,
                        "pageCount": args.pageCount
                    });
                    if (typeof(args.backFn) == "function") {
                        args.backFn(current - 1);
                    }
                });
                obj.on("click", "li.nextPage", function() {
                    var current = parseInt(obj.children("li.current").text());
                    ms.fillHtml(obj, {
                        "current": current + 1,
                        "pageCount": args.pageCount
                    });
                    if (typeof(args.backFn) == "function") {
                        args.backFn(current + 1);
                    }
                });
            })();
        }
    };
    $.fn.createPage = function(options) {
        var args = $.extend({
            pageCount: 10,
            current: 1,
            backFn: function() {}
        }, options);
        ms.init(this, args);
    }
})(jQuery);