import { expect, test } from "@playwright/test";

const { describe, beforeEach } = test;

describe("Todo", () => {
  beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should write todos and delete todos when click", async ({ page }) => {
    await page.getByPlaceholder(/what should/i).fill("test todo");
    await page.getByText("Add Todo").click();
    await expect(page.getByTitle("todo")).toBeVisible();
    await page.getByText("test todo").click();
    await expect(page.getByText("test todo")).not.toBeVisible();
  });
});
