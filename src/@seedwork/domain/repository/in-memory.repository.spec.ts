import Entity from "../entity/entity";
import NotFoundError from "../errors/not-found.error";
import UniqueEntityId from "../value-objects/unique-entity-id.vo";
import { InMemoryRepository } from "./in-memory.repository";

type StubEntityProps = {
  name: string;
  price: number;
};

class StubEntity extends Entity<StubEntityProps> {}

class StubInMemoryRepository extends InMemoryRepository<StubEntity> {}

describe("InMemoryRepository Unit Tests", () => {
  let repository: StubInMemoryRepository;

  beforeEach(() => {
    repository = new StubInMemoryRepository();
  });

  it("should inserts a new entity", async () => {
    const entity = new StubEntity({
      name: "foo",
      price: 1,
    });
    await repository.insert(entity);
    expect(entity.toJSON()).toStrictEqual(repository.items[0].toJSON());
  });

  it("should throws an error when entity is not found", async () => {
    expect(repository.findById("fake_id")).rejects.toThrow(
      new NotFoundError(`Entity Not Found using ID fake_id`)
    );

    expect(
      repository.findById(
        new UniqueEntityId("c31e7d81-d17c-4cd1-aace-cd9004d9668c")
      )
    ).rejects.toThrow(
      new NotFoundError(
        `Entity Not Found using ID c31e7d81-d17c-4cd1-aace-cd9004d9668c`
      )
    );
  });

  it("should finds a entity by id", async () => {
    const entity = new StubEntity({ name: "name value", price: 5 });
    await repository.insert(entity);

    let entityFound = await repository.findById(entity.id);
    expect(entity.toJSON()).toStrictEqual(entityFound.toJSON());

    entityFound = await repository.findById(entity.uniqueEntityId);
    expect(entity.toJSON()).toStrictEqual(entityFound.toJSON());
  });
});
