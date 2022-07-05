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

    category = new Category({
      name: "Movie 1",
      description: "desc",
      is_active: false,
    });
    let created_at = new Date();
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
});
