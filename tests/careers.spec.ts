import { test, expect } from '@playwright/test';

test('Quality Assurance jobs should be listed from careers page', async ({ page }) => {
    await page.goto('https://insiderone.com/careers/#open-roles');

    await expect(page).toHaveURL(/careers/);

    await page.getByText('See all teams', { exact: false }).click();

    await page.goto('https://jobs.lever.co/insiderone?team=Quality%20Assurance');

    
    await expect(page.getByRole('button', { name: 'TEAM' })).toHaveAccessibleName('Filter by Team: Quality Assurance');

    const qaLinks = page
        .getByRole('link')
        .filter({ hasText: 'Quality Assurance' });

    let linkCount = await qaLinks.count();


    for (let i = 0; i < linkCount; i++) {

        await expect(qaLinks.nth(i)).toContainText('Quality Assurance');
        await expect(qaLinks.nth(i)).toContainText(/istanbul/i);

        await qaLinks.nth(i).click();
        await expect(page.getByText('About us').isVisible)
        await page.goBack();
        await expect(qaLinks.first()).toBeVisible();
    }

    
    
});