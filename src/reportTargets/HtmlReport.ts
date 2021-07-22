import {OutputTarget} from '../Summary';
import fs from 'fs';


export class HtmlReport implements OutputTarget {
    print(report: string, filename: string): void {
        fs.writeFileSync(filename, `<h2>${report}</h2>`)
    }
}