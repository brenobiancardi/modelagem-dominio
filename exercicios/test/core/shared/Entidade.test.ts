import Entidade, { EntidadeProps } from "@/core/shared/Entidade";
import Id from "@/core/shared/Id";

interface TesteProps extends EntidadeProps {
	nome?: string;
	idade?: number;
}

class Teste extends Entidade<Teste, TesteProps> {
	readonly nome: string;
	readonly idade: number;

	constructor(props: TesteProps) {
		super(props);
		this.nome = props.nome ?? '';
		this.idade = props.idade ?? 0;
	}
}

test("Deve comparar duas entidades diferentes", () => {
	const teste1 = new Teste({ nome: "Teste 1", idade: 1 });
	const teste2 = new Teste({ nome: "Teste 2", idade: 2 });

	expect(teste1.igual(teste2)).toBeFalsy();
	expect(teste1.diferente(teste2)).toBeTruthy();
})

test("Deve comparar duas entidades com mesmo id e atributos diferentes", () => {
	const id = Id.novo.valor;
	const teste1 = new Teste({ nome: "Teste 1", idade: 1, id });
	const teste2 = new Teste({ nome: "Teste 2", idade: 2, id });
	
	expect(teste1.igual(teste2)).toBeTruthy();
	expect(teste1.diferente(teste2)).toBeFalsy();
})

test("Deve comparar entidade com undefined ou null", () => {
	const e1 = new Teste({ nome: "Teste 1", idade: 1 });

	expect(e1.igual(undefined as any)).toBeFalsy();
	expect(e1.igual(null as any)).toBeFalsy();
	expect(e1.diferente(undefined as any)).toBeTruthy();
	expect(e1.diferente(null as any)).toBeTruthy();
})

test("Deve clonar uma entidade com nome diferentes", () => {
	const e1 = new Teste({ nome: "Teste 1", idade: 1 });
	const e2 = e1.clone({ nome: "Teste 2" });

	expect(e2.id.igual(e1.id)).toBeTruthy();
	expect(e2.nome).toBe("Teste 2");
	expect(e2.idade).toBe(e1.idade);
})