import React from 'react';
import ContentBackground from './ContentBackground';

const PageTemplate = (props) => {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <ContentBackground />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-prose mx-auto prose prose-lg">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;
