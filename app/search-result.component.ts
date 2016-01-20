import {SearchResult} from './search-result';
import {Component} from 'angular2/core';
@Component({
  selector : 'search-result',
  templateUrl:'app/search-result.html',
  inputs:['routesFound']
})

export class SearchResultComponent{
}
