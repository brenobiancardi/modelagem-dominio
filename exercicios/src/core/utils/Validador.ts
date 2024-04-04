export default class Validador {
	static combinar(...erros: (string | null)[]): string[] | null {
		const errosFiltrados = erros.filter(erro => erro !== null) as string[];
		return errosFiltrados.length > 0 ? errosFiltrados : null;
	}

	static naoNulo(valor: any, erro: string) {
		return valor !== null && valor !== undefined ? null : erro;
	}

	static naoVazio(valor: string | null | undefined, erro: string) {
		if (Validador.naoNulo(valor, erro)) return erro;
		return valor!.trim().length > 0 ? null : erro;
	}

	static tamanhoMenorQue(valor: string | any[], tamanho: number, erro: string) {
		return valor.length < tamanho ? null : erro;
	}

	static tamanhoMaiorQue(valor: string | any[], tamanho: number, erro: string) {
		return valor.length > tamanho ? null : erro;
	}

	static regex(valor: string, regex: RegExp, erro: string) {
		return regex.test(valor) ? null : erro;
	}

	static eEmailValido(email: string) {
		const regex = /\S+@\S+\.\S+/;
		return regex.test(email);
	}
}