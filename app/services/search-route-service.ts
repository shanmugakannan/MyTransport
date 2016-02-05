import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {SearchResult} from '../types/search-result';
import 'rxjs/add/operator/map'

@Injectable()
export class SearchRouteService{
  constructor(public http: Http){

  }
  getSearchResult(searchPhrase:string)
  {
    //return Promise.resolve(SearchResultData);
    // return an observable
    return this.http.get('http://localhost:8080/routes/' + searchPhrase)
    .map( (responseData) => {
      return responseData.json();
    })
    .map((tasks: Array<any>) => {
      let result:Array<SearchResult> = [];
      if (tasks) {
        tasks.forEach((routeResult) => {
          result.push(
                     new SearchResult(routeResult.routeId,
                              routeResult.name,
                              routeResult.match));
        });
      }
      return result;
    });
  }
}
