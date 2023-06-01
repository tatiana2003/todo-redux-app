import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { marcarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit{
  completado: boolean = false;
  constructor(private store:Store) {
    
  }
  ngOnInit(): void {
  }
  toggleAll(){
    this.completado = !this.completado;
    this.store.dispatch(marcarTodos({completado:this.completado}))
  }
}
