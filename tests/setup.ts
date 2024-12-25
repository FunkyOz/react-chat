import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import * as React from "react";

// Add React to global scope
global.React = React;

// Automatically cleanup after each test
afterEach(() => {
    cleanup();
});
