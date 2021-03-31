let AppHomeWidgetScreen = function() {
	JkWidgetScreenForWidget.call(this);
};

AppHomeWidgetScreen.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetScreenForWidget.prototype);
AppHomeWidgetScreen.prototype.constructor = AppHomeWidgetScreen;
AppHomeWidgetScreen.prototype._t = {
	"AppHomeWidgetScreen" : true,
	"JkUiScreenWithContext" : true,
	"JkUiScreen" : true,
	"JkWidgetScreenForWidget" : true
};
AppHomeWidgetScreen.prototype._tobj = AppHomeWidgetScreen;

AppHomeWidgetScreen.NEW = function() {
	var v = new AppHomeWidgetScreen;
	return v.CTOR_AppHomeWidgetScreen();
};

AppHomeWidgetScreen.prototype.CTOR_AppHomeWidgetScreen = function() {
	if(JkWidgetScreenForWidget.prototype.CTOR_JkWidgetScreenForWidget.call(this) == null) {
		return null;
	}
	return this;
};

AppHomeWidgetScreen.prototype.initialize = function() {
	JkWidgetScreenForWidget.prototype.initialize.call(this);
	this.setWidget((AppHomeWidget.NEW_JkUiGuiApplicationContext(this.context)));
};

AppHomeWidgetScreen.main = function(args) {
	var context = JkUiGuiApplicationContextForHTML.NEW();
	var resources = [];
	context.prepareResources(resources, (function() {
		var main = AppHomeWidgetScreen.NEW();
		if(JkUiScreenWithContext.IS_INSTANCE && JkUiScreenWithContext.IS_INSTANCE(main)) {
			main.setContext(context);
		}
		main.initialize();
	}.bind(this)));
	return 0;
};

AppHomeWidgetScreen.main();

AppHomeWidgetScreen.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppHomeWidgetScreen"] === true;
};

let AppHomeWidget = function() {
	JkWidgetLayerWidget.call(this);
	this.vbox = null;
	this.firstname = null;
	this.lastName = null;
	this.middlename = null;
};

AppHomeWidget.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppHomeWidget.prototype.constructor = AppHomeWidget;
AppHomeWidget.prototype._t = {
	"AppHomeWidget" : true,
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppHomeWidget.prototype._tobj = AppHomeWidget;

AppHomeWidget.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppHomeWidget;
	return v.CTOR_AppHomeWidget_JkUiGuiApplicationContext(context);
};

AppHomeWidget.prototype.CTOR_AppHomeWidget_JkUiGuiApplicationContext = function(context) {
	this.middlename = null;
	this.lastName = null;
	this.firstname = null;
	this.vbox = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppHomeWidget.prototype.initializeWidget = function() {
	var savebtn = JkWidgetCommonButtonWidget.forText(this.context, "Save", (function() {
		this.vbox.addWidget((this.getFullName()));
	}.bind(this)));
	savebtn.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.vbox.addWidget(savebtn);
};

AppHomeWidget.prototype.getFullName = function() {
	var fullname = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	fullname.setWidgetText("Name : " + (JkLangString.safeString((this.firstname.getWidgetText()))) + (" ") + (JkLangString.safeString((this.lastName.getWidgetText()))) + (" ") + (JkLangString.safeString((this.middlename.getWidgetText()))));
	return fullname;
};

AppHomeWidget.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("yellow")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("500um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("200um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("REGISTRATION");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("3mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.firstname = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.firstname.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.firstname.setWidgetPlaceholder("First Name");
	this.firstname.setWidgetBackgroundColor((JkGfxColor.white()));
	this.firstname.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.firstname.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.firstname);
	this.lastName = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.lastName.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.lastName.setWidgetPlaceholder("Middle Name");
	this.lastName.setWidgetBackgroundColor((JkGfxColor.white()));
	this.lastName.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.lastName.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.lastName);
	this.middlename = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.middlename.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.middlename.setWidgetPlaceholder("Last Name");
	this.middlename.setWidgetBackgroundColor((JkGfxColor.white()));
	this.middlename.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.middlename.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.middlename);
	var widget5 = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget5.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	widget5.setWidgetPlaceholder("Address");
	widget5.setWidgetBackgroundColor((JkGfxColor.white()));
	widget5.setWidgetFontSize((this.context.getHeightValue("2mm")));
	widget5.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(widget5);
	var widget6 = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget6.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	widget6.setWidgetPlaceholder("Age");
	widget6.setWidgetBackgroundColor((JkGfxColor.white()));
	widget6.setWidgetFontSize((this.context.getHeightValue("2mm")));
	widget6.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(widget6);
	var widget7 = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget7.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	widget7.setWidgetPlaceholder("Gender");
	widget7.setWidgetBackgroundColor((JkGfxColor.white()));
	widget7.setWidgetFontSize((this.context.getHeightValue("2mm")));
	widget7.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(widget7);
	var widget8 = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget8.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_PHONE_NUMBER);
	widget8.setWidgetPlaceholder("Mobile Number");
	widget8.setWidgetBackgroundColor((JkGfxColor.white()));
	widget8.setWidgetFontSize((this.context.getHeightValue("2mm")));
	widget8.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(widget8);
	widget3.addWidget1(this.vbox, 0.5, 0.5, true);
	widget2.addWidget(widget3);
	this.addWidget(widget2);
};

AppHomeWidget.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppHomeWidget"] === true;
};

let AppMainScreen = function() {
	JkWidgetScreenForWidget.call(this);
	this.navi = null;
};

AppMainScreen.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetScreenForWidget.prototype);
AppMainScreen.prototype.constructor = AppMainScreen;
AppMainScreen.prototype._t = {
	"JkUiScreen" : true,
	"JkUiScreenWithContext" : true,
	"AppMainScreen" : true,
	"JkWidgetScreenForWidget" : true
};
AppMainScreen.prototype._tobj = AppMainScreen;

AppMainScreen.NEW = function() {
	var v = new AppMainScreen;
	return v.CTOR_AppMainScreen();
};

AppMainScreen.prototype.CTOR_AppMainScreen = function() {
	this.navi = null;
	if(JkWidgetScreenForWidget.prototype.CTOR_JkWidgetScreenForWidget.call(this) == null) {
		return null;
	}
	return this;
};

AppMainScreen.prototype.initialize = function() {
	JkWidgetScreenForWidget.prototype.initialize.call(this);
	this.navi = JkWidgetCommonNavigationWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.navi.setWidgetEnableActionBar(false);
	this.setWidget(this.navi);
	this.navi.pushWidget((AppHomeWidget.NEW_JkUiGuiApplicationContext(this.context)));
};

AppMainScreen.main = function(args) {
	var context = JkUiGuiApplicationContextForHTML.NEW();
	var resources = [];
	context.prepareResources(resources, (function() {
		var main = AppMainScreen.NEW();
		if(JkUiScreenWithContext.IS_INSTANCE && JkUiScreenWithContext.IS_INSTANCE(main)) {
			main.setContext(context);
		}
		main.initialize();
	}.bind(this)));
	return 0;
};

AppMainScreen.main();

AppMainScreen.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppMainScreen"] === true;
};
