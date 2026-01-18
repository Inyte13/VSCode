import { test, expect } from '@playwright/test'
// No se que hace este test pero es el primero
test.describe('App', () => {
  test('muestra palabras e imagen al cargar', async ({ page }) => {
    await page.goto('http://localhost:5174/')

    const heading = await page.getByRole('heading', { level: 1 })
    await expect(heading).toBeVisible()

    const img = await page.getByRole('img')
    await expect(img).toBeVisible()
  })

  test('actualiza las palabras al hacer click en Resetear', async ({ page }) => {
    await page.goto('http://localhost:5174/')

    const heading = await page.getByRole('heading', { level: 1 })
    const initialText = await heading.textContent()

    await page.getByRole('button', { name: /Resetear/i }).click()

    await expect(heading).not.toHaveText(initialText)
  })
})
