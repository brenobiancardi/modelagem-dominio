import Usuario from "@/core/usuario/UsuarioAnemicoV2";

const usuarioValido = () => new Usuario(123, "Fulano", "fulano@zmail.com", "123456");

test("Deve permitir usuario sem nome", () => {
	const usuario: Usuario = usuarioValido();
	usuario.nome = undefined as any;
	expect(usuario.nome).toBeUndefined()
})

test("Deve permitir usuario com id negativo", () => {
	const usuario: Usuario = usuarioValido();
	usuario.id = -1;
	expect(usuario.id).toBeLessThan(0)
})

test("Deve permitir usuario com email invalido", () => {
	const usuario: Usuario = usuarioValido();
	usuario.email = "423423lkhnkjl#$#";
	expect(usuario.email).toBe("423423lkhnkjl#$#")
})

test("Deve permitir usuario com senha invalida", () => {
	const usuario: Usuario = usuarioValido();
	usuario.senha = "a";
	expect(usuario.senha).toBe("a")
})