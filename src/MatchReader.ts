import {CsvFileReader} from './CsvFileReader';
import {parseDate} from './util';
import {Results} from './Result';
import {MatchData} from './MatchData';

export interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    constructor(public reader: DataReader){}

    matches: MatchData[] = [];

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((el: string[]): MatchData => ([
            parseDate(el[0]),
            el[1],
            el[2],
            +el[3],
            +el[4],
            el[5] as Results,
            el[6],
        ]));
    }

}
