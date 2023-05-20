import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl my-20">Blog</h1>

      <div className="bg-base-200 rounded-md my-3 my-container p-4">
        <h2 className="text-2xl font-semibold ">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <p className="">
          An access token and a refresh token are used in authentication and
          authorization systems to grant access to protected resources on a
          server. <br />
          <br />
          1. Access Token: An access token is a credential that is issued to a
          client (such as a user or an application) by an authentication server
          after a successful authentication process. It represents the client's
          authorization to access specific resources or perform certain actions
          on a server. Access tokens typically have a limited lifespan and
          expire after a certain period of time. They are used to authenticate
          subsequent API requests by including them in the request headers or as
          query parameters. <br />
          <br />
          2. Refresh Token: A refresh token is also issued by the authentication
          server during the initial authentication process. Unlike access
          tokens, refresh tokens are long-lived and are used to obtain new
          access tokens after the previous ones have expired. When an access
          token expires, the client can send the refresh token to the server to
          request a new access token without requiring the user to
          re-authenticate. Refresh tokens provide a way to maintain a persistent
          session for a longer period.
        </p>
      </div>
      <div className="bg-base-200 rounded-md my-3 my-container p-4">
        <h2 className="text-2xl font-semibold ">
          2.Compare SQL and NoSQL databases?
        </h2>
        <p className="">
          SQL and NoSQL are two different types of database management systems
          that serve different purposes and have distinct characteristics.
          Here's a comparison between SQL and NoSQL databases: <br />
          SQL Databases: <br />
          1. Structure: SQL databases are based on a relational model, where
          data is organized into tables with rows and columns. The schema
          defines the structure of the data, and relationships between tables
          are established through keys. <br />
          2. Data Integrity: SQL databases enforce ACID (Atomicity, Consistency,
          Isolation, Durability) properties, ensuring data integrity and
          transactional consistency. <br />
          NoSQL Databases: <br />
          Structure: NoSQL databases are schema-less or schema-flexible,
          allowing for a more flexible and dynamic data model. Data can be
          stored in various formats like key-value pairs, documents, columnar,
          or graphs. <br />
          Scalability: NoSQL databases are designed for horizontal scalability,
          allowing them to handle large amounts of data and high traffic loads
          across multiple servers or clusters. They can scale by adding more
          servers to the database infrastructure.
        </p>
      </div>
      <div className="bg-base-200 rounded-md my-3 my-container p-4">
        <h2 className="text-2xl font-semibold ">
          3.What is express js? What is Nest JS?
        </h2>
        <p className="">
          Express.js and Nest.js are both web application frameworks used for
          building server-side applications in JavaScript or TypeScript.
          However, they differ in their design philosophies, architectures, and
          features. <br /> <br />
          Express.js: <br /> Express.js is a minimalist, unopinionated web
          framework for Node.js. It provides a thin layer of features built on
          top of Node.js's core HTTP module, making it lightweight and flexible.
          Express.js follows a middleware-driven approach, allowing developers
          to define a chain of middleware functions to handle requests and
          responses. Middleware functions can perform various tasks such as
          parsing request bodies, handling authentication, logging, and error
          handling. <br />
          Nest.js: <br /> Nest.js is a full-featured, opinionated framework for
          building scalable and maintainable server-side applications using
          TypeScript. It is built on top of Express.js and enhances it with
          additional features and a modular architecture. Nest.js follows a
          modular structure based on Angular-like concepts such as modules,
          controllers, services, and decorators. This modular approach promotes
          code organization and separation of concerns.
        </p>
      </div>
      <div className="bg-base-200 rounded-md my-3 my-container p-4">
        <h2 className="text-2xl font-semibold ">
          4. What is MongoDB aggregate and how does it work ?
        </h2>
        <p className="">
          In MongoDB, the aggregate function is used to perform complex data
          aggregation operations on collections. It allows you to process and
          transform data within MongoDB, combining multiple stages into a
          pipeline to perform operations like filtering, grouping, sorting, and
          computing aggregated results. <br />
          The aggregation pipeline in MongoDB consists of multiple stages, where
          each stage takes the input from the previous stage, performs a
          specific operation, and passes the result to the next stage. Here's a
          high-level overview of the aggregate function and its stages: <br />
          Match: The match stage filters documents based on specified criteria,
          similar to the find operation. It uses MongoDB's query language to
          define conditions for document selection. <br />
          Project: The project stage reshapes documents, allowing you to
          include, exclude, or transform fields. It is used to create new
          fields, compute expressions, rename fields, or discard unnecessary
          fields.
          <br />
          Group: The group stage groups documents by a specified key and allows
          you to perform calculations or aggregations on grouped data. It can
          calculate sums, averages, counts, and more using various accumulator
          operators.
        </p>
      </div>
    </div>
  );
};

export default Blog;
