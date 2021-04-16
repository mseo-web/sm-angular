import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../../models/project.model';
import { Category } from '../../models/category.model';
import { Photo } from '../../models/photo.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: [ './project-detail.component.css' ],
  providers: [ProjectsService]
})
export class ProjectDetailComponent implements OnInit {
  project: Project;
  categoriesArr: Category[] = [];
  photoArr: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    const projectId = +this.route.snapshot.paramMap.get('id');
    this.projectsService.getProjectById(projectId).subscribe(project => {
      this.project = project;
      this.categoriesArr = project.categories;
      this.photoArr = project.photo;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
