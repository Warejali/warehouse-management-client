import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <div className='blog-items my-5 primary-color text-white py-5 px-5'>
                <h3 className='text-2xl font-w mb-5'>Difference between 'Javascript' and 'node js'</h3>
                <table className="p-5 border-collapse border">
                    <thead>
                        <tr>
                            <th className="text-center p-3 border">Javascript</th>
                            <th className="text-center border ">Node js</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 border ">JavaScript is a simple programming language that runs in any browser JavaScript Engine.</td>
                            <td className="p-3 border ">Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses. </td>
                        </tr>
                        <tr>
                            <td className="p-3 border">JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting</td>
                            <td className="p-3 border">Node. js is a server-side scripting language based on the Google Chrome V8 engine.</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">JavaScript is executed in the browser</td>
                            <td className="p-3 border">Node.js gives us the ability to execute JavaScript outside the browser.</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">JavaScript is mainly used to create front end web applications or develop client-side</td>
                            <td className="p-3 border">Node.js is used on the back end development that is server-side development</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='blog-items my-5 primary-color text-white py-5 px-5'>
                <h3 className='text-2xl font-w mb-5'>Differences between 'SQL' and 'NOSQL' databases</h3>
                <table className="p-5 border-collapse border ">
                    <thead>
                        <tr>
                            <th className="text-center p-3 border ">SQL</th>
                            <th className="text-center border ">NOSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 border ">SQL stands for Structured Query Language which is basically a language used by databases.</td>
                            <td className="p-3 border">NoSQL databases are non-tabular databases and store data differently than relational tables</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">SQL databases are vertically scalable. SQL databases are table-based.</td>
                            <td className="p-3 border">NoSQL databases are horizontally scalable. NoSQL databases are document.</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">SQL databases are better for multi-row transactions</td>
                            <td className="p-3 border">NoSQL is better for unstructured data like documents or JSON.</td>
                        </tr>
                        <tr>
                            <td className="p-3 border">SQL databases have fixed or static or predefined schema.</td>
                            <td className="p-3 border">NoSQL databases have dynamic schema.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='blog-items my-5 primary-color  text-white py-5 px-5'>
                <h3 className='mb-2'>What is the purpose of JWT? </h3>
                <p>JWT mainly use for login security. becouse JWT is an open standard used to share security information between two parties (A) client (B) server.
                    Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </p>
                <h3 className='mb-2'>how does JWT work? </h3>
                <p>
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                </p>
            </div>
            <div className='blog-items my-5 primary-color  text-white py-5 px-5'>
            <h3 className='mb-2'>When should you use 'nodejs' and when should you use 'mongodb'?</h3>
                <p>
                    Node Js is a command-line tool that can be run as a regular web server and lets one run JavaScript programs.
                    Node Js is very good when you need to do several things at the same time. <br /><br /><br />

                    NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn’t fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.
                    MongoDB is the most popular of the new breed of non-relational NoSQL databases.
                </p>
            </div>
        </div>
    );
};

export default Blogs;