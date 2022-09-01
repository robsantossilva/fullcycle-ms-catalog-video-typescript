import { v4 as uuidv4 } from "uuid";
import { validate as uuidValidate } from "uuid";
import InvalidUuidError from "../invalid-uuid.error";

export default class UniqueEntityId {
  constructor(public readonly id?: string) {
    this.id = id || uuidv4();
  }

  private validate() {
    const isValid = uuidValidate(this.id);
    if (!isValid) {
      throw new InvalidUuidError();
    }
  }
}
