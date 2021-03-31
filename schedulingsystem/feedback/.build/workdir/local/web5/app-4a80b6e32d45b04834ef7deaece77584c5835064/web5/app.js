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
	this.vbox = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppHomeWidget.prototype.initializeWidget = function() {
	var message = JkWidgetCommonTextAreaWidget.NEW_JkUiGuiApplicationContext(this.context);
	message.setWidgetText(" type here ");
	message.setWidgetRows(5);
	message.setWidgetPadding1((this.context.getHeightValue("2500um")));
	message.setWidgetPlaceholder("Please enter your feedback.");
	message.setWidgetMaxLength(100);
	this.vbox.addWidget(message);
	var sendbtn = JkWidgetCommonButtonWidget.forText(this.context, "Send", (function() {
		this.vbox.addWidget((this.getMessage((message.getWidgetText()))));
	}.bind(this)));
	sendbtn.setWidgetFontSize((this.context.getHeightValue("2mm")));
	this.vbox.addWidget(sendbtn);
};

AppHomeWidget.prototype.getMessage = function(str) {
	var msg = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	msg.setWidgetText(str);
	return msg;
};

AppHomeWidget.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#949796")));
	this.addWidget(widget);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget2 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetText("FEEDBACK");
	widget2.setWidgetTextColor((JkGfxColor.black()));
	widget2.setWidgetFontSize((this.context.getHeightValue("3mm")));
	widget2.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget2.setWidgetFontBold(true);
	this.vbox.addWidget(widget2);
	var widget3 = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	widget3.setWidgetPlaceholder(" Name ");
	widget3.setWidgetBackgroundColor((JkGfxColor.white()));
	widget3.setWidgetFontSize((this.context.getHeightValue("2mm")));
	widget3.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(widget3);
	this.addWidget(this.vbox);
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
