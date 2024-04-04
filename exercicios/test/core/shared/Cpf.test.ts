import Erros from "@/core/constants/Erros";
import Cpf from "@/core/shared/Cpf";
import RegiaoCpf from "@/core/shared/RegiaoCpf";

test("Deve retornar cpf inválido(false) para string vazia", () => {
	expect(Cpf.isValido("")).toBeFalsy();
})

test("Deve retornar cpf inválido(false) para string com numero de caracteres diferente de 11", () => {
	expect(Cpf.isValido("1")).toBeFalsy();
	expect(Cpf.isValido("12345")).toBeFalsy();
	expect(Cpf.isValido("1234567890")).toBeFalsy();
	expect(Cpf.isValido("123456789012")).toBeFalsy();
})

test("Deve retornar cpf inválido(false) para string com mais de 11 caracteres", () => {
	expect(Cpf.isValido("123456789012")).toBeFalsy();
})

test("Deve retornar cpf inválido(false) para string com caracteres não numéricos", () => {
	expect(Cpf.isValido("1234567890a")).toBeFalsy();
})

test("Deve retornar cpf inválido(false) para null e undefined", () => {
	expect(() => new Cpf(null as any)).toThrow(Erros.CPF_INVALIDO);
	expect(() => new Cpf(undefined as any)).toThrow(Erros.CPF_INVALIDO);
})


test("Deve retornar cpf inválido(false) para o CPF '12345678901'", () => {
	expect(Cpf.isValido("12345678901")).toBeFalsy();
})

test("Deve retornar cpf válido(true) para os digitos verificadores validos", () => {
	expect(Cpf.isValido("280.012.389-38")).toBeTruthy();
	expect(Cpf.isValido("992.317.598-76")).toBeTruthy();
	expect(Cpf.isValido("683.250.102-15")).toBeTruthy();
	expect(Cpf.isValido("501.716.581-91")).toBeTruthy();
})

test("Deve retornar os digitos verificadores do cpf", () => {
	expect(new Cpf("280.012.389-38").digitoVerificador).toBe("38");
	expect(new Cpf("992.317.598-76").digitoVerificador).toBe("76");
	expect(new Cpf("683.250.102-15").digitoVerificador).toBe("15");
	expect(new Cpf("501.716.581-91").digitoVerificador).toBe("91");
})

test("Deve retornar o cpf formatado", () => {
	expect(new Cpf("28001238938").formatado).toBe("280.012.389-38");
})

test("Deve retornar erro para cpf com digito verificador invalido", () => {
	expect(() => new Cpf("280.012.389-00")).toThrow(Erros.CPF_INVALIDO);
})

test("Deve retornar a região do CPF", () => {
	expect(new Cpf("28001238938").regiao).toBe(RegiaoCpf.PR_SC);
	expect(new Cpf("99231759876").regiao.codigo).toBe(8);
	expect(new Cpf("683.250.102-15").regiao.estados[0]).toBe("AC");
	expect(new Cpf("501.716.581-91").regiao).toBe(RegiaoCpf.DF_GO_MS_MT_TO);
})