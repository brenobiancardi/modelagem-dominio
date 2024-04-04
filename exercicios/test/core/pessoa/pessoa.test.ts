import PessoaBuilder from "@/test/data/PessoaBuilder";

test("Deve criar uma pessoa válida", () => {
	const nome = "Fulano Silva";
	const pessoa = PessoaBuilder.criar().comNome(nome).semId().agora();

	expect(pessoa.nome.primeiroNome).toBe("Fulano");
	expect(pessoa.id).toBeDefined();
	expect(pessoa.id.novo).toBeTruthy();
})

test("Deve clonar Pessoa com nome alterado", () => {
	const pessoa = PessoaBuilder.criar().agora();

	const pessoaAlterada = pessoa.clone({ nome: "Fulano da silva alterado" });

	expect(pessoaAlterada.nome.primeiroNome).toBe("Fulano");
	expect(pessoaAlterada.nome.completo).toBe("Fulano da silva alterado");
	expect(pessoaAlterada.id.igual(pessoa.id)).toBeTruthy();
	expect(pessoaAlterada.id.novo).toBeFalsy();
	expect(pessoaAlterada.cpf.valor).toBe(pessoa.cpf.valor);
})