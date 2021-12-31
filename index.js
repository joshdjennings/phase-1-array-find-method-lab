// superbowlWin = (record) => {
//     const result = record.find( record => record.result === "W" );
//     return !!result ? result.year : undefined;
//   }

function superbowlWin(record) {
	const result = record.find(record.result === 'W');
	return result;
}
superbowlWin();

const results = record.find((wins) => wins.results === 'W');
if (results === 'N/A') {
	return 'undefined';
}
