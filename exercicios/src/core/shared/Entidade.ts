import Id from "./Id";

export interface EntidadeProps {
	id?: string;
}

export default class Entidade<Tipo, Props extends EntidadeProps> {
	readonly props: Props;
	readonly id: Id;

	constructor(props: Props) {
		this.id = new Id(props.id);
		this.props = { ...props, id: this.id.valor };
	}

	clone(novasProps: Props, ...extraArgs: any): Tipo{
		return new (this.constructor as any)(
			{
				...this.props,
				...novasProps
			},
			...extraArgs
		);
	}

	igual(outraEntidade: Entidade<Tipo, Props>) {
		return this.id.igual(outraEntidade?.id);
	}

	diferente(outraEntidade: Entidade<Tipo, Props>) {
		return this.id.diferente(outraEntidade?.id);
	}
}