function ProductImpressions() {

    var productIds = [];

    if ($(".product-box").length) {

        $(".product-box").each(function () {
            productIds.push(parseInt($(this).attr("data-mid")));
        });

        $.ajax({
            method: "post",
            url: "webrix.tag.manager.php",
            data: {
                productIds: productIds,
                action: "product_impressions",
                list: $("title").html()
            },
            dataType: "script"
        });


    }
}

function ProductClick(productID) {

    var productIds = [productID];

    $.ajax({
        method: "post",
        url: "webrix.tag.manager.php",
        async: false,
        data: {
            productIds: productIds,
            action: "product_click",
            list: $("title").html()
        },
        dataType: "script"
    });
}


function ProductDetails(productID) {

    var productIds = [productID];

    $.ajax({
        method: "post",
        url: "webrix.tag.manager.php",
        data: {
            productIds: productIds,
            action: "product_details",
            list: $("title").html()
        },
        dataType: "script"
    });
}

function RemoveFromCart(dealID) {
    $.ajax({
        method: "post",
        url: "webrix.tag.manager.php",
        async: false,
        data: {
            goodsID: dealID,
            action: "removeFromCart",
            list: $("title").html()
        },
        dataType: "script"
    });
}

function AddToCart(dealID) {
    $.ajax({
        method: "post",
        url: "webrix.tag.manager.php",
        async: false,
        data: {
            goodsID: dealID,
            action: "addToCart",
            list: $("title").html()
        },
        dataType: "script"
    });
}


function checkout() {
    $.ajax({
        method: "post",
        url: "webrix.tag.manager.php",
        data: {
            action: "checkout",
            list: $("title").html()
        },
        dataType: "script"
    });
}


$(document).ready(function () {
    ProductImpressions();

    $(".product-box").on("click", function (event) {
        ProductClick(parseInt($(this).attr("data-mid")));
    });

    if ($(".jq-product-details").length) {
        ProductDetails($(".jq-product-details").attr("data-mid"));
    }
});
