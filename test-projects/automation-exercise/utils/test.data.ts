
import {faker} from '@faker-js/faker';
import type { TestUser } from './test.data.types';

export function createTestUser(overrides?: Partial<TestUser>): TestUser {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    fullName: faker.person.fullName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zip: faker.location.zipCode(),
    ...overrides,
  };
}