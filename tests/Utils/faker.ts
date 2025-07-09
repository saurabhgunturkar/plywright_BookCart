import { faker } from "@faker-js/faker";


export const userRegistrationData = () => {
    const firstName = faker.person.firstName();
    const lastname = faker.person.lastName();
    const username = faker.internet.username();
    const password = generateStrongPassword();
    const gender = faker.helpers.arrayElement(["male","female"])
    const confirmpassword = password;
    return {
        firstName,
        lastname,
        username,
        password,
        confirmpassword,
        gender
    }
}

function generateStrongPassword(length = 8): string {
      const upper = faker.string.alpha({ casing: 'upper', length: 1 });
      const lower = faker.string.alpha({ casing: 'lower', length: 1 });
      const digit = faker.string.numeric(1);
      const rest = faker.string.alphanumeric(length - 3);
      const full = (upper + lower + digit + rest);
      return full;
}
    
    