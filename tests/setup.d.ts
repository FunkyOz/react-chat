import "@testing-library/jest-dom";

declare global {
    namespace Vi {
        /* eslint-disable @typescript-eslint/no-empty-object-type */
        interface JestAssertion<T = any> extends jest.Matchers<void, T> {}
    }
}
