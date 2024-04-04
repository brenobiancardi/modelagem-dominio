import RegiaoCpf from "@/core/shared/RegiaoCpf";

test("Deve criar uma RegiaoCpf por codigo", () => {
	const regiao = RegiaoCpf.porCodigo(0);

	expect(regiao.codigo).toBe(0);
	expect(regiao.estados).toEqual(["RS"]);
})

test("Deve criar uma RegiaoCpf por CPF", () => {
	const regiao = RegiaoCpf.porCpf('345.799.510-93');

	expect(regiao.codigo).toBe(0);
	expect(regiao.estados).toEqual(["RS"]);
})

test("Deve verificar se duas regiões são iguais", () => {
	const regiao1 = RegiaoCpf.porCpf('671.443.697-17');
	const regiao2 = RegiaoCpf.porCpf('054.319.017-02');

	expect(regiao1.igual(regiao2)).toBeTruthy();
	expect(regiao1.diferente(regiao2)).toBeFalsy();
	expect(regiao1 === regiao2).toBeTruthy();
})

test("Deve verificar se duas regiões como diferentes", () => {
	const regiao1 = RegiaoCpf.porCpf('671.443.697-17');
	const regiao2 = RegiaoCpf.porCpf('345.799.510-93');

	expect(regiao1.igual(regiao2)).toBeFalsy();
	expect(regiao1.diferente(regiao2)).toBeTruthy();
})

test("Deve criar um RegiaoCpf de SP", () => {
	const regiao = RegiaoCpf.SP;

	expect(regiao.codigo).toBe(8);
	expect(regiao.estados).toEqual(["SP"]);
})