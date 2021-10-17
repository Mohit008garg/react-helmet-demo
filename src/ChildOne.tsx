import React from 'react';
import { Helmet } from 'react-helmet';
function ChildOne() {
  return (
    <div className="myChildOne">
       <Helmet>
          <title>My Child One</title>
          <meta name="description" content="this is my Child one page"/>
          <meta name="keywords" content="child one page, react, react-demo, react-helmet-demo, ieelovecodingwise"/>
        </Helmet>
     ChildOne
    </div>
  );
}

export default ChildOne;
