# Meteor React Boilerplate

To init the app please run:

    npm install

To start server please run:

    meteor

The app will be served at [localhost:3000](http://localhost:3000)

The slides will be served at [Meteor - Structuring React Container](http://localhost:3000/slides/slides.html)

Note: react container works as an singleton instance within this implementation, the store (store.js) to be precise. Therefore, if you are going to use container more than once time, you will need to update this implementation. Suggestions:

- Make the store (store.js) a class, and follow the OO pattern  create a new instance of store then pass to each container.
- Move some core logic and state needed to be share between component to lower level, subscription will still be placed in the highest level (container). Doing this will help you out, but be aware that this is a compromised version, fast but but very maintainable.
