import Category from "./category";
import { omit } from "lodash";

describe("New Category", () => {
  it("should be able to create a new category", () => {
    let category = new Category({ name: "Movie" });
    let props = omit(category.props, "created_at");
    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      is_active: true,
    });
    expect(category.props.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    category = new Category({
      name: "Movie 1",
      description: "desc",
      is_active: false,
      created_at,
    });
    expect(category.props).toStrictEqual({
      name: "Movie 1",
      description: "desc",
      is_active: false,
      created_at,
    });

    category = new Category({
      name: "Movie 2",
      description: "other desc",
    });
    expect(category.props).toMatchObject({
      name: "Movie 2",
      description: "other desc",
    });

    category = new Category({
      name: "Movie 2",
      is_active: true,
    });
    expect(category.props).toMatchObject({
      name: "Movie 2",
      is_active: true,
    });

    created_at = new Date();
    category = new Category({
      name: "Movie 2",
      created_at,
    });
    expect(category.props).toMatchObject({
      name: "Movie 2",
      created_at,
    });
  });

  test("getter of name props", () => {
    const category = new Category({ name: "Movie" });
    expect(category.name).toBe("Movie");
  });

  test("getter and setter of description props", () => {
    const category1 = new Category({ name: "Movie" });
    expect(category1.description).toBeNull();

    const category2 = new Category({
      name: "Movie",
      description: "Desc Movie",
    });
    expect(category2.description).toBe("Desc Movie");

    const category3 = new Category({
      name: "Movie",
    });
    category3["description"] = "Other Desc Movie";
    expect(category3.description).toBe("Other Desc Movie");
    category3["description"] = undefined;
    expect(category3.description).toBeNull();
    category3["description"] = null;
    expect(category3.description).toBeNull();
  });

  test("getter and setter of is_active props", () => {
    let category = new Category({
      name: "Movie",
    });
    expect(category.is_active).toBeTruthy();

    category = new Category({
      name: "Movie",
      is_active: true,
    });
    expect(category.is_active).toBeTruthy();

    category["is_active"] = false;
    expect(category.is_active).toBeFalsy();

    category = new Category({
      name: "Movie",
      is_active: false,
    });
    expect(category.is_active).toBeFalsy();

    category["is_active"] = true;
    expect(category.is_active).toBeTruthy();
  });

  test("getter of created_at prop", () => {
    let category = new Category({
      name: "Movie",
    });
    expect(category.created_at).toBeInstanceOf(Date);

    let created_at = new Date();
    category = new Category({
      name: "Movie",
      created_at,
    });
    expect(category.created_at).toBe(created_at);
  });
});
