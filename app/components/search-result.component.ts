import {SearchResult} from '../types/search-result';
import {Component} from 'angular2/core';
@Component({
  selector : 'search-result',
  templateUrl:'app/templates/search-result.html',
  inputs:['routesFound'],
  styleUrls:['app/styles/searchResult.css']
})

export class SearchResultComponent{
}
