import { Component } from '@angular/core';

import { Applicant } from '../../models/Applicant';
import { CommonModule } from '@angular/common';

import { FoneInputComponent } from '../fone-input/fone-input.component';
import {
	FormBuilder,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';

import Cursos from '../../../assets/dataCursos.json';
import Servicos from '../../../assets/dataServicos.json';

@Component({
	selector: 'app-main',
	standalone: true,
	templateUrl: './main.component.html',
	styleUrl: './main.component.css',
	imports: [
		CommonModule,
		FoneInputComponent,
		ReactiveFormsModule,
		FormsModule,
	],
})
export class MainComponent {
	//public a: Applicant = new Applicant();

	public formProtocolo: FormGroup;

	private CursosJson = Cursos;
	public servicos = Servicos;
	public cursos: { id: number; nome: string; modalidade: string }[] = [];
	public turno = ['Matutino', 'Noturno'];
	public modalidade = ['PRESENCIAL', 'EAD', 'HIBRIDO'];

	public isMulti = false;

	constructor(private fb: FormBuilder) {
		this.formProtocolo = this.fb.group({
			modalidade: ['', Validators.compose([Validators.required])],
			ra: ['', Validators.compose([Validators.required])],
			nome: ['', Validators.compose([Validators.required])],
			curso: ['', Validators.compose([Validators.required])],
			servicoSelecionado: ['', Validators.compose([Validators.required])],
		});
	}

	newProtocolo() {
		console.log('Novo protocolo');
	}

	loadCursos() {
		var data = this.formProtocolo.value;
		if (this.cursos.length != 0) {
			this.cursos = [];
		}
		this.getListCursos(data.modalidade);
	}

	isMultiOrNot() {
		let data = this.formProtocolo.value;
		console.log(data);

		if (data.servicoSelecionado.multi == true) {
			this.isMulti = true;
		}
		if (data.servicoSelecionado.multi == false) {
			this.isMulti = false;
		}
	}

	getListCursos(modalidade: String) {
		this.CursosJson.forEach((e) => {
			if (e.modalidade == modalidade) {
				this.cursos.push(e);
			}
		});
	}
}
