// const routes = {
//   "/": "/pages/home.html",
//   "/about": "pages/aboutUs.html",
//   "/findpet": "pages/findAPet.html",
//   "/volunteer": "pages/becomeAVolunteer.html"
// };
//
// const route = () => {
//   const event = window.event;
//   event.preventDefault();
//   //this line sets the corresponding route to the URL bar
//   window.history.pushState({}, "", event.target.href);
//   //this code is used for the content to be changed when the route is changed at the URL-bar
//   handleLocation();
// };
//
// const handleLocation = () => {
//   const path = window.location.pathname;
//   const route = routes[path] || "/pages/home.html";
//   fetch(route).then((data) => data.text()).then(
//       (text) =>
//         (document.querySelector(
//           "#root"
//         ).innerHTML = text)
//     );
// };
//
// //this code is used for the content to be changed when the route is changed at the URL-bar
// window.onpopstate = handleLocation;
// //this line is used to set up the routing rules for the window object
// window.route = route;
//
// //there is the line for the corresponding page to be added when the page is restarted
// handleLocation();
