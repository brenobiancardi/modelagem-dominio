import { v4 as uuid, validate } from 'uuid';
import Erros from '../constants/Erros';

export default class Id {
	readonly valor: string;
	readonly novo: boolean;

	constructor(valor?: string) {
		this.valor = valor ?? uuid();
		this.novo = !valor;

		if (!validate(this.valor)) throw new Error(Erros.ID_INVALIDO);
	}

	static get novo() {
		return new Id();
	}

	igual(id: Id) {
		return this.valor === id?.valor;
	}

	diferente(id: Id) {
		return !this.igual(id);
	}

}