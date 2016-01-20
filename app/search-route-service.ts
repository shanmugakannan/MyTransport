import {Injectable} from 'angular2/core'
import {SearchResult} from './search-result'

@Injectable()
export class SearchRouteService{
  getSearchResult(searchPhrase:string)
  {
    return Promise.resolve(SearchResultData);
  }
}
 
var SearchResultData : SearchResult[] =
                  [{"id": 1,"name":"Route1","match":"s"},
                   {"id": 21,"name":"Route2","match":"s"},
                   {"id": 13,"name":"Route3","match":"s"},
                   {"id": 2,"name":"Route4","match":"s"},
                   {"id": 45,"name":"Route5","match":"c"},
                   {"id": 12,"name":"Route6","match":"c"},
                   {"id": 17,"name":"Route7","match":"c"},
                   {"id": 14,"name":"Route8","match":"c"},
                   {"id": 18,"name":"Route9","match":"c"},
                   {"id": 19,"name":"Route10","match":"c"},
                   {"id": 71,"name":"Route11","match":"c"},
                   {"id": 61,"name":"Route12","match":"s"},
                   {"id": 51,"name":"Route13","match":"c"},
                   {"id": 31,"name":"Route14","match":"c"},
                   {"id": 81,"name":"Route15","match":"e"}
                  ];
