import React from "react";

const WordOrdinal = ({ number, shouldBeTitleCase }) => {
	const positionParser = (number, shouldBeTitleCase) => {
		let position;

		const subPositionParser = (number, shouldBeTitleCase) => {
			let subPosition;
			switch (true) {
				case number === 20:
					subPosition = "twenty";
					break;
				case number === 30:
					subPosition = "thirty";
					break;
				case number === 40:
					subPosition = "forty";
					break;
				case number === 50:
					subPosition = "fifty";
					break;
				case number === 60:
					subPosition = "sixty";
					break;
				case number === 70:
					subPosition = "seventy";
					break;
				case number === 80:
					subPosition = "eighty";
					break;
				case number === 90:
					subPosition = "ninety";
					break;
				default:
					subPosition = "";
					break;
			}
			return shouldBeTitleCase ? toTitleCase(subPosition) : subPosition;
		};

		if (number > 20 && !number.toString().endsWith("0")) {
			const firstPosition = subPositionParser(
				+(number.toString().split("")[0] + "0"),
				shouldBeTitleCase
			);
			const secondPosition =
				"-" +
				positionParser(+number.toString().split("")[1], shouldBeTitleCase);
			const newPosition = (firstPosition + secondPosition).toString();
			return newPosition;
		}
		switch (true) {
			case number === 1:
				position = "first";
				break;
			case number === 2:
				position = "second";
				break;
			case number === 3:
				position = "third";
				break;
			case number === 4:
				position = "fourth";
				break;
			case number === 5:
				position = "fifth";
				break;
			case number === 6:
				position = "sixth";
				break;
			case number === 7:
				position = "seventh";
				break;
			case number === 8:
				position = "eighth";
				break;
			case number === 9:
				position = "ninth";
				break;
			case number === 10:
				position = "tenth";
				break;
			case number === 11:
				position = "eleventh";
				break;
			case number === 12:
				position = "twelfth";
				break;
			case number === 13:
				position = "thirteenth";
				break;
			case number === 14:
				position = "fourteenth";
				break;
			case number === 15:
				position = "fifteenth";
				break;
			case number === 16:
				position = "sixteenth";
				break;
			case number === 17:
				position = "seventeenth";
				break;
			case number === 18:
				position = "eighteenth";
				break;
			case number === 19:
				position = "nineteenth";
				break;
			case number === 20:
				position = "twentieth";
				break;
			case number === 30:
				position = "thirtieth";
				break;
			case number === 40:
				position = "fortieth";
				break;
			case number === 50:
				position = "fiftieth";
				break;
			case number === 60:
				position = "sixtieth";
				break;
			case number === 70:
				position = "seventieth";
				break;
			case number === 80:
				position = "eightieth";
				break;
			case number === 90:
				position = "ninetieth";
				break;
			case number === 100:
				position = "hundredth";
				break;
			default:
				position = "invalid";
		}
		return shouldBeTitleCase ? toTitleCase(position) : position;
	};
	return <span>{positionParser(number, shouldBeTitleCase)}</span>;
};

export default WordOrdinal;

const toTitleCase = (string) => {
	return string
		.split(" ")
		.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
		.join(" ");
};
