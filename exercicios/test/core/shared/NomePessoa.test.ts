import Erros from "@/core/constants/Erros";
import NomePessoa from "@/core/shared/NomePessoa";

test("Deve lancar erro ao tentar criar nome vazio", () => {
	expect(() => new NomePessoa("")).toThrow(Erros.NOME_VAZIO);
})

test("Deve lancar erro ao tentar criar nome vazio", () => {
	expect(() => new NomePessoa(undefined)).toThrow(Erros.NOME_VAZIO);
})

test("Deve lancar erro ao tentar criar nome menor que 4 caracteres", () => {
	expect(() => new NomePessoa("abc")).toThrow(Erros.NOME_PEQUENO);
})

test("Deve lancar erro ao tentar criar nome maior que 120 caracteres", () => {
	const nomeGigante = "Pedro de Alcantara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon";
	expect(() => new NomePessoa(nomeGigante)).toThrow(Erros.NOME_GRANDE);
})

test("Deve lancar erro ao tentar criar nome sem sobrenome", () => {
	const nomeSemSobrenome = "Pedro";
	expect(() => new NomePessoa(nomeSemSobrenome)).toThrow(Erros.NOME_SEM_SOBRENOME);
})

test("Deve lancar erro ao tentar criar nome com caracteres especiais", () => {
	const nomeComCaracteresEspeciais = "Pedro bol@dão";
	expect(() => new NomePessoa(nomeComCaracteresEspeciais)).toThrow(Erros.NOME_CARACTERES_INVALIDOS);
})

test("Deve criar nome com sobrenomes", () => {
	const nome = new NomePessoa("João Silva Pereira");
	expect(nome.completo).toBe("João Silva Pereira");
	expect(nome.primeiroNome).toBe("João");
	expect(nome.ultimoSobrenome).toBe("Pereira");
	expect(nome.sobrenomes).toEqual(["Silva", "Pereira"]);
})