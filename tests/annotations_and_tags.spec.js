import { test } from '@playwright/test';

//Annotations = skip, fail, fixme, slow, Only, skip conditionally

test.skip('skip this test', async ({ page }) =＞ {
    // This test will be skipped
  });

  test('not yet ready', async ({ page }) =＞ {
    test.fail();
  });

  test.fixme('test to be fixed', async ({ page }) =＞ {
});

test('slow test', async ({ page }) =＞ {
    test.slow();
  });

  test.only('focus this test', async ({ page }) =＞ {
    // Run only focused tests in the entire project
  });
  