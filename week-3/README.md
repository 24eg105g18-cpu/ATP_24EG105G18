# Week 3

This folder contains a product-focused JavaScript exercise that mimics a lightweight backend application. It separates product data structure from product operations to show how a simple model and API layer can work together.

## What’s in this folder
- `ProductModel.js` — defines the product schema and sample product data
- `productAPI.js` — provides functions to list products, search by value, filter items, and manage product state

## Technologies and concepts used
- JavaScript objects and arrays for structured data
- function encapsulation for reusable business logic
- simulation of API-style methods in plain JavaScript
- modular code organization for cleaner application design

## What you’ll learn
- how to separate data models from application logic
- how to build reusable search, filter, and listing functions
- how to think about code as a service layer even without a server
- how to extend plain JavaScript into a more application-like structure

## How to use it
1. open `ProductModel.js` to understand the product data shape
2. open `productAPI.js` to review product operations and helper functions
3. run the code with `node productAPI.js` or import the modules into a test file
4. add new product fields such as category, price, or stock status

## Suggested enhancements
- add support for product categories, stock tracking, or pricing filters
- implement sorting by price, name, or rating
- create a separate display module for rendering product results
- convert `productAPI.js` into a basic Node.js server endpoint in the future

## Why it matters
Week 3 builds a bridge between small scripts and real application design. It teaches how to structure code for future growth and how to separate concerns so your project remains easy to understand and extend.