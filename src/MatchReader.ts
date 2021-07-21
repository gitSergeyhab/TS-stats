import {CsvFileReader} from './CsvFileReader';
import {parseDate} from './util';
import {Results} from './Result';

export type MatchData = [Date, string, string, number, number, Results, string];

export class MatchReader extends CsvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
        return [
            parseDate(row[0]),
            row[1],
            row[2],
            +row[3],
            +row[4],
            row[5] as Results,
            row[6],
        ]
    }
}
