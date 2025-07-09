import fs from "fs";
import test, { expect } from "playwright/test";


test('Verify Book Details', async ({ request }) => {

    //API Call
    const response = await request.get('https://bookcart.azurewebsites.net/api/Book');
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    //Get Response Data
    const apiData = await response.json();

    //read expected data from file
    const expectedData = JSON.parse(fs.readFileSync('booklist.json', 'utf-8'));

    for (const book of expectedData) {
        const apiBook = apiData.find((b: { bookId: any; }) => b.bookId === book.bookId);
        expect(apiBook?.title).toBe(book.title);
        expect(apiBook?.author).toBe(book.author);
        expect(apiBook?.category).toBe(book.category);
        expect(apiBook?.price).toBe(book.price);
      }

      console.log("✅ API response matches expected data!");

    

})