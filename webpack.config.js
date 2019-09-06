var path = require("path");
module.exports = {
  entry: {
    app: './themes/sleepcalculator/assets/icons/icons.js'
  },
	output: {
		path: path.join(__dirname, "./themes/sleepcalculator/assets/js"),
		filename: 'icons.bundle.js',
	},
}