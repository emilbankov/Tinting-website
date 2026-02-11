const WebrixSelect = function (id = "", options = {}) {
    this.iterator = 0;
    this.obj = $("#" + id);
    this.obj.addClass(id);



    this.options = {
    };

    this.options.multiselect = options.multiselect !== undefined ? options.multiselect : true;
    this.options.script = options.script !== undefined ? options.script : "";
    this.options.name = options.name !== undefined ? options.name : "";
    this.options.maxHeight = options.maxHeight !== undefined ? options.maxHeight : "250px";
    this.options.minSearchChars = options.minSearchChars !== undefined ? options.minSearchChars : 1;
    this.options.className = options.className !== undefined ? options.className : "";


    this.searchData = options.data;
    this.errors = options.errors;
    this.labels = options.labels;
    this.callback = typeof options.callback === "undefined" ? false : options.callback;
    this.callbackAfterChoice = typeof options.callbackAfterChoice === "undefined" ? false : options.callbackAfterChoice;
    this.searchOnFocus = typeof options.searchOnFocus === "undefined" ? false : options.searchOnFocus;

    this.listIds = [];

    const that = this;

    that.initHTML(that);
    this.searchObj = this.obj.find(".ms-search input");

    this.obj.find("button").on("click", function () {
        that.toggleButton(that);
    });

    this.searchObj.on("keyup", function () {
        that.search(that);
    });

}

WebrixSelect.prototype.initHTML = function (that)
{
    var html = '<button type="button" class="ms-choice" >' +
            '<span class="choice-label"> </span>' +
            '<div class="close"></div>' +
            '<div class="result-container"> </div>' +
            '</button>' +
            '<div class="ms-drop bottom" style="display: none;">' +
            '<div class="ms-search">' +
            '<input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false" >' +
            '</div>' +
            '<ul style="max-height: ' + that.options.maxHeight + ';" ></ul>' +
            '</div>';
    that.obj.append(html);
}

WebrixSelect.prototype.toggleButton = function (that) {
    
    if (that.obj.find("button .close").length > 0) {
        $("button .open").closest("button").trigger("click");
    }

    that.obj.find("button .close,button .open").toggleClass("close").toggleClass("open");
    that.obj.find(".ms-drop").toggle();
    if (that.searchOnFocus) {
        that.search(that);
    } else {
        that.initSelected(that);
    }
    that.obj.find(".ms-drop input").val("");
}

WebrixSelect.prototype.initSelected = function (that) {

    that.obj.find(".ms-drop ul li").remove();
    that.obj.find(".result-container input").each(function () {

        var nData = {
            id: $(this).val(),
            name: $(this).attr("data-name"),
            checked: that.listIds.includes($(this).val())
        };

        if (that.options.multiselect) {
            that.insertTemplateCheckbox(that, nData);
        } else {
            that.insertTemplateRadio(that, nData);
        }

    });
}

WebrixSelect.prototype.makeList = function (that) {
    that.listIds = [];
    that.obj.find(".result-container input").each(function () {
        that.listIds.push($(this).val());
    });
    that.madeChoice(that);
}


WebrixSelect.prototype.search = function (that) {
    that.iterator++;

    var InnerIterator = that.iterator;

    that.obj.find(".ms-drop ul li").remove();
    if (this.searchObj.val().length < that.options.minSearchChars) {
        that.message(that, that.errors.minSearchChars.replace("%d", that.options.minSearchChars));
    } else {
        that.searchData.keyword = this.searchObj.val();

        if (that.callback) {
            that.callback(that);
        }

        $.post(that.options.script, that.searchData, function (jsonResults) {

            $.each(jsonResults, function (y, x) {
                if (InnerIterator == that.iterator) {
                    x.checked = that.listIds.includes(x.id);
                    that.options.multiselect ? that.insertTemplateCheckbox(that, x) : that.insertTemplateRadio(that, x);
                }
            });
            if (InnerIterator == that.iterator) {
                if (that.obj.find(".ms-drop ul li").length == 0)
                {
                    that.message(that, that.errors.notingFound);
                }
            }

        }, "json");
    }

    that.makeList(that);
}

WebrixSelect.prototype.message = function (that, message) {
    $("<li>" + message + "</li>").appendTo(that.obj.find(".ms-drop ul"));
}

WebrixSelect.prototype.toggleElement = function (obj, that) {
    var id = $(obj).attr("data-id");

    var rI = that.obj.find(".result-container");
    if ($(obj).find("label").hasClass("wst-checked"))
    {
        rI.find("input[value='" + id + "']").remove();
    } else {
        if (!that.options.multiselect) {
            rI.find("input").remove();
            that.obj.find("button").trigger("click");
        }
        var x = {
            id: id,
            name: $(obj).find("span").html()
        };
        that.choice(that, x);

    }

    $(obj).find("label").toggleClass("wst-checked").toggleClass("wst-not-checked");
    that.makeList(that);

}

WebrixSelect.prototype.toggleElementOuter = function (obj, that) {
    var id = obj.id;

    var rI = that.obj.find(".result-container");
    if (obj.checked)
    {
        that.choice(that, obj);
    } else {
        rI.find("input[value='" + id + "']").remove();
    }

    that.makeList(that);
    that.initSelected(that);
}

WebrixSelect.prototype.madeChoice = function (that) {



    var fI = that.obj.find(".result-container input");
    if (fI.length == 0) {
        that.obj.find("span.choice-label").html(that.labels.searchPlease);
        return 0;
    }

    if (fI.length == 1) {
        that.obj.find("span.choice-label").html(fI.attr("data-name"));
        return 1;
    }

    that.obj.find("span.choice-label").html(that.labels.checkedItems.replace("%d", fI.length));

    return fI.length;
}

WebrixSelect.prototype.insertTemplateCheckbox = function (that, data) {
    $("<li data-id=\"" + data.id + "\">" +
            "<label class=\"checkbox " + (data.checked ? "wst-checked" : "wst-not-checked") + " not-attached\"> <span>" + data.name + "</span></label>" +
            "</li>").appendTo(that.obj.find(".ms-drop ul"));

    that.obj.find(".ms-drop ul li label.not-attached").closest("li").on("click", function () {
        that.toggleElement(this, that);
    });
    that.obj.find(".ms-drop ul li label.not-attached").removeClass("not-attached");
}

WebrixSelect.prototype.insertTemplateRadio = function (that, data) {
    $("<li data-id=\"" + data.id + "\" >" +
            "<label class=\"radio " + (data.checked ? "wst-checked" : "wst-not-checked") + " not-attached\"> <span>" + data.name + "</span></label>" +
            "</li>").appendTo(that.obj.find(".ms-drop ul"));

    that.obj.find(".ms-drop ul li label.not-attached").closest("li").on("click", function () {
        that.toggleElement(this, that);
    });
    that.obj.find(".ms-drop ul li label.not-attached").removeClass("not-attached");
}

WebrixSelect.prototype.choice = function (that, data) {
    
    $("<input type=\"hidden\" class=\"" + that.options.className + "\" value=\"" + data.id + "\" name=\"" + that.options.name + "\" data-name=\"" + data.name.replace(/["]/g, '&amp;quot;') + "\" />").appendTo(that.obj.find(".result-container"));
    that.makeList(that);
    
    if (that.callbackAfterChoice) {
        that.callbackAfterChoice(that);
    }
}