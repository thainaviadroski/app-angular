import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
	imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class MainComponent {
	public formProtocolo: FormGroup;

	private CursosJson = Cursos;
	public servicos = Servicos;
	public cursos: { id: number; nome: string; modalidade: string }[] = [];
	public turno = ['Matutino', 'Noturno'];
	public modalidade = ['PRESENCIAL', 'EAD', 'HIBRIDO'];

	public isMulti: boolean = false;
	public isObs: boolean = false;

	constructor(private fb: FormBuilder) {
		this.formProtocolo = this.fb.group({
			modalidade: ['', Validators.compose([Validators.required])],
			ra: ['', Validators.compose([Validators.required])],
			nome: ['', Validators.compose([Validators.required])],
			email: ['', Validators.compose([Validators.required])],
			fone: ['', Validators.compose([Validators.required])],
			curso: ['', Validators.compose([Validators.required])],
			turma: ['', Validators.compose([Validators.required])],
			serie: ['', Validators.compose([Validators.required])],
			turno: ['', Validators.compose([Validators.required])],
			servicoSelecionado: ['', Validators.compose([Validators.required])],
		});
	}

	newProtocolo() {
		console.info(this.formProtocolo.value);
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

		if (data.servicoSelecionado.obs == true) {
			this.isObs = true;
		}
		if (data.servicoSelecionado.obs == false) {
			this.isObs = false;
		}
	}

	getListCursos(modalidade: String) {
		this.CursosJson.forEach((e) => {
			if (e.modalidade == modalidade) {
				this.cursos.push(e);
			}
		});
	}

	// parserObjectJsToObjetcClass(data : any) : Applicant {
	// 	return a : Applicant = new Applicant(
	// 		data.ra,
	// 		data.nome,
	// 		data.curso,
	// 		data.modalidade,

	// 		data.serie,
	// 		data.servicoSelecionado,
	// 		data.turma,
	// 		data.turno
	// 	);
	// }
}
