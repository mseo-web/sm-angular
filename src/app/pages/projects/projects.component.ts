import { Component, OnInit } from '@angular/core';

import { Project } from '../../models/project.model';
import { Category } from '../../models/category.model';
import { CategoriesService } from '../../services/categories.service';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [CategoriesService, ProjectsService]
})

export class ProjectsComponent implements OnInit {
  current_projects: Project[] = [];
  server_categories: Category[] = [];
  category_all: Category = {id: 99, name: "ВСЕ", description: "all"}

  constructor(private categoriesService: CategoriesService, private projectsService: ProjectsService) { }

  // ngOnInit(){
  //   this.categoriesService.getAllCategories().subscribe((data: Category[]) => this.server_categories=data);
  //   this.projectsService.getAllProjects().subscribe((data: Project[]) => this.current_projects=data);
  // }

  ngOnInit() {
    this.categoriesService.getAllCategories().subscribe((data: Category[]) => this.server_categories=data);
    this.getProjects(99);
  }

  getProjects(category: number): void {
    this.projectsService.getProjectsByCategory(category).subscribe((data: Project[]) => {
      this.current_projects=data;
      this.server_categories.unshift(this.category_all);
    });
  }
}
