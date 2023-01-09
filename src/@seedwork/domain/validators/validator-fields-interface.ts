export type FieldsErrors = {
  [field: string]: string[];
};

export interface ValidatorFieldsInterface<PropsValidated> {
  errors: FieldsErrors;
  validate(data: any): boolean;
  validatedData: PropsValidated;
}

export default ValidatorFieldsInterface;
