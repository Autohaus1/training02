jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 FlugkundenSet in the list
// * All 3 FlugkundenSet have at least one Buchungen

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/crud/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/crud/test/integration/pages/App",
	"de/crud/test/integration/pages/Browser",
	"de/crud/test/integration/pages/Master",
	"de/crud/test/integration/pages/Detail",
	"de/crud/test/integration/pages/Create",
	"de/crud/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.crud.view."
	});

	sap.ui.require([
		"de/crud/test/integration/MasterJourney",
		"de/crud/test/integration/NavigationJourney",
		"de/crud/test/integration/NotFoundJourney",
		"de/crud/test/integration/BusyJourney",
		"de/crud/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});