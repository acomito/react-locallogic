import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import typography from 'material-ui';
/*import {fade} from 'material-ui/src/utils/colorManipulator';*/
import {
  red500, grey400, grey500, grey600, grey700,
  transparent, lightWhite, white, darkWhite, fullBlack, 
  lightBlack, black, cyan500, cyan700, pinkA200, grey100, darkBlack, grey300, teal500, teal700
} from 'material-ui';


const CustomTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: teal500,
    primary2Color: teal700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: grey300,
    pickerHeaderColor: cyan500,
    clockCircleColor: grey300,
    shadowColor: fullBlack,
  },
});

export default CustomTheme;