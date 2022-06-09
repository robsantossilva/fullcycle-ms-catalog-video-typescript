import Category from "./category";

describe("New Category", () => {
  it("should be able to create a new category", () => {
    const props = {
      name: "Test Category",
      description: "Test Category Description",
      is_active: true,
      created_at: new Date(),
    };
    const category = new Category(props);
    expect(category.props).toStrictEqual({
      name: props.name,
      description: props.description,
      is_active: props.is_active,
      created_at: props.created_at,
    });
  });
});
