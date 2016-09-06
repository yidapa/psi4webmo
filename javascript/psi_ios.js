function SubmitJob(form,preview)
{
	bridge.send("setModelFromBuilder");

        if (form.cartesianCoordinates.checked) getGeometry("XYZFormat", "", form.geometry, false);
        else getGeometry("PSI4Format", "writeEqualsSign=true", form.geometry, false);

	bridge.send("getProperties",

	function (responseData) {
		var response = JSON.parse(responseData);
		
		document.form.dimScanned.value = response.dimScanned;
		document.form.scanVar.value = response.varScanned;
		document.form.scanStart.value = response.varScanned2;
		document.form.scanStop.value = response.scanStop;
		document.form.scanSteps.value = response.scanSteps;
		document.form.scanVar2.value = response.dimScanned;
		document.form.scanStart2.value = response.scanStart2;
		document.form.scanStop2.value = response.scanStop2;
		document.form.scanSteps2.value = response.scanSteps2;
	});

	getGeometry("XYZFormat", "writeUnitCell=true", form.cartesian, false);
	getGeometry("ConnectionFormat", "", form.connections, false);
	getGeometry("ZMatrixFormat", "", form.zmatrix, false);
	getGeometry("ChargeFormat", "", form.charges, false);
	
	bridge.send("DONE",

	function (responseData) {
		DoSubmitJob(form, preview);
	});		
}
		
