import { browser } from "protractor";

export default async function globalTeardown() {
    await browser.close();
}

module.exports = async () => {
    console.log('Global teardown executed.');
};
