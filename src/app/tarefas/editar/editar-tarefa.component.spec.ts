import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarTarefaComponent } from './editar-tarefa.component';

describe('EditarTarefaComponent', () => {
  let component: EditarTarefaComponent;
  let fixture: ComponentFixture<EditarTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ EditarTarefaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
