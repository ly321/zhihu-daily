const url="http://localhost:8080";
import * as zurl from 'url';
export function imgFilter(value:any){
    if (!value) {
        return "";
    }
    var { path } = zurl.parse(value);
    return url + path;
}
