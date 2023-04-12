import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='bg-image text-4xl text-center m-10 bg-gray-200 p-10'>Blog</h1>
            </div>
            <div className='ms-5'>
                <div>
                    <div className='font-bold text-2xl'>
                        a. When should you use context API?
                    </div>
                    <div>
                        Ans. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
                    </div>
                </div>
                <div>
                    <div className='font-bold text-2xl'>
                        b. What is a custom hook?
                    </div>
                    <div>
                        Ans. Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. Hooks are reusable functions. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". Example: useFetch.
                    </div>
                </div>
                <div>
                    <div className='font-bold text-2xl'>
                        c. What is useRef?
                    </div>
                    <div>
                        Ans. The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. useRef (initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .
                    </div>
                </div>
                <div>
                    <div className='font-bold text-2xl'>
                        d. What is useMemo?
                    </div>
                    <div>
                        Ans. The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. The useMemo Hook only runs when one of its dependencies update. This can improve performance. useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;