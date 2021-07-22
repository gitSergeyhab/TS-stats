import {MatchData} from '../MatchData';
import {Results} from '../Result'
import {Analyzer} from '../Summary'

export class WinAnalysis implements Analyzer{
    
    constructor(public team: string){}
    
    run(matches: MatchData[]): string {
        let wins = 0;
        for (let match of matches) {
            if ((match[1] === this.team && match[5] === Results.HomeWin) ||
                (match[2] === this.team && match[5] === Results.AwayWin)) {
                    wins++;
            }
        }
        return `team ${this.team} won ${wins} times`;
    }
}