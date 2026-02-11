var Basket = {

};

let basketTemplate = "<i class='fa-regular fa-shopping-cart'></i><span class='broi-number'>::count::</span> <em>::price:: ::sign::</em>";
let favoritesTemplate = "<i class='fa-regular fa-heart'></i><span class='broi-number'>::count::</span>";

function addProduct(goodsID, quantity, show_dialog = 0) {

    var data = {
        action: 'add-in-basket',
        goodsID: goodsID,
        quantity: quantity,
        show_dialog: show_dialog
    };

    if (Basket && Basket.products && Basket.products[goodsID] !== undefined) {
        RemoveFromCart(goodsID);
    }

    $.ajax({
        url: 'page/processing',
        type: 'POST',
        data: data,
        dataType: 'json',
        async: false,
        success: function (res) {

            if (res.trigger) {
                $("body").trigger(res.trigger);
            }
            if (res.callback !== undefined) {
                eval(res.callback);
            }

            if (res.html_dialog !== undefined) {

                new Fancybox([
                    {
                        src: res.html_dialog,
                        type: "html",
                    }
                ]);
            }

            AddToCart(goodsID);
        }
    });

}



function changeQuantity(index, quantity, show_dialog = 0) {

    var data = {
        action: 'change-quantity-in-basket',
        index: index,
        quantity: quantity,
        show_dialog: show_dialog
    };

    $.ajax({
        url: 'page/processing',
        type: 'POST',
        data: data,
        dataType: 'json',
        async: false,
        success: function (res) {

            if (res.trigger) {
                $("body").trigger(res.trigger);
            }
            if (res.callback !== undefined) {
                eval(res.callback);
            }

            if (res.html_dialog !== undefined) {

                new Fancybox([
                    {
                        src: res.html_dialog,
                        type: "html"
                    }
                ]);
            }
        }
    });
}


function addProductType2(item_ids, quantity, show_dialog = 0) {

    var data = {
        action: 'add-in-basket-type-2',
        item_ids: item_ids,
        quantity: quantity,
        show_dialog: show_dialog
    };

    /* if (Basket && Basket.products && Basket.products[goodsID] !== undefined) {
     RemoveFromCart(goodsID);
     }*/

    $.ajax({
        url: 'page/processing',
        type: 'POST',
        data: data,
        dataType: 'json',
        async: false,
        success: function (res) {

            if (res.trigger) {
                $("body").trigger(res.trigger);
            }
            if (res.callback !== undefined) {
                eval(res.callback);
            }

            if (res.html_dialog !== undefined) {

                new Fancybox([
                    {
                        src: res.html_dialog,
                        type: "html",
                    }
                ]);
            }

            /* AddToCart(goodsID);*/
        }
    });
}

function addProductType3(item_ids, quantity, show_dialog = 0) {

    var data = {
        action: 'add-in-basket-type-3',
        item_ids: item_ids,
        quantity: quantity,
        show_dialog: show_dialog
    };

    /* if (Basket && Basket.products && Basket.products[goodsID] !== undefined) {
     RemoveFromCart(goodsID);
     }*/

    $.ajax({
        url: 'page/processing',
        type: 'POST',
        data: data,
        dataType: 'json',
        async: false,
        success: function (res) {

            if (res.trigger) {
                $("body").trigger(res.trigger);
            }
            if (res.callback !== undefined) {
                eval(res.callback);
            }

            if (res.html_dialog !== undefined) {

                new Fancybox([
                    {
                        src: res.html_dialog,
                        type: "html",
                    }
                ]);
            }


            /* AddToCart(goodsID);*/
        }
    });
}

function addPromocode(promo_code, callback) {

    var data = {
        action: 'promo-code-basket',
        promo_code: promo_code,
        callback: callback
    };

    $("body").addClass("loading");
    $.ajax({
        url: 'page/processing',
        type: 'POST',
        data: data,
        dataType: 'json',
        async: false,
        success: function (res) {
            Basket = res.basket;

            $("body").removeClass("loading");

            if (res.trigger) {
                $("body").trigger(res.trigger);
            }

            if (res.callback !== undefined) {
                eval(res.callback);
            }

        }
    });

}

function getBasket() {

    var data = {
        action: 'get-basket'
    };

    $.ajax({
        url: 'page/processing',
        type: 'POST',
        data: data,
        dataType: 'json',
        async: false,
        success: function (res) {
            Basket = res.basket;
            if (res.trigger) {
                $("body").trigger(res.trigger);
            }
            if (res.callback !== undefined) {
                eval(res.callback);
            }

            if (res.html !== undefined) {
                $(".cart .cart-list").html(res.html);
            }

        }
    });
}

function favor(module_id) {

    var arr = {action: 'favorite', module_id: module_id};
    $.ajax({
        url: 'page/processing',
        type: 'POST',
        data: arr,
        dataType: 'json',
        async: false,
        success: function (msg) {

            if (msg.callback !== undefined) {
                eval(msg.callback);
            }
        }
    });
}


function initFavorites() {
    $(".heart-full").removeClass("heart-full");
    var countF = 0;
    if ($.cookie('Favorites') === null) {
        $.cookie('Favorites', "");
    }
    if ($.cookie('Favorites') !== undefined) {
        $($.cookie('Favorites').split(",")).each(function (i, j) {
            $(".mid-" + j + " .jq-favorite").addClass("heart-full");
        });

        countF = $.cookie('Favorites').split(",").length;
    }


    $(".favourite").removeClass("fav-full").find("a").html("<i class='fa-regular fa-heart'></i>");
    $.cookie("favouriteDefault", "", {path: "/"});
    if (countF > 0) {
        var html = favoritesTemplate.replace("::count::", countF);
        $(".favourite").addClass("fav-full").find("a").html(html);
        $.cookie("favouriteDefault", html, {path: "/"});
    }
}


function choiceCurrency(new_currency_id) {
    var arr = {action: 'choiceCurrency', currency_id: new_currency_id};
    $.ajax({
        url: 'page/processing',
        type: 'POST',
        data: arr,
        dataType: 'json',
        async: false,
        success: function () {
            location.reload();
        }
    });
}

function fastOrder(moduleID, goodsID, phone, lang_id) {
    var data = {
        action: "fast-order",
        moduleID: moduleID,
        goodsID: goodsID,
        phone: phone,
        languages_id: lang_id
    };

    var url = "/page/processing";

    $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: "json",
        success: function (data) {
            if (typeof data.success !== 'undefined') {
                messageFancybox(data.title, data.success);
            }

            if (typeof data.error !== 'undefined') {
                messageFancybox(data.title, data.error);
            }
        },
        failure: function (errMsg) {
            messageFancybox("ERROR", errMsg);
        }
    });

}

function messageFancybox(title, text) {
    var popup = `<div class="popup pop-right-bgr">
        <div class="contact-form clearfloat">
            <h4 class="second-title">${title}</h4>
            <p>${text}</p>
        </div> 
    </div>`;

    new Fancybox([
        {
            src: popup,
            type: "html"
        }
    ]);

}

$("body").on("initBasket", function () {
    var html = basketTemplate.replace("::count::", Basket.count).replace("::price::", Basket.subtotalPrice).replace("::sign::", Basket.sign);
    $.cookie("cartDefault", html, {path: "/"});
    $(".cart>a").html(html);
});


function sendProductAskForm(objSubmit) {
    $(".validate-error.submit-error,.alert-success").remove();
    $(objSubmit).closest(".jq-form").find("input,textarea").trigger("validate");

    if (!$(".validate-error").length)
    {
        $.post("/page/processing", $(objSubmit).closest(".jq-form").find("input,textarea").serializeArray(), function (response)
        {
            var oJ = JSON.parse(response);
            if (oJ.error !== undefined)
            {

                if (oJ.action === "reload antispam")
                {
                    $(objSubmit).closest(".jq-form").find(".captcha").after('<div class="validate-error submit-error"><i class="fa fa-exclamation-triangle"></i> ' + oJ.error + '</div>')
                    $(objSubmit).closest(".jq-form").find(".jq-captcha").trigger("click");
                    $(objSubmit).closest(".jq-form").find(".antispam").val("");
                }
            }

            if (oJ.success !== undefined)
            {
                Fancybox.close()

                messageFancybox(oJ.success, "");
                $(objSubmit).closest(".jq-form").find(".jq-captcha").trigger("click");
                $(objSubmit).closest(".jq-form").find("input[type='text']:visible,textarea:visible").val("");

            }
        });
    }

}



function validURL(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}



$(document).ready(function () {

    $("img.jq-captcha").on("click touchstart", function () {
        var src = $(this).attr("src");
        var d = new Date();
        $(this).attr("src", src + "&d=" + d.getTime());
    });

});

// validate

