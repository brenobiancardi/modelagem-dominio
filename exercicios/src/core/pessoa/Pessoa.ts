import Cpf from "../shared/Cpf";
import Entidade from "../shared/Entidade";
import NomePessoa from "../shared/NomePessoa";

export interface PessoaProps {
	id?: string;
	nome?: string;
	cpf?: string;
}

export default class Pessoa extends Entidade<Pessoa, PessoaProps> {
	readonly cpf: Cpf;
	readonly nome: NomePessoa;

	constructor(
		props: PessoaProps
	) {
		super(props);
		this.nome = new NomePessoa(props.nome);
		this.cpf = new Cpf(props.cpf);
	}
}