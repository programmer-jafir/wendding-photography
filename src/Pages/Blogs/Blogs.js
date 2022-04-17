import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='mt-3'>
            <h1 className='text-primary text-center mp-5'>QA Section</h1>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
    <Accordion.Body>
    Authentication and authorization are two different system. Authentication is the process of verifying who is. Authorization is the process of verifying that what specific applications, files, and data a user has access to. This is the main deference authentication and authorization.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
    <Accordion.Body>
    Why I am using firebase, first it is free to start. Secondary it is incredibly simple backend solution. The third reason is it is take care of every backend solution. Fourth reason is it is the cloud firestore database stretcher. The last reason is cloud function and Google analytics.
Why I am using firebase, first it is free to start. Secondary it is incredibly simple backend solution. The third reason is it is take care of every backend solution. Fourth reason is it is the cloud firestore database stretcher. The last reason is cloud function and Google analytics. There are some other option implement authentication -
<ol type='i'>
    <li>password based authentication</li>
    <li>multiple factor authentication</li>
    <li>certificate based authentication</li>
    <li>biometric authentication</li>
    <li>token based authentication</li>
</ol>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
    <Accordion.Body>
    Firebase provides a variety of services in addition to authentication. They provide databases. They provide extensions. They provide real-time databases. They provide hosting. They provide storage. They provide machine learning and much more.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Blogs;