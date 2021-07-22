import {MatchData} from './MatchData';
import {WinAnalysis} from './analyzers/WinAnalysis';
import {HtmlReport} from './reportTargets/HtmlReport';

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string, filename: string): void;
}

export class Summary {
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    static winsAnalysisWithHtmlReport(team: string):Summary {
        return new Summary(new WinAnalysis(team), new HtmlReport())
    }

    buildAndPrintReport(matches: MatchData[], filename: string):void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output, filename);
    }
}