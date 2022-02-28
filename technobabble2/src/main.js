    //lists of words
    const words1 = ["Acute", "Aft", "Anti-matter", "Bipolar", "Cargo", "Command", "Communication", "Computer", "Deuterium", "Dorsal", "Emergency", "Engineering", "Environmental", "Flight", "Fore", "Guidance", "Heat", "Impulse", "Increased", "Inertial", "Infinite", "Ionizing", "Isolinear", "Lateral", "Linear", "Matter", "Medical", "Navigational", "Optical", "Optimal", "Optional", "Personal", "Personnel", "Phased", "Reduced", "Science", "Ship's", "Shuttlecraft", "Structural", "Subspace", "Transporter", "Ventral"];
	
	const words2 = ["Propulsion", "Dissipation", "Sensor", "Improbability", "Buffer", "Graviton", "Replicator", "Matter", "Anti-matter", "Organic", "Power", "Silicon", "Holographic", "Transient", "Integrity", "Plasma", "Fusion", "Control", "Access", "Auto", "Destruct", "Isolinear", "Transwarp", "Energy", "Medical", "Environmental", "Coil", "Impulse", "Warp", "Phaser", "Operating", "Photon", "Deflector", "Integrity", "Control", "Bridge", "Dampening", "Display", "Beam", "Quantum", "Baseline", "Input"];
	
	const words3 = ["Chamber", "Interface", "Coil", "Polymer", "Biosphere", "Platform", "Thruster", "Deflector", "Replicator", "Tricorder", "Operation", "Array", "Matrix", "Grid", "Sensor", "Mode", "Panel", "Storage", "Conduit", "Pod", "Hatch", "Regulator", "Display", "Inverter", "Spectrum", "Generator", "Cloud", "Field", "Terminal", "Module", "Procedure", "System", "Diagnostic", "Device", "Beam", "Probe", "Bank", "Tie-In", "Facility", "Bay", "Indicator", "Cell"];
	//#region my version
	/*
	function loadRandom(){
		console.log("load");
		document.querySelector("#output").innerHTML = words1[Math.floor(Math.random() * words1.length)] 
		+ " " + words2[Math.floor(Math.random() * words2.length)] + " " 
		+ words3[Math.floor(Math.random() * words3.length)];
	}
	console.log(words1[0]);
	var button = document.querySelector("#myButton");
	button.onclick = loadRandom;
	loadRandom();
	*/
	//#endregion
	//#region DRY version
	document.querySelector("#my-button").onclick = loadRandom;
	function randomElement(array){
		return array[Math.floor(Math.random() * array.length)];
	}
	function loadRandom() {
		document.querySelector("#output").innerHTML = `${randomElement(words1)} ${randomElement(words2)} ${randomElement(words3)}`;
	}
	loadRandom();
	//#endregion