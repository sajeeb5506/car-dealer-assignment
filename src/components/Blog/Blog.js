import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <h2 className='text-center my-3'>Difference Between JavaScript and Node JS</h2>
            <table class="table table-hover">
  <thead>
    <tr>
    
      <th scope="col"> Comparison</th>
      <th scope="col">JavaScript</th>
      <th scope="col">Node JS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td>JavaScript is a programming language. It is running in any web browser with a proper browser engine.</td>
      <td>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</td>
     
    </tr>
    <tr>
      <th scope="row">Utility</th>
      <td>	Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</td>
      <td>It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</td>
   
    </tr>
    <tr>
      <th scope="row">Running Engine</th>
      <td>	JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</td>
       <td> Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</td>
    </tr>
  </tbody>
</table>


    
<h2 className='text-center my-3'>Difference Between SQL and NoSQL</h2>
            <table class="table table-hover">
  <thead>
    <tr>
    
      <th scope="col">SQL</th>
      <th scope="col">NoSQL JS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>1 . SQL databases are vertically scalable.</td>
      <td>1. NoSQL databases are horizontally scalable.</td>
     
    </tr>
    <tr>
     
      <td>2. SQL databases are table-based.</td>
      <td>	2. NoSQL databases are document, key-value, graph, or wide-column stores.</td>
   
    </tr>
    <tr>

      <td>3. SQL databases are better for multi-row transactions.</td>
       <td> 3. NoSQL is better for unstructured data like documents or JSON.</td>
    </tr>
    <tr>

      <td>4. SQL databases are relational.</td>
       <td> 4. NoSQL databases are non-relational.</td>
    </tr>
    <tr>

      <td>5. SQL databases use structured query language and have a predefined schema.</td>
       <td> 5. NoSQL databases have dynamic schemas for unstructured data.</td>
    </tr>
    <tr>

      <td>6. Some examples of SQL databases include MySQL, Oracle, PostgreSQL, and Microsoft SQL Server.</td>
       <td>6. NoSQL database examples include MongoDB, BigTable, Redis, RavenDB Cassandra, HBase, Neo4j, and CouchDB.</td>
    </tr>
  </tbody>
</table>
        </div>
    );
};

export default Blog;