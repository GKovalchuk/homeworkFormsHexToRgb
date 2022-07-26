function OutputField(props) {

	const hex = props.hexColor;
	console.log(hex);
	function toRgbColor(hexColor) {
		let rgb = [];
		console.log(hexColor[1] + hexColor[2]);
		rgb[0] = parseInt(hexColor[1] + hexColor[2], 16).toString(10);
		rgb[1] = parseInt(hexColor[3] + hexColor[4], 16).toString(10);
		rgb[2] = parseInt(hexColor[5] + hexColor[6], 16).toString(10);
		if (isNaN(rgb[0]) !== true && isNaN(rgb[1]) !== true && isNaN(rgb[2]) !== true) {
			console.log(`rgb(${rgb})`)
			return `rgb(${rgb})`
		} else {
			console.log(`Ошибка!`)
			return `Ошибка!`
		}

	}
	return (
		<div className="rgb__form">
			{toRgbColor(hex)}
		</div>

	);
}

export default OutputField;