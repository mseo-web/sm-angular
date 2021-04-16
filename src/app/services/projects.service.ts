import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Project } from '../models/project.model';

import { MessageService } from './message.service';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProjectsService {
  baseUrl = 'https://laravel.smartexweb.kz';
  projectsUrl = this.baseUrl + '/api/projects';
  projectsByCategoryUrl = this.baseUrl + '/api/projectsByCategory';
  projectByIdUrl = this.baseUrl + '/api/project';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getProjectsData() {
    var projectsData = this.http.get(this.projectsUrl);
    return projectsData;
  }
  /** GET all projects from the server */
  getAllProjects() : Observable<Project[]> {
    return this.http.get(this.projectsUrl).pipe(map(data=>{
        let projectsArr = data["data"];
        return projectsArr.map(function(project: Project) {
            return project;
          });
    }));
  }
  /** GET projects by category */
  getProjectsByCategory(category: number) : Observable<Project[]> {
    // console.log('category: ' + category);
    var projectsByCategory: any = [];
    if(category == 99) {
      projectsByCategory = this.http.get(this.projectsUrl).pipe(map(data=>{
        let projectsArr = data["data"];
        return projectsArr.map(function(project: Project) {
            return project;
          });
      }));
    } else {
      projectsByCategory = this.http.get(`${this.projectsByCategoryUrl}?category=${category}`).pipe(map(data=>{
        let projectsArr = data["data"];
        return projectsArr.map(function(project: Project) {
            return project;
          });
      }));
    }
    return projectsByCategory;
  }

  getProjectById(id: number): Observable<Project> {
    const url = `${this.projectByIdUrl}/${id}`;
    return this.http.get<Project>(url).pipe(
      tap(_ => this.log(`fetched project id=${id}`)),
      catchError(this.handleError<Project>(`getProjectById id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ProjectsService: ${message}`);
  }
}
