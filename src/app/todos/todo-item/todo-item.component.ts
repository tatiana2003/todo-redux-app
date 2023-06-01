import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { borrarTodo, editarTodo, toggleTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit{
  @Input() todo!: Todo;
  @ViewChild('input') txtInputFisico!: ElementRef;
  checkCompletado!: FormControl;
  txtInput!: FormControl;
  editando:boolean = false;
  constructor(private store:Store<AppState>) {}
  ngOnInit(): void {
    this.checkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.checkCompletado.valueChanges.subscribe(va=>{
      console.log(va);
    this.store.dispatch(toggleTodo({id:this.todo.id}));
    })
  }
  editar(){
    this.editando=true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }
  terminarEdicion(){
    this.editando=false;
    if (this.txtInput.invalid) {return}
    if (this.txtInput.value === this.todo.texto) {return}
    this.store.dispatch(editarTodo({id:this.todo.id, texto:this.txtInput.value}))
  }
  borrar(){
    this.store.dispatch(borrarTodo({id:this.todo.id}));
  }
}
