var sum = 1;
export default {
	index(req, res) {
		res.send("Hello World!");
	},
	math(req, res) {
		sum *= req.params.num;
		res.send("" + sum);
	},
	slow(req, res) {
		let time = Math.ceil(Math.random() * 1000);
		setTimeout(() => res.send("" + time), time);
	},
	crash(req, res) {
		process.nextTick(() => { throw new Error("where am i?"); } );
	}
};