import fs from 'fs'; // npm i @types/node
// import {DataReader} from './MatchReader';

export class CsvFileReader {
    data: string[][] = [];

    constructor(public fileName: string) {};

    read(): void {
        this.data = fs.readFileSync(this.fileName, {encoding: 'utf-8'})
            .split('\n')
            .map((el: string): string[] => el.split(','))
    }
}