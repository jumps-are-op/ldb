global.ldbTipNo = function(tip, cell) {
	if (Vars.net.client()) {
		cell.disabled(false);
		cell.tooltip("You gonna desync if you did this");
	} else {
		if (!(tip === undefined)) {
			cell.tooltip(tip);
		}
	}
};
require("ldb/mem");
require("ldb/proc");