var webrix_validate_counter = 0;
$(".webrix-validate").each(function () {
    webrix_validate_counter++;

    $(this).attr("data-webrix-validate-key", "field-" + webrix_validate_counter);
    if ($(this).hasClass("jq-length")) {
        $(this).on("validate", function () {
            $(".validate-error.validate-length." + $(this).attr("data-webrix-validate-key")).remove();
            if ($(this).val().length < parseInt($(this).attr("data-min")))
            {
                $(this).after('<div class="validate-error validate-length ' + $(this).attr("data-webrix-validate-key") + '"><i class="fa fa-exclamation-triangle"></i> ' + $(this).attr("data-error-length").replace("%min%", $(this).attr("data-min")) + '</div>')
            }
        });
    }
    if ($(this).hasClass("jq-numbers")) {
        $(this).on("validate", function () {
            var pattern = /^\d+$/;

            $(".validate-error.validate-numbers." + $(this).attr("data-webrix-validate-key")).remove();
            if (!pattern.test($(this).val()))
            {
                $(this).after('<div class="validate-error validate-numbers ' + $(this).attr("data-webrix-validate-key") + '"><i class="fa fa-exclamation-triangle"></i> ' + $(this).attr("data-error-numbers") + '</div>')
            }
        });
    }

    if ($(this).hasClass("jq-email")) {
        $(this).on("validate", function () {

            $(".validate-error.validate-email." + $(this).attr("data-webrix-validate-key")).remove();
            if (!validateEmail($(this).val()))
            {
                $(this).after('<div class="validate-error validate-email ' + $(this).attr("data-webrix-validate-key") + '"><i class="fa fa-exclamation-triangle"></i> ' + $(this).attr("data-error-email") + '</div>')
            }
        });
    }

    if ($(this).hasClass("jq-checkbox")) {
        $(this).on("validate", function () {
            $(".validate-error.validate-email." + $(this).attr("data-webrix-validate-key")).remove();
            if (!$(this).is(":checked"))
            {
                $(this).closest(".checkbox-custom").after('<div class="validate-error validate-email ' + $(this).attr("data-webrix-validate-key") + '"><i class="fa fa-exclamation-triangle"></i> ' + $(this).attr("data-error-email") + '</div>')
            }
        });
    }


});

$(".webrix-validate").on("blur change", function () {
    $(this).trigger("validate");
});


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

/* Cookie */
function viewedProductCookie(moduleID) {
    var viewedProds = $.cookie("viewedProduct");

    if (viewedProds != undefined) {
        viewedProds = moduleID + "," + viewedProds;
    } else {
        viewedProds = moduleID + "";
    }

    viewedProds = viewedProds.split(",").filter(onlyUnique).slice(0, 20);
    $.cookie("viewedProduct", viewedProds.join(","), {expires: 90, path: "/"});
}


function removeProductCookie(moduleID) {
    var viewedProds = $.cookie("viewedProduct");
    viewedProds = removeA(viewedProds.split(","), moduleID);
    $.cookie("viewedProduct", viewedProds.join(","), {expires: 90, path: "/"});
}

function updateShopCart(product_id, quantity) {
    if (quantity != "" && parseInt(quantity) > 0) {
        addProduct(product_id, parseInt(quantity), 0);
    } else {
        addProduct(product_id, 1, 0);
    }
    $("body").trigger("view");
}
$(document).ready(function () {
    getBasket();
    initFavorites();
});


/* Други често използвани */

/* Изпращане на форма за контакт */
function sendForm(objSubmit) {
    $(".validate-error.submit-error,.alert-success").remove();
    $(objSubmit).closest(".jq-form").find("input,textarea").trigger("validate");

    if (!$(".validate-error").length)
    {
        $.post("/page/processing", $(objSubmit).closest(".jq-form").find("input,textarea").serializeArray(), function (response)
        {
            var oJ = JSON.parse(response);
            if (oJ.error !== undefined)
            {

                if (oJ.action === "reload antispam")
                {
                    $(objSubmit).closest(".jq-form").find(".captcha").after('<div class="validate-error submit-error"><i class="fa fa-exclamation-triangle"></i> ' + oJ.error + '</div>')
                    $(objSubmit).closest(".jq-form").find(".jq-captcha").trigger("click");
                    $(objSubmit).closest(".jq-form").find(".antispam").val("");
                }
            }

            if (oJ.success !== undefined)
            {
                $(objSubmit).closest(".jq-form").find(".captcha").after('<div class="alert alert-success alert-white rounded"><div class="icon"> <i class="fa fa-check"></i></div> <strong>' + oJ.success + '</strong></div>')
                $(objSubmit).closest(".jq-form").find(".jq-captcha").trigger("click");
                $(objSubmit).closest(".jq-form").find("input:visible,textarea:visible").val("");
                $('.alert-success').fadeOut(5000);
            }
        });
    }

}

$(document).ready(function () {

    $("img.jq-captcha").on("click touchstart", function () {
        var src = $(this).attr("src");
        var d = new Date();
        $(this).attr("src", src + "&d=" + d.getTime());
    });

});


if ($('.sidebar').length && !$('.sidebar').html().trim()) {
    $('.sidebar').hide();
}


$.fn.delay = function (time, func) {
    return this.each(function () {
        setTimeout(func, time);
    });
};


function generateAlert(what, msg) {
    alert(msg);
}



function generateConfirm(msg) {
    return confirm(msg);
}


function acceptCookies() {
    $.cookie("acceptCookies", "YES", {expires: 90, path: "/"});
    $(".cookies-wrapper").addClass("cookie-hidden");
}

function checkCookies() {
    if ($.cookie("acceptCookies") == undefined) {
        $(".cookies-wrapper").removeClass("cookie-hidden");

    }
}