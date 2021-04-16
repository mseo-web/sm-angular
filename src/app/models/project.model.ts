import { Photo } from './photo.model';
import { Category } from './category.model';

export class Project {
  public id: number;
  public name: string;
  public description: string;
  public client: string;
  public spec: string;
  public period: string;
  public siteurl: string;
  public photo: Photo[];
  public categories: Category[];

  constructor(id: number, name: string, description: string, client: string, spec: string, period: string, siteurl: string, photo: Photo[], categories: Category[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.client = client;
    this.spec = spec;
    this.period = period;
    this.siteurl = siteurl;
    this.photo = photo;
    this.categories = categories;
  }
}
