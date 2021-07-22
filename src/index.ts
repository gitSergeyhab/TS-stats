import {MatchReader} from './MatchReader';
import {CsvFileReader} from './CsvFileReader';
import {WinAnalysis} from './analyzers/WinAnalysis';
import {ConsoleReport} from './reportTargets/ConsoleReport';
import {HtmlReport} from './reportTargets/HtmlReport';

import {Summary} from './Summary';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinAnalysis('Man City'), new ConsoleReport())
summary.buildAndPrintReport(matchReader.matches, '');

const summary2 = new Summary(new WinAnalysis('Man City'), new HtmlReport())
summary2.buildAndPrintReport(matchReader.matches, 'report.html');



//static
const matchReader1 = MatchReader.fromCsv('football.csv');
matchReader1.load();
const summary3 = Summary.winsAnalysisWithHtmlReport('Man United');
summary3.buildAndPrintReport(matchReader1.matches, 'report2.html');