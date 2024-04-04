import Usuario from "@/core/usuario/UsuarioAnemicoV1";

const usuarioValido: Usuario = {
	id: 123,
	nome: "Fulano",
	email: "fulano@zmail.com",
	senha: "123456"
}

test("Deve permitir usuario sem nome", () => {
	const usuario: Usuario = { ...usuarioValido, nome: "" }
	expect(usuario.nome).toBe("")
})

test("Deve permitir usuario com id negativo", () => {
	const usuario: Usuario = { ...usuarioValido, id: -1 }
	expect(usuario.id).toBeLessThan(0)
})

test("Deve permitir usuario com email invalido", () => {
	const usuario: Usuario = { ...usuarioValido, email: "423423lkhnkjl#$#" }
	expect(usuario.email).toBe("423423lkhnkjl#$#")
})

test("Deve permitir usuario com senha invalida", () => {
	const usuario: Usuario = { ...usuarioValido, senha: "a" }
	expect(usuario.senha).toBe("a")
})