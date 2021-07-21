import fs from 'fs'; // npm i @types/node
import {Results} from './Result';


export interface DataObj {
    date: Date,
    teamHome: string,
    teamAway: string,
    goalsHome: number,
    goalsAway: number,
    winner: string,
    referee: string,
}

export abstract class CsvFileReader<T> {
    // dataObg: DataObj[] = [];
    dataArr: T[] = [];
    

    constructor(public fileName: string) {};

    abstract mapRow(row: string[]): T;

    readToArray(): void {
        this.dataArr = fs.readFileSync(this.fileName, {encoding: 'utf-8'})
            .split('\n')
            .map((el: string): string[] => el.split(','))
            .map(this.mapRow)  /// === .map((el) => this.mapRow(el))
    }

}