
export default {
	client: false,
	setConnectedDevices: false,
	init: function (setConnectedDevices) {
		if (!this.setConnectedDevices) {
			this.setConnectedDevices = setConnectedDevices;

			Buttplug.buttplugInit().then(() => {
				console.log("Library loaded");

				// Buttplug.activateConsoleLogger("debug");

				this.client = new Buttplug.ButtplugClient("Test Client");
				let connector = new Buttplug.ButtplugEmbeddedConnectorOptions();
				this.client.connect(connector);

				window.client = this.client; //temporally hack

				this.client.addListener("deviceadded", () => {
					this.setConnectedDevices(this.client.Devices);
				});

				this.client.addListener("deviceremoved", () => {
					this.setConnectedDevices(this.client.Devices);
				});
			});
		}
	},
	scan: function () {
		this.client.startScanning();
	}
};
