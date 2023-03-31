import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className="qna">
            <h3>Props vs state</h3>
            <table border="1">
                <tr>
                    <th>Props</th>
                    <th>State</th>
                </tr>
                <tr>
                    <td>Props, which stand for properties, are used to transfer data from a parent component to a child component.</td>
                    <td>State is used to maintain a component's internal state.</td>
                </tr>
                <tr>
                    <td>They are read-only, which means that the child component cannot change the properties it gets.</td>
                    <td>It is changeable, which means it may be altered by the component itself</td>
                </tr>
            </table>
            <h3>How does useState work?</h3>
            <p>The "useState" React Hook allows us to add state to functional components. It is used to handle component states without the need for classes or the development of a separate stateful component.
            When we call "useState," we get a two-element array back. The current  state value and a function for updating it. The initial state value, which can be anyJavaScript data type such as a text, integer, boolean, object, or array, is  the first element. The second component is a function that can be used to update the state value.</p>
            <h3>Purpose of useEffect other than fetching data.</h3>
            <p>Purpose of useEffect other than fetching data is:</p>
            <ol type="I">
                <li>Updating state</li>
                <li>Event listeners</li>
                <li>Animations</li>
                <li>Clean up</li>
                <li>Integration with third-party libraries</li>
            </ol>
            <h3>How Does React work?</h3>
            <p>React is a well-known JavaScript library for creating user interfaces.
            <strong>Components</strong>, <strong>Virtual DOM</strong>, <strong>State and Props</strong>, <strong>JSX</strong>, and <strong>Rendering</strong> are the foundations upon which React operates.
            Ultimately, React is intended to be quick, efficient, and simple to use. Its emphasis on components and the Virtual DOM makes it an effective tool for creating sophisticated and interactive user interfaces.</p>

        </div>
    );
};

export default Blog;