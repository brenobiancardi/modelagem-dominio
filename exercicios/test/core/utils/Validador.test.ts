import Validador from "@/core/utils/Validador"

test("Deve retornar null com texto não nulo", () => {
	const erro = Validador.naoNulo("texto", "Texto inválido");
	expect(erro).toBeNull();
})

test("Deve retornar erro com texto nulo", () => {
	const mensagemErro = "Texto inválido";
	const erro = Validador.naoNulo(null, mensagemErro);
	expect(erro).toBe(mensagemErro);
})

test("Deve retornar null com texto não vazio", () => {
	const erro = Validador.naoVazio("texto", "Texto vazio");
	expect(erro).toBeNull();
})

test("Deve retornar erro com texto invalido", () => {
	const mensagemErro = "Texto inválido";
	const erro = Validador.naoVazio("   ", mensagemErro);
	expect(erro).toBe(mensagemErro);
})

test("Deve retornar erro com texto null", () => {
	const mensagemErro = "Texto vazio";
	const erro = Validador.naoVazio(null, mensagemErro);
	expect(erro).toBe(mensagemErro);
})

test("Deve retornar erro com texto undefined", () => {
	const mensagemErro = "Texto vazio";
	const erro = Validador.naoVazio(undefined, mensagemErro);
	expect(erro).toBe(mensagemErro);
})

test("Deve retornar null com texto menor que o tamanho", () => {
	const mensagemErro = "Texto vazio";
	const erro = Validador.tamanhoMenorQue("", 6, mensagemErro);
	expect(erro).toBeNull();
})

test("Deve retornar mensagem com texto maior que o tamanho", () => {
	const mensagemErro = "Texto vazio";
	const erro = Validador.tamanhoMenorQue("texto com mais de 6 caracteres", 6, mensagemErro);
	expect(erro).toBe(mensagemErro);
})

test("Deve combinar os erros",() =>{
	const erros = Validador.combinar(
		Validador.naoNulo(null, "erro1"),
		Validador.naoVazio('', "erro2"),
		Validador.tamanhoMenorQue("", 6, "erro3")
		);
	expect(erros).toEqual(["erro1", "erro2"]);
})

test("Deve retornar erro para nenhum erro",() =>{
	const erros = Validador.combinar(
		Validador.naoVazio('a', "erro2"),
		Validador.tamanhoMenorQue("", 6, "erro3")
		);
	expect(erros).toBeNull();
})