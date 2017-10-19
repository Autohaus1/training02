jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/crud/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/crud/test/integration/pages/App",
	"de/crud/test/integration/pages/Browser",
	"de/crud/test/integration/pages/Master",
	"de/crud/test/integration/pages/Detail",
	"de/crud/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.crud.view."
	});

	sap.ui.require([
		"de/crud/test/integration/NavigationJourneyPhone",
		"de/crud/test/integration/NotFoundJourneyPhone",
		"de/crud/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});