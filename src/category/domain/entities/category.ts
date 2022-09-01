import UniqueEntityId from "./@seedwork/domain/unique-entity-id.vo";

export type CategoryProps = {
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};
// entidade - identidade, comportamento e atributos
// id auto incremento?
// politica e detalhes
// UUID - Universally Unique Identifier V4 - IETF RFC
export default class Category {
  public readonly id: UniqueEntityId;

  constructor(public readonly props: CategoryProps, id?: UniqueEntityId) {
    this.id = id || new UniqueEntityId();
    this.description = this.props.description;
    this.is_active = this.props.is_active;
    this.props.created_at = this.props.created_at ?? new Date();
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string | undefined {
    return this.props.description;
  }

  private set description(value: string) {
    this.props.description = value ?? null;
  }

  get is_active(): boolean | undefined {
    return this.props.is_active;
  }

  private set is_active(value: boolean) {
    this.props.is_active = value ?? true;
  }

  get created_at(): Date | undefined {
    return this.props.created_at;
  }
}
