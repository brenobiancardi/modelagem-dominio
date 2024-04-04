import PessoasPorRegiao from "@/core/pessoa/PessoasPorRegiao";
import RegiaoCpf from "@/core/shared/RegiaoCpf";
import PessoaBuilder from "@/test/data/PessoaBuilder"

test('Deve agrupar pessoas por região', () => {
	const pessoas = PessoaBuilder.criarLista(10000);
	const agrupado = new PessoasPorRegiao(pessoas).agrupar();

	const pessoasSp = agrupado.get(RegiaoCpf.SP) ?? [];
	const mesmaRegiao = pessoasSp.every(p => p.cpf.regiao.igual(RegiaoCpf.SP));
	
	const pessoasEsRj = agrupado.get(RegiaoCpf.ES_RJ) ?? [];
	const regiaoDiferente = pessoasEsRj.every(p => p.cpf.regiao.diferente(RegiaoCpf.SP));

	expect(mesmaRegiao).toBeTruthy();
	expect(regiaoDiferente).toBeTruthy();
})