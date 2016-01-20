import {Component} from 'angular2/core';
import {SearchRouteService} from './search-route-service';
import{SearchResult} from './search-result';
import{SearchResultComponent} from './search-result.component';

@Component({
  selector:'search-route',
  templateUrl:'app/search-route.html',
  providers:[SearchRouteService],
  directives: [SearchResultComponent]
})

export class SearchRouteComponent{
  service : SearchRouteService;
  searchResult : SearchResult[];

  constructor(private _routeSearchService:SearchRouteService){
    this.service = _routeSearchService;
  }

  searchRoute(searchPhrase:string){
    this.service.getSearchResult(searchPhrase).then(routes => this.searchResult = routes)
    console.log("searching");
  }
}