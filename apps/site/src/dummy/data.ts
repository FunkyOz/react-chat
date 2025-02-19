export type Message = {
    messageId: number;
    content: string;
    role: "user" | "assistant";
    createdAt: Date;
};

export type Conversation = {
    conversationId: number;
    title: string;
    messages: Message[];
};

export const conversations: Conversation[] = [
    {
        conversationId: 1,
        title: "React Component Architecture",
        messages: [
            {
                messageId: 1,
                content:
                    "What's the best way to structure a React component library?",
                role: "user",
                createdAt: new Date("2024-01-15T10:00:00Z"),
            },
            {
                messageId: 2,
                content:
                    "For a React component library, I recommend organizing components by feature or domain. Start with atomic components and compose them into more complex ones. Here's a suggested structure:\n\n1. atoms/\n2. molecules/\n3. organisms/\n4. templates/\n\nThis follows atomic design principles and makes the library more maintainable.",
                role: "assistant",
                createdAt: new Date("2024-01-15T10:01:00Z"),
            },
            {
                messageId: 3,
                content: "Should I use CSS-in-JS or separate CSS files?",
                role: "user",
                createdAt: new Date("2024-01-15T10:02:00Z"),
            },
            {
                messageId: 4,
                content:
                    "Both approaches have their merits. CSS-in-JS provides better scoping and dynamic styling, while separate CSS files offer better caching and familiarity. For a component library, CSS-in-JS often works better as it keeps styles colocated with components.",
                role: "assistant",
                createdAt: new Date("2024-01-15T10:03:00Z"),
            },
            {
                messageId: 5,
                content: "What about TypeScript? Is it worth using?",
                role: "user",
                createdAt: new Date("2024-01-15T10:04:00Z"),
            },
            {
                messageId: 6,
                content:
                    "Absolutely! TypeScript is invaluable for component libraries. It provides:\n- Type safety\n- Better documentation\n- Enhanced IDE support\n- Easier refactoring\n\nIt's especially useful when defining prop types and component interfaces.",
                role: "assistant",
                createdAt: new Date("2024-01-15T10:05:00Z"),
            },
            {
                messageId: 7,
                content: "How should I handle component testing?",
                role: "user",
                createdAt: new Date("2024-01-15T10:06:00Z"),
            },
            {
                messageId: 8,
                content:
                    "For component testing, I recommend:\n1. Unit tests with Jest and React Testing Library\n2. Snapshot tests for UI consistency\n3. Integration tests for complex components\n4. Storybook for visual testing and documentation",
                role: "assistant",
                createdAt: new Date("2024-01-15T10:07:00Z"),
            },
            {
                messageId: 81,
                content: "What about component documentation?",
                role: "user",
                createdAt: new Date("2024-01-15T10:08:00Z"),
            },
            {
                messageId: 82,
                content:
                    "For component documentation, I recommend a comprehensive approach:\n1. JSDoc comments for props and methods\n2. Storybook with MDX for interactive examples\n3. README files for setup and usage\n4. Prop-types or TypeScript interfaces\n5. Usage examples and edge cases",
                role: "assistant",
                createdAt: new Date("2024-01-15T10:09:00Z"),
            },
            {
                messageId: 83,
                content: "How should I handle component versioning?",
                role: "user",
                createdAt: new Date("2024-01-15T10:10:00Z"),
            },
            {
                messageId: 84,
                content:
                    "For component versioning, follow these practices:\n1. Semantic versioning (MAJOR.MINOR.PATCH)\n2. Maintain a detailed CHANGELOG\n3. Document breaking changes\n4. Provide migration guides\n5. Use deprecation warnings before major changes",
                role: "assistant",
                createdAt: new Date("2024-01-15T10:11:00Z"),
            },
            {
                messageId: 85,
                content:
                    "Any recommendations for component performance optimization?",
                role: "user",
                createdAt: new Date("2024-01-15T10:12:00Z"),
            },
            {
                messageId: 86,
                content:
                    "Here are key performance optimization techniques for components:\n1. Memoization with React.memo for expensive renders\n2. Lazy loading for large components\n3. Virtual scrolling for long lists\n4. Code splitting by route or feature\n5. Optimizing re-renders with useMemo and useCallback\n6. Proper key usage in lists",
                role: "assistant",
                createdAt: new Date("2024-01-15T10:13:00Z"),
            },
        ],
    },
    {
        conversationId: 2,
        title: "State Management Solutions",
        messages: [
            {
                messageId: 9,
                content:
                    "What's the best state management solution for a large React app?",
                role: "user",
                createdAt: new Date("2024-01-16T14:00:00Z"),
            },
            {
                messageId: 10,
                content:
                    "The choice depends on your app's needs. Here are popular options:\n1. Redux - for complex global state\n2. Context API - for simpler shared state\n3. Zustand - modern, lightweight alternative\n4. Jotai - atomic approach to state",
                role: "assistant",
                createdAt: new Date("2024-01-16T14:01:00Z"),
            },
            {
                messageId: 11,
                content: "Is Redux still relevant in 2024?",
                role: "user",
                createdAt: new Date("2024-01-16T14:02:00Z"),
            },
            {
                messageId: 12,
                content:
                    "Yes, Redux is still relevant, especially with Redux Toolkit simplifying its usage. It's particularly useful for:\n- Large applications\n- Complex state interactions\n- Team collaboration\n- Time-travel debugging",
                role: "assistant",
                createdAt: new Date("2024-01-16T14:03:00Z"),
            },
            {
                messageId: 13,
                content: "What about React Query for server state?",
                role: "user",
                createdAt: new Date("2024-01-16T14:04:00Z"),
            },
            {
                messageId: 14,
                content:
                    "React Query is excellent for server state management. It provides:\n- Automatic caching\n- Background updates\n- Optimistic updates\n- Error handling\n- Loading states",
                role: "assistant",
                createdAt: new Date("2024-01-16T14:05:00Z"),
            },
            {
                messageId: 15,
                content: "How do these solutions work together?",
                role: "user",
                createdAt: new Date("2024-01-16T14:06:00Z"),
            },
            {
                messageId: 16,
                content:
                    "You can combine them effectively:\n- React Query for server state\n- Redux/Zustand for complex client state\n- Context for theme/auth\n- Local state for UI components",
                role: "assistant",
                createdAt: new Date("2024-01-16T14:07:00Z"),
            },
        ],
    },
    {
        conversationId: 3,
        title: "Performance Optimization",
        messages: [
            {
                messageId: 17,
                content: "How can I improve my React app's performance?",
                role: "user",
                createdAt: new Date("2024-01-17T09:00:00Z"),
            },
            {
                messageId: 18,
                content:
                    "Here are key strategies for React performance optimization:\n1. Code splitting\n2. Lazy loading\n3. Memoization\n4. Virtual list for long lists\n5. Image optimization",
                role: "assistant",
                createdAt: new Date("2024-01-17T09:01:00Z"),
            },
            {
                messageId: 19,
                content: "What's the impact of using React.memo?",
                role: "user",
                createdAt: new Date("2024-01-17T09:02:00Z"),
            },
            {
                messageId: 20,
                content:
                    "React.memo prevents unnecessary re-renders by memoizing components. It's useful for:\n- Components with expensive renders\n- Components that receive the same props frequently\n- Pure components",
                role: "assistant",
                createdAt: new Date("2024-01-17T09:03:00Z"),
            },
            {
                messageId: 21,
                content: "Should I use useMemo and useCallback everywhere?",
                role: "user",
                createdAt: new Date("2024-01-17T09:04:00Z"),
            },
            {
                messageId: 22,
                content:
                    "No, use them judiciously. Only apply useMemo and useCallback when:\n1. Computations are expensive\n2. Functions are passed to optimized child components\n3. References need to be stable",
                role: "assistant",
                createdAt: new Date("2024-01-17T09:05:00Z"),
            },
            {
                messageId: 23,
                content: "What tools can I use to measure performance?",
                role: "user",
                createdAt: new Date("2024-01-17T09:06:00Z"),
            },
            {
                messageId: 24,
                content:
                    "Several tools are available:\n1. React DevTools Profiler\n2. Chrome Performance tab\n3. Lighthouse\n4. web-vitals library\n5. Performance monitoring services",
                role: "assistant",
                createdAt: new Date("2024-01-17T09:07:00Z"),
            },
        ],
    },
    {
        conversationId: 4,
        title: "React Hooks Best Practices",
        messages: [
            {
                messageId: 25,
                content: "What are some best practices for custom hooks?",
                role: "user",
                createdAt: new Date("2024-01-18T11:00:00Z"),
            },
            {
                messageId: 26,
                content:
                    "Here are key best practices for custom hooks:\n1. Start with 'use' prefix\n2. Keep them focused and reusable\n3. Handle cleanup properly\n4. Document dependencies\n5. Return consistent values",
                role: "assistant",
                createdAt: new Date("2024-01-18T11:01:00Z"),
            },
            {
                messageId: 27,
                content: "How do I handle side effects properly?",
                role: "user",
                createdAt: new Date("2024-01-18T11:02:00Z"),
            },
            {
                messageId: 28,
                content:
                    "For side effects:\n1. Use useEffect cleanup function\n2. Avoid infinite loops\n3. Handle race conditions\n4. Consider using useLayoutEffect for DOM measurements\n5. Keep dependencies array accurate",
                role: "assistant",
                createdAt: new Date("2024-01-18T11:03:00Z"),
            },
            {
                messageId: 29,
                content:
                    "What's the difference between useEffect and useLayoutEffect?",
                role: "user",
                createdAt: new Date("2024-01-18T11:04:00Z"),
            },
            {
                messageId: 30,
                content:
                    "useLayoutEffect runs synchronously after DOM mutations, while useEffect runs asynchronously. Use useLayoutEffect for:\n- DOM measurements\n- Preventing visual flickers\n- Immediate DOM updates",
                role: "assistant",
                createdAt: new Date("2024-01-18T11:05:00Z"),
            },
            {
                messageId: 31,
                content: "When should I create a custom hook?",
                role: "user",
                createdAt: new Date("2024-01-18T11:06:00Z"),
            },
            {
                messageId: 32,
                content:
                    "Create custom hooks when:\n1. Logic is reused across components\n2. Complex state management is needed\n3. Side effects need abstraction\n4. Business logic should be separated from UI",
                role: "assistant",
                createdAt: new Date("2024-01-18T11:07:00Z"),
            },
        ],
    },
    {
        conversationId: 5,
        title: "Testing Strategies",
        messages: [
            {
                messageId: 33,
                content:
                    "What's the best approach for testing React components?",
                role: "user",
                createdAt: new Date("2024-01-19T13:00:00Z"),
            },
            {
                messageId: 34,
                content:
                    "For React components, focus on:\n1. User behavior over implementation\n2. Integration tests over unit tests\n3. Accessibility testing\n4. Visual regression testing\n5. End-to-end testing for critical paths",
                role: "assistant",
                createdAt: new Date("2024-01-19T13:01:00Z"),
            },
            {
                messageId: 35,
                content: "How do I test custom hooks?",
                role: "user",
                createdAt: new Date("2024-01-19T13:02:00Z"),
            },
            {
                messageId: 36,
                content:
                    "Test custom hooks using:\n1. @testing-library/react-hooks\n2. Wrapper components\n3. Act utility\n4. Mock timers for async hooks\n5. Test different scenarios",
                role: "assistant",
                createdAt: new Date("2024-01-19T13:03:00Z"),
            },
            {
                messageId: 37,
                content: "What about testing async operations?",
                role: "user",
                createdAt: new Date("2024-01-19T13:04:00Z"),
            },
            {
                messageId: 38,
                content:
                    "For async operations:\n1. Use waitFor utility\n2. Mock API calls\n3. Test loading states\n4. Test error states\n5. Use fake timers for animations",
                role: "assistant",
                createdAt: new Date("2024-01-19T13:05:00Z"),
            },
            {
                messageId: 39,
                content: "Should I use snapshot testing?",
                role: "user",
                createdAt: new Date("2024-01-19T13:06:00Z"),
            },
            {
                messageId: 40,
                content:
                    "Use snapshot testing sparingly:\n1. For stable components\n2. To catch unintended changes\n3. With inline snapshots\n4. For error messages\n5. For small components",
                role: "assistant",
                createdAt: new Date("2024-01-19T13:07:00Z"),
            },
        ],
    },
    {
        conversationId: 6,
        title: "Accessibility in React",
        messages: [
            {
                messageId: 41,
                content: "How can I make my React app more accessible?",
                role: "user",
                createdAt: new Date("2024-01-20T15:00:00Z"),
            },
            {
                messageId: 42,
                content:
                    "Key accessibility practices:\n1. Semantic HTML\n2. ARIA labels\n3. Keyboard navigation\n4. Focus management\n5. Color contrast\n6. Screen reader support",
                role: "assistant",
                createdAt: new Date("2024-01-20T15:01:00Z"),
            },
            {
                messageId: 43,
                content: "What tools can I use to test accessibility?",
                role: "user",
                createdAt: new Date("2024-01-20T15:02:00Z"),
            },
            {
                messageId: 44,
                content:
                    "Useful accessibility testing tools:\n1. axe-core\n2. WAVE\n3. Lighthouse\n4. NVDA\n5. VoiceOver\n6. jest-axe for automated testing",
                role: "assistant",
                createdAt: new Date("2024-01-20T15:03:00Z"),
            },
            {
                messageId: 45,
                content: "How do I handle focus management?",
                role: "user",
                createdAt: new Date("2024-01-20T15:04:00Z"),
            },
            {
                messageId: 46,
                content:
                    "For focus management:\n1. Use useRef and focus()\n2. Trap focus in modals\n3. Return focus after dialogs\n4. Skip links\n5. Focus visible styles",
                role: "assistant",
                createdAt: new Date("2024-01-20T15:05:00Z"),
            },
            {
                messageId: 47,
                content: "What about dynamic content?",
                role: "user",
                createdAt: new Date("2024-01-20T15:06:00Z"),
            },
            {
                messageId: 48,
                content:
                    "For dynamic content:\n1. Use live regions\n2. Announce important changes\n3. Update page title\n4. Handle loading states\n5. Manage focus on updates",
                role: "assistant",
                createdAt: new Date("2024-01-20T15:07:00Z"),
            },
        ],
    },
    {
        conversationId: 7,
        title: "React 18 Features",
        messages: [
            {
                messageId: 49,
                content: "What are the key features in React 18?",
                role: "user",
                createdAt: new Date("2024-01-21T16:00:00Z"),
            },
            {
                messageId: 50,
                content:
                    "Key React 18 features:\n1. Automatic batching\n2. Concurrent rendering\n3. Transitions\n4. Suspense improvements\n5. New hooks (useId, useTransition)",
                role: "assistant",
                createdAt: new Date("2024-01-21T16:01:00Z"),
            },
            {
                messageId: 51,
                content: "How do I use the new Suspense features?",
                role: "user",
                createdAt: new Date("2024-01-21T16:02:00Z"),
            },
            {
                messageId: 52,
                content:
                    "Suspense can now be used for:\n1. Data fetching\n2. Code splitting\n3. Image loading\n4. Multiple boundaries\n5. Server components",
                role: "assistant",
                createdAt: new Date("2024-01-21T16:03:00Z"),
            },
            {
                messageId: 53,
                content: "What's the benefit of automatic batching?",
                role: "user",
                createdAt: new Date("2024-01-21T16:04:00Z"),
            },
            {
                messageId: 54,
                content:
                    "Automatic batching:\n1. Reduces re-renders\n2. Improves performance\n3. Works in promises\n4. Consistent behavior\n5. No manual batching needed",
                role: "assistant",
                createdAt: new Date("2024-01-21T16:05:00Z"),
            },
            {
                messageId: 55,
                content: "Should I upgrade to React 18?",
                role: "user",
                createdAt: new Date("2024-01-21T16:06:00Z"),
            },
            {
                messageId: 56,
                content:
                    "Yes, upgrading is recommended for:\n1. Better performance\n2. New features\n3. Future compatibility\n4. Improved streaming\n5. Better concurrent mode support",
                role: "assistant",
                createdAt: new Date("2024-01-21T16:07:00Z"),
            },
        ],
    },
    {
        conversationId: 8,
        title: "CSS-in-JS Solutions",
        messages: [
            {
                messageId: 57,
                content: "Which CSS-in-JS library should I use?",
                role: "user",
                createdAt: new Date("2024-01-22T17:00:00Z"),
            },
            {
                messageId: 58,
                content:
                    "Popular CSS-in-JS options:\n1. Styled-components\n2. Emotion\n3. Stitches\n4. CSS Modules\n5. Vanilla Extract",
                role: "assistant",
                createdAt: new Date("2024-01-22T17:01:00Z"),
            },
            {
                messageId: 59,
                content: "What are the performance implications?",
                role: "user",
                createdAt: new Date("2024-01-22T17:02:00Z"),
            },
            {
                messageId: 60,
                content:
                    "CSS-in-JS performance considerations:\n1. Runtime overhead\n2. Bundle size\n3. Server-side rendering\n4. Cache invalidation\n5. Style injection",
                role: "assistant",
                createdAt: new Date("2024-01-22T17:03:00Z"),
            },
            {
                messageId: 61,
                content: "How does SSR work with CSS-in-JS?",
                role: "user",
                createdAt: new Date("2024-01-22T17:04:00Z"),
            },
            {
                messageId: 62,
                content:
                    "For SSR with CSS-in-JS:\n1. Style collection\n2. Critical CSS extraction\n3. Hydration\n4. Cache strategies\n5. Stream rendering support",
                role: "assistant",
                createdAt: new Date("2024-01-22T17:05:00Z"),
            },
            {
                messageId: 63,
                content: "What about TypeScript support?",
                role: "user",
                createdAt: new Date("2024-01-22T17:06:00Z"),
            },
            {
                messageId: 64,
                content:
                    "TypeScript support varies:\n1. Built-in types\n2. Theme typing\n3. Component props\n4. Style autocompletion\n5. Type safety levels",
                role: "assistant",
                createdAt: new Date("2024-01-22T17:07:00Z"),
            },
        ],
    },
    {
        conversationId: 9,
        title: "React Design Patterns",
        messages: [
            {
                messageId: 65,
                content: "What are some common React design patterns?",
                role: "user",
                createdAt: new Date("2024-01-23T18:00:00Z"),
            },
            {
                messageId: 66,
                content:
                    "Popular React patterns:\n1. Compound components\n2. Render props\n3. Custom hooks\n4. Higher-order components\n5. Context providers",
                role: "assistant",
                createdAt: new Date("2024-01-23T18:01:00Z"),
            },
            {
                messageId: 67,
                content: "When should I use compound components?",
                role: "user",
                createdAt: new Date("2024-01-23T18:02:00Z"),
            },
            {
                messageId: 68,
                content:
                    "Use compound components for:\n1. Flexible layouts\n2. Shared state\n3. Semantic markup\n4. Intuitive APIs\n5. Component composition",
                role: "assistant",
                createdAt: new Date("2024-01-23T18:03:00Z"),
            },
            {
                messageId: 69,
                content: "Are HOCs still relevant?",
                role: "user",
                createdAt: new Date("2024-01-23T18:04:00Z"),
            },
            {
                messageId: 70,
                content:
                    "HOCs are still useful for:\n1. Code reuse\n2. Cross-cutting concerns\n3. Legacy code\n4. Library integration\n5. Complex transformations",
                role: "assistant",
                createdAt: new Date("2024-01-23T18:05:00Z"),
            },
            {
                messageId: 71,
                content: "What about the provider pattern?",
                role: "user",
                createdAt: new Date("2024-01-23T18:06:00Z"),
            },
            {
                messageId: 72,
                content:
                    "Provider pattern benefits:\n1. Global state management\n2. Theme distribution\n3. Feature flags\n4. Authentication\n5. Configuration sharing",
                role: "assistant",
                createdAt: new Date("2024-01-23T18:07:00Z"),
            },
        ],
    },
    {
        conversationId: 10,
        title: "React Security",
        messages: [
            {
                messageId: 73,
                content: "How can I secure my React application?",
                role: "user",
                createdAt: new Date("2024-01-24T19:00:00Z"),
            },
            {
                messageId: 74,
                content:
                    "Security best practices:\n1. XSS prevention\n2. CSRF protection\n3. Content Security Policy\n4. Secure authentication\n5. Input validation",
                role: "assistant",
                createdAt: new Date("2024-01-24T19:01:00Z"),
            },
            {
                messageId: 75,
                content: "What about handling sensitive data?",
                role: "user",
                createdAt: new Date("2024-01-24T19:02:00Z"),
            },
            {
                messageId: 76,
                content:
                    "For sensitive data:\n1. Use HTTPS\n2. Secure storage\n3. Data encryption\n4. Token management\n5. Secure headers",
                role: "assistant",
                createdAt: new Date("2024-01-24T19:03:00Z"),
            },
            {
                messageId: 77,
                content: "How do I prevent XSS attacks?",
                role: "user",
                createdAt: new Date("2024-01-24T19:04:00Z"),
            },
            {
                messageId: 78,
                content:
                    "XSS prevention:\n1. Use dangerouslySetInnerHTML carefully\n2. Sanitize user input\n3. Content Security Policy\n4. HTTP-only cookies\n5. Escape dynamic content",
                role: "assistant",
                createdAt: new Date("2024-01-24T19:05:00Z"),
            },
            {
                messageId: 79,
                content: "What security packages do you recommend?",
                role: "user",
                createdAt: new Date("2024-01-24T19:06:00Z"),
            },
            {
                messageId: 80,
                content:
                    "Recommended security packages:\n1. helmet\n2. DOMPurify\n3. jwt-decode\n4. crypto-js\n5. secure-ls",
                role: "assistant",
                createdAt: new Date("2024-01-24T19:07:00Z"),
            },
        ],
    },
    {
        conversationId: 11,
        title: "React Code Examples",
        messages: [
            {
                messageId: 87,
                content:
                    "Can you show me some React code examples with TypeScript?",
                role: "user",
                createdAt: new Date("2024-01-20T10:00:00"),
            },
            {
                messageId: 88,
                content: `Here's a comprehensive example of a React component with TypeScript:

\`\`\`typescript
import React, { useState, useEffect, useCallback } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserListProps {
  initialUsers?: User[];
  onUserSelect?: (user: User) => void;
}

export const UserList: React.FC<UserListProps> = ({ 
  initialUsers = [], 
  onUserSelect 
}) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.example.com/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="user-list">
      {users.map((user) => (
        <div 
          key={user.id}
          className="user-item"
          onClick={() => onUserSelect?.(user)}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};
\`\`\``,
                role: "assistant",
                createdAt: new Date("2024-01-20T10:01:00"),
            },
            {
                messageId: 89,
                content:
                    "Can you show me how to implement custom hooks with TypeScript?",
                role: "user",
                createdAt: new Date("2024-01-20T10:02:00"),
            },
            {
                messageId: 90,
                content: `Here's an example of custom hooks implementation with TypeScript:

\`\`\`typescript
import { useState, useEffect, useCallback, useRef } from 'react';

// Custom hook for handling API requests
interface UseApiOptions<T> {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
  initialData?: T;
}

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useApi<T>({ 
  url, 
  method = 'GET', 
  body, 
  headers,
  initialData = null 
}: UseApiOptions<T>) {
  const [state, setState] = useState<ApiState<T>>({
    data: initialData,
    loading: true,
    error: null,
  });

  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchData = useCallback(async () => {
    try {
      // Cancel previous request if it exists
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create new AbortController for this request
      abortControllerRef.current = new AbortController();

      setState(prev => ({ ...prev, loading: true }));

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }

      const data = await response.json();
      setState({
        data,
        loading: false,
        error: null,
      });
    } catch (error) {
      if (error instanceof Error) {
        setState({
          data: null,
          loading: false,
          error,
        });
      }
    }
  }, [url, method, body, headers]);

  useEffect(() => {
    fetchData();

    return () => {
      // Cleanup: abort any ongoing requests when component unmounts
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchData]);

  // Return state and a method to manually refetch
  return {
    ...state,
    refetch: fetchData,
  };
}

// Example usage:
interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile({ userId }: { userId: number }) {
  const { data: user, loading, error } = useApi<User>({
    url: \`https://api.example.com/users/\${userId}\`,
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
\`\`\``,
                role: "assistant",
                createdAt: new Date("2024-01-20T10:03:00"),
            },
            {
                messageId: 91,
                content:
                    "Can you show me how to implement custom hooks with TypeScript?",
                role: "user",
                createdAt: new Date("2024-01-20T10:02:00"),
            },
            {
                messageId: 92,
                content: `Here's an example of custom hooks implementation with TypeScript:

\`My code\` -> Test`,
                role: "assistant",
                createdAt: new Date("2024-01-20T10:03:00"),
            },
        ],
    },
    {
        conversationId: 10,
        title: "React Security",
        messages: [
            {
                messageId: 73,
                content: "How can I secure my React application?",
                role: "user",
                createdAt: new Date("2024-01-24T19:00:00Z"),
            },
            {
                messageId: 74,
                content:
                    "Security best practices:\n1. XSS prevention\n2. CSRF protection\n3. Content Security Policy\n4. Secure authentication\n5. Input validation",
                role: "assistant",
                createdAt: new Date("2024-01-24T19:01:00Z"),
            },
        ],
    },
    {
        conversationId: 10,
        title: "React Security",
        messages: [
            {
                messageId: 73,
                content: "How can I secure my React application?",
                role: "user",
                createdAt: new Date("2024-01-24T19:00:00Z"),
            },
            {
                messageId: 74,
                content:
                    "Security best practices:\n1. XSS prevention\n2. CSRF protection\n3. Content Security Policy\n4. Secure authentication\n5. Input validation",
                role: "assistant",
                createdAt: new Date("2024-01-24T19:01:00Z"),
            },
        ],
    },
    {
        conversationId: 10,
        title: "React Security",
        messages: [
            {
                messageId: 73,
                content: "How can I secure my React application?",
                role: "user",
                createdAt: new Date("2024-01-24T19:00:00Z"),
            },
            {
                messageId: 74,
                content:
                    "Security best practices:\n1. XSS prevention\n2. CSRF protection\n3. Content Security Policy\n4. Secure authentication\n5. Input validation",
                role: "assistant",
                createdAt: new Date("2024-01-24T19:01:00Z"),
            },
        ],
    },
    {
        conversationId: 10,
        title: "React Security",
        messages: [
            {
                messageId: 73,
                content: "How can I secure my React application?",
                role: "user",
                createdAt: new Date("2024-01-24T19:00:00Z"),
            },
            {
                messageId: 74,
                content:
                    "Security best practices:\n1. XSS prevention\n2. CSRF protection\n3. Content Security Policy\n4. Secure authentication\n5. Input validation",
                role: "assistant",
                createdAt: new Date("2024-01-24T19:01:00Z"),
            },
        ],
    },
    {
        conversationId: 10,
        title: "React Security",
        messages: [
            {
                messageId: 73,
                content: "How can I secure my React application?",
                role: "user",
                createdAt: new Date("2024-01-24T19:00:00Z"),
            },
            {
                messageId: 74,
                content:
                    "Security best practices:\n1. XSS prevention\n2. CSRF protection\n3. Content Security Policy\n4. Secure authentication\n5. Input validation",
                role: "assistant",
                createdAt: new Date("2024-01-24T19:01:00Z"),
            },
        ],
    },
    {
        conversationId: 10,
        title: "React Security",
        messages: [
            {
                messageId: 73,
                content: "How can I secure my React application?",
                role: "user",
                createdAt: new Date("2024-01-24T19:00:00Z"),
            },
            {
                messageId: 74,
                content:
                    "Security best practices:\n1. XSS prevention\n2. CSRF protection\n3. Content Security Policy\n4. Secure authentication\n5. Input validation",
                role: "assistant",
                createdAt: new Date("2024-01-24T19:01:00Z"),
            },
        ],
    },
    {
        conversationId: 10,
        title: "React Security",
        messages: [
            {
                messageId: 73,
                content: "How can I secure my React application?",
                role: "user",
                createdAt: new Date("2024-01-24T19:00:00Z"),
            },
            {
                messageId: 74,
                content:
                    "Security best practices:\n1. XSS prevention\n2. CSRF protection\n3. Content Security Policy\n4. Secure authentication\n5. Input validation",
                role: "assistant",
                createdAt: new Date("2024-01-24T19:01:00Z"),
            },
        ],
    },
    {
        conversationId: 10,
        title: "React Security",
        messages: [
            {
                messageId: 73,
                content: "How can I secure my React application?",
                role: "user",
                createdAt: new Date("2024-01-24T19:00:00Z"),
            },
            {
                messageId: 74,
                content:
                    "Security best practices:\n1. XSS prevention\n2. CSRF protection\n3. Content Security Policy\n4. Secure authentication\n5. Input validation",
                role: "assistant",
                createdAt: new Date("2024-01-24T19:01:00Z"),
            },
        ],
    },
];

export const activeConversationIndex = 10;
