**<h2>Shop cart Project - Front-End</h2>**
**<h3>Description:</h3>**
Assignment 2 - 4 is a continuation of Assignment 1 and  thus all the requirements for these assignments are to be made “on top” of your Assignment 1. 
You are now acting in the capacity of a React Front-End developer for Shopmart. You are to develop some of the pages for Shopmart’s Front-End using React.

**<h3>Assignment 2</h3>**
**1. Home Page**
**<h4>Header<h4>**
- The header MUST contain a logo of your Shopmart website, a search bar, and a Navigation bar. The navigation bar MUST have the following :  
- A Products link that navigates visitors to the Product Listing page
- A Sign Up link that navigates visitors to the registration page.

**<h4>Hero Section<h4>**
- This section should present an automatic rotating carousel
- Completely done in CSS

**<h4>Product Category Section<h4>**
- This section must display at least four (4) product categories
- Categories and its images are being pulled from the database
- Links are not clickable

**<h4>Bestseller Section<h4>**
- This section must display a list of “Bestseller” products, at minimum 4

**<h4>Footer<h4>**
- This section MUST include footer menu items, social media links, and any other information you deem necessary
- Links are not clickable

**<h4>Product Listing Page<h4>**
- You are required to build a well-designed product listing page that lists ALL products stored in the database. 
- The products are pulled from the pertinent endpoint in your RESTful API created in Assignment 1 and then rendered to this section.
- The products should be presented in a grid
- Note, every product must display an image, title, price, category and indicate if it is a bestseller or not. 

**<h4>Product Description  Page<h4>**
- When a user clicks on a particular product from the product listing page, they should be navigated to the Product Description page of the clicked product. This page should pull the click product data from a pertinent endpoint in your RESTful API created in Assignment 1 and rendered to this page.

- The Product Description page of any product should list the following:	
A.	Product Image
B.	Product title
C.	Product description
D.	Product price
E.	Category

**<h3>Assignment 3</h3>**
- When the user clicks on the “Sign Up” link in the navigation bar, they should be navigated to a well-designed user Sign-Up/Registration page
- When the user submits the “Sign Up” form, by clicking on the “Register’ button, their data is posted to the appropriate endpoint in Assignment 1 to create a new customer. 
- Once successful, you are required to alert the user that the operation was successful.
- Appropriate error messages should be styled and displayed on the form if the user violates the validation criteria after submitting the form.
- Validation Requirements 
A.	First name - required; between 2 and 20 characters long
B.	Last Name - required; between 2 and 20 characters long
C.	Email - required and a valid email must be entered, 
D.	Password - required, minimum 6 characteres, letters and numbers only

**<h3>Hosting</h3>**
- Your React Shopmart website must be hosted on Netlify https://www.netlify.com/