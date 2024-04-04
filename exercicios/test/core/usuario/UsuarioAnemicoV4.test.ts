import Erros from "@/core/constants/Erros";
import Usuario from "@/core/usuario/UsuarioAnemicoV4";

const usuarioValido = () => new Usuario(123, "Fulano", "fulano@zmail.com", "123456");

test("Deve permitir usuario sem nome", () => {
	const usuario: Usuario = usuarioValido();
	usuario.nome = undefined as any;
	expect(usuario.nome).toBeUndefined();
})

test("Deve permitir usuario sem nome", () => {
	const usuario: Usuario = usuarioValido();
	usuario.nome = '';
	expect(usuario.nome).toBe('')
})

test("Deve permitir usuario com id negativo", () => {
	const usuario: Usuario = usuarioValido();
	usuario.id = -1;
	expect(usuario.id).toBeLessThan(0)
})

test("Deve permitir usuario com email invalido", () => {
	const usuario: Usuario = usuarioValido();
	usuario.email = "423423lkhnkjl#$#";
	expect(usuario.email).toBe(usuarioValido().email)
})

test("Deve alterar email quando valido", () => {
	const usuario: Usuario = usuarioValido();
	const email = "teste@email.com";
	usuario.email = email;
	expect(usuario.email).toBe(email)
})

test("Deve lançar erro ao alterar usuario com senha menor que 6 caracteres", () => {
	const usuario: Usuario = usuarioValido();
	expect(() => usuario.senha = "a").toThrow(Erros.SENHA_INVALIDA)
})

test("Deve alterar usuario com senha quando ela possuir mais que 6 caracteres", () => {
	const novaSenhaValida = "teste@123"
	const usuario: Usuario = usuarioValido();

	usuario.senha = novaSenhaValida;

	expect(usuario.senha).toBe(novaSenhaValida)
})