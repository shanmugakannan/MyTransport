import {Component} from 'angular2/core';
import {SearchRouteService} from '../services/search-route-service';
import{SearchResult} from '../types/search-result';
import{SearchResultComponent} from './search-result.component';
import {SelectedStyleDirective} from '../directives/selected-style';

@Component({
  selector:'search-route',
  templateUrl:'app/templates/search-route.html',
  providers:[SearchRouteService],
  directives: [SearchResultComponent],
  styles:['.searchInput {height:50px;}']
})

export class SearchRouteComponent{
  service : SearchRouteService;
  searchResult : SearchResult[];

  constructor(private _routeSearchService:SearchRouteService){
    this.service = _routeSearchService;
  }

  searchRoute(searchPhrase:string){
    if(searchPhrase)
    {
      this.service.getSearchResult(searchPhrase).subscribe(routes => this.searchResult = routes)
    }
    else{
      this.searchResult = null;
    }
  }
}
