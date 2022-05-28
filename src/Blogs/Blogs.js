import React from 'react';
import PageTitle from '../pages/Shared/PageTitle';
import './Blogs.css'


const Blogs = () => {
  return (
    <div className='mb-5'>
      <div id='items-title' className='mb-4 mt-5 upcoming'>
        <h1>Blogs</h1>
        <hr />
        <p>😶😒😊😁🤣😂✌️🤞😉😎😅🤩😏🤨🙃🤪</p>
      </div>
      <div id="question-answer" className="text-center blogs-page container">
        <h4 className='mb-3 mt-4'>How will you improve the performance of a React Application?</h4>
        <p>In React apps, we guarantee a very fast UI by default. However, as an app grows, developers may experience some performance issues. So in order to optimize react rendering I need to make sure components receive only necessary props. This will allow me to control CPU costs and avoid unnecessary rendering of unnecessary features. The solution is to create a functional component that collects all the props and redistributes them to other components.</p>
        <hr className='mt-3 mb-2' />
        <h4 className='mb-3'>What are the different ways to manage a state in a React application?</h4>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Communication State
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                Communication plays an important role in storing information in different states. It covers essential aspects of an application, such as loading spinners, error messages, popups and more that show that a communication link has been created. The state of communication is the "loading phase" of transactions between different states.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Data State
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
              <div class="accordion-body">
                The data state covers the information that react app temporarily stores for various business functions. Presumably, I'm building a project management application. The information stored in the data state will include the following things: project name, contact, customer details etc.
              </div>
            </div>
          </div>
          <div class="accordion-item accordion-3">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                Control State
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
              <div class="accordion-body">
                The control state does not represent the application environment. Instead, it refers to the state that the user entered into the application. For example, form entries, selected items, etc. The state of control over data storage is known to be more diverse and versatile.
              </div>
            </div>
          </div>
        </div>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">

            </h2>
          </div>
          <div class="accordion-item accordion-2">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Session State
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                The session state contains information about the application user, such as user identification, permissions, passwords, etc. It can also include information about how the application will work according to the preferences of a particular user
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Location State
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                Unlike data and communication states, which follow a specific pattern or way of storing information, location states store information in a simple string-like structure. However, one of the most interesting things about location status is that they usually store URLs in a string-like structure, even when they don't actually represent strings.
              </div>
            </div>
          </div>
        </div>
        <hr className='mt-3 mb-2' />

        <h4 className='mb-3 mt-4'>What is a unit test? Why should write unit tests?</h4>
        <p>Unit testing is a software development process where the smallest testable parts of an application, called units, are analyzed individually and independently to ensure proper operation. This testing method is performed by software developers and sometimes QA staff during the development process.</p>
        <p>Unit tests ensure that all codes meet quality standards before being installed. This ensures a reliable engineering environment where quality is paramount. During the shop development life cycle, unit testing saves time and money and helps developers write better code more efficiently.</p>
        <hr className='mt-3 mb-2' />

        <h4 className='mb-3 mt-4'>You have an array of shops. Each shop has a name, price, description, etc. How will you implement a search to find shops by name?</h4>
        <p>{`const shop =[
    {
        name :'cable',
        price: 399
    },{
        name :'charger',
        price: 699

    }
]
const Find=shop.find(findName)

function findName(product){
    return product.name=='cable'
}
console.log(Find);`}</p>
        <hr className='mt-3 mb-2' />

        <h4 className='mb-3 mt-4'>Why you do not set the state directly in React? Why you do not set products = [...] instead, you use the setProducts</h4>
        <p>Because of the following reasons, we should never edit the state directly: if we update it directly, executing setState() thereafter may just overwrite the update you did. This.state is not changed instantly when we directly update the state. Instead, it generates a pending state transition, which will only yield the current value if accessed after using this function. Across all components, we will lose control of the state.</p>
      </div>
      <PageTitle title="Blogs"></PageTitle>
    </div>
  );
};

export default Blogs;