import AxeBuilder from "@axe-core/playwright";
import test, { expect } from "@playwright/test";
import { ACCESSIBILITY_EXCEPTION_IDS } from "./constants";
import {
  clockCanvasOrTextIsVisible,
  desktopEntriesAreVisible,
  loadApp,
  startButtonIsVisible,
  taskbarIsVisible,
} from "./functions";

test.beforeEach(loadApp);
test.beforeEach(desktopEntriesAreVisible);
test.beforeEach(taskbarIsVisible);
test.beforeEach(startButtonIsVisible);
test.beforeEach(clockCanvasOrTextIsVisible);

test("pass accessibility scan", async ({ page }) =>
  expect(
    (
      await new AxeBuilder({ page })
        .disableRules(ACCESSIBILITY_EXCEPTION_IDS)
        .analyze()
    ).violations
  ).toEqual([]));
