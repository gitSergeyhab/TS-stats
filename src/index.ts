import {DataObj} from './CsvFileReader';
import {MatchReader} from './MatchReader';

import {Results} from './Result';



const fileReader = new MatchReader('football.csv');
fileReader.readToArray();
console.log(fileReader.dataArr[0])

// const manWin = fileReader.dataObg.filter(({teamHome, teamAway, winner}: {teamHome: string; teamAway: string; winner: string}) => (
//     (teamHome === 'Man United' && winner === Results.HomeWin) ||
//     (teamAway === 'Man United' && winner === Results.AwayWin))
//     )
