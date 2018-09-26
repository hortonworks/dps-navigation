# Development
The code is written using TS + webpack + SCSS. Run the following commands in two different terminals to start working on the apps. 
```
npm run build
npm start
```
# Importing to package.json
You can directly use the git repo for adding the package for now, till we come up with a release strategy for the apps.
```
npm install --save https://github.com/hortonworks/dps-apps.git
or
yarn add  https://github.com/hortonworks/dps-apps.git
```
# Components
## dp-app-navigation
1. The component would show application pop-up pane when user clicks on 'srcElement' passed during component initialisation. On selecting a app, user would be navigated to the selected application.
1. If you wish to add a new application to Data Plane add a new route to ```lib/dp-app-routes.ts``` and provide an image.
1. The component would fire a rest call to Data Plane get all the roles for the logged in user and show the apps he is entitled to.
1. Since Data Plane uses cookie based auth the cookie would be automatically passed in the rest api. Support for any custom headers can be added as and when we need.
### Usage
```
import {DpAppNavigation} from 'dp-app';
DpAppNavigation.init({
        srcElement: <dom-element>,
        assetPrefix: '/path/to/your/images'
});

srcElement: Element that will launch the Navigation Menu
assetPrefix: Images for all the apps are available in lib/images. You can copy the images to your asset folder using your build tools. You can prepend to image path using 'assetPrefix'.
             Ex: The default image prefix is ''. In your final build if the images are avilable at path 'assets/images', set the assetPrefix as 'assets/images'.
``` 
