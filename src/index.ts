// import {DataObj} from './inheritance/CsvFileReader';
import {MatchReader} from './MatchReader';
import {CsvFileReader} from './CsvFileReader';
import {Results} from './Result';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
console.log(matchReader.matches)

const manWin1 = matchReader.matches.filter(
    (match) => (match[1] === 'Man United' && match[5] === Results.HomeWin) ||
                (match[2] === 'Man United' && match[5] === Results.AwayWin)
    )

console.log(manWin1.length)