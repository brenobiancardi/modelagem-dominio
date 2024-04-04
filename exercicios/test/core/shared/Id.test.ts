import Erros from "@/core/constants/Erros";
import Id from "@/core/shared/Id";

test("Deve criar um novo Id valido", () => {
	const id = Id.novo;
	expect(id.valor).toBeDefined();
	expect(id.novo).toBeTruthy();
})

test("Deve lançar erro ao tentar passar um id invalido", () => {
	expect(() => new Id("123")).toThrow(Erros.ID_INVALIDO);
})

test("Deve criar um novo Id valido", () => {
	const valor = Id.novo.valor;
	const id = new Id(valor);
	expect(id.valor).toBeDefined();
	expect(id.novo).toBeFalsy();
})

test("Deve verificar se dois ids são iguais", () => {
	const id1 = Id.novo;
	const id2 = new Id(id1.valor);
	expect(id1.igual(id2)).toBeTruthy();
	expect(id1.diferente(id2)).toBeFalsy();
})

test("Deve verificar se dois ids são diferentes", () => {
	const id1 = new Id();
	const id2 = new Id();
	expect(id1.igual(id2)).toBeFalsy();
	expect(id1.diferente(id2)).toBeTruthy();
})

test("Deve verificar um id undefined", () => {
	const id1 = new Id();
	expect(id1.igual(undefined as any)).toBeFalsy();
	expect(id1.diferente(undefined as any)).toBeTruthy();
})