import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const widthRate=rate=> (windowWidth*rate)/100;
const heightRate=rate=> (windowHeight*rate)/100;


export {widthRate,heightRate};