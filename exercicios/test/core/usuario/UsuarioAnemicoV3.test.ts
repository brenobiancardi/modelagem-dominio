import Erros from "@/core/constants/Erros";
import Usuario from "@/core/usuario/UsuarioAnemicoV3";

const usuarioValido = () => new Usuario(123, "Fulano", "fulano@zmail.com", "123456");

test("Deve permitir usuario sem nome", () => {
	const usuario: Usuario = usuarioValido();
	usuario.setNome('')
	expect(usuario.getNome()).toBe('')
})

test("Deve permitir usuario com id negativo", () => {
	const usuario: Usuario = usuarioValido();
	usuario.setId(-1);
	expect(usuario.getId()).toBeLessThan(0)
})

test("Deve permitir usuario com email invalido", () => {
	const usuario: Usuario = usuarioValido();
	usuario.setEmail("423423lkhnkjl#$#");
	expect(usuario.getEmail()).toBe(usuarioValido().getEmail())
})

test("Deve lançar erro ao alterar usuario com senha menor que 6 caracteres", () => {
	const usuario: Usuario = usuarioValido();
	expect(() => usuario.setSenha("a")).toThrow(Erros.SENHA_INVALIDA)
})

test("Deve alterar usuario com senha quando ela possuir mais que 6 caracteres", () => {
	const novaSenhaValida = "teste@123"
	const usuario: Usuario = usuarioValido();

	usuario.setSenha(novaSenhaValida);

	expect(usuario.getSenha()).toBe(novaSenhaValida)
})