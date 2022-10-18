import { Component, Input } from '@angular/core';

class StudentType {
  private name: string;
  private surname: string;
  private index_nr: number;

  constructor(name: string, surname: string, index_nr: number) {
    this.name = name;
    this.surname = surname;
    this.index_nr = index_nr;
  }

  public get getName(): string { return this.name; }
  public get getSurname(): string { return this.surname; }
  public get getIndex_nr(): number { return this.index_nr; }
  public set setName(name: string) { this.name = name; }
  public set setSurname(surname: string) { this.surname = surname};
  public set setIndex_nr(index_nr: number) { this.index_nr}

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  student1 : StudentType = new StudentType("Jan", "Kowalski", 1);
  student2 : StudentType = new StudentType("Jan", "Kowalski", 2);

  constructor(){
    this.student2.setName = "Jan";
    this.student2.setSurname = "Kowalski";
    this.student2.setIndex_nr = 1;
  }
}
