## User registration and login

### Task - Admission criteria

Use this
R[eact project template](https://github.com/goitacademy/react-homework-template/blob/main/README.en.md)
as a starting point for your application.

- The `phonebook` repository has been created.
- When turning in homework, there are links to: the source files and working
  pages of each project on `GitHub Pages'.
- There are no errors or warnings in the console when running the job code.
- For each component has a separate folder with a React component file and
  styles file.
- For the components described propTypes.

## Contact Book

Add to the Contact Book application the ability to register, login, and user
updates, and work with a private collection of contacts.

### Backend.

There is a ready-made backend for this task. Check out the
[documentation](https://connections-api.herokuapp.com/docs/). It supports all
necessary operations on the contact collection, as well as registering, logging
in and user update with JWT. Use it instead of your backend created with the
service `mockapi.io`.

### Routing

Add routing with the React Router library. The application should have several
pages:

- `/register` - public route to register a new user with a form.
- `/login` - public login route of an existing user with a form.
- `/contacts` - a private route for your contact list.

Add a navigation component `Navigation` with links to navigate routes.

### User menu

Create a component `UserMenu`, that displays the user's email and a logout
button. Here's what its markup might look like.

```javascript
<div>
  <p>mango@mail.com</p>
  <button>Logout</button>
</div>
```

### Styling.

This is the final version of the application, so work on styling the interface.
You can use a styling library or components such as
[Chakra UI](https://chakra-ui.com/) or [Material UI](https://mui.com/).
