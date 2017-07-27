const routes = {
  '/': 'Home',
  '/dashboard': 'Dashboard',
  '/components': 'Components',
  '/charts': 'Charts',
  '/components/buttons': 'Buttons',
  '/components/social-buttons': 'Social Buttons',
  '/components/cards': 'Cards',
  '/components/forms': 'Forms',
  '/components/modals': 'Modals',
  '/components/switches': 'Switches',
  '/components/tables': 'Tables',
  '/components/tabs': 'Tabs',
  '/icons': 'Icons',
  '/icons/font-awesome': 'Font Awesome',
  '/icons/simple-line-icons': 'Simple Line Icons',
  '/widgets': 'Widgets',
  '/Root': 'Root'
};


const Main = require('./components/main');
const Home = require('./components/home');
const NotFound = require('./components/errors/not_found');


export default routes;
