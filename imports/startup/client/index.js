import { Bert } from 'meteor/themeteorchef:bert';
/*import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';*/
import './routes.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { DocHead } from 'meteor/kadira:dochead';



// injects google fonts
Meteor.startup(function(){
		var linkInfo = {rel: "stylesheet", type: 'text/css', href: "https://fonts.googleapis.com/css?family=Roboto:300,300italic,400,400italic,500,500italic,700,100italic,100,700italic,900,900italic"};
		DocHead.addLink(linkInfo);
});

injectTapEventPlugin(); // required by material ui: http://www.material-ui.com/#/get-started/installation

Bert.defaults.style = 'growl-top-right';








