import RegiaoCpf from "../shared/RegiaoCpf";
import Pessoa from "./Pessoa";

export default class PessoasPorRegiao {
	constructor(private pessoas: Pessoa[]) { }

	agrupar(): Map<RegiaoCpf, Pessoa[]> {
		return this.pessoas.reduce((map, pessoa) => {
			const regiao = pessoa.cpf.regiao;
			const pessoas = map.get(regiao) ?? [];
			pessoas.push(pessoa);
			map.set(regiao, pessoas);
			return map;
		}, new Map<RegiaoCpf, Pessoa[]>());
	}
}