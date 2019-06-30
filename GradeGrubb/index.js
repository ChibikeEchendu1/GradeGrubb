import { AppRegistry } from 'react-native';
import App from './App';
import TeacherList from './src/pages/TeacherList'
import Profile from './src/pages/profile';
import Login from './src/pages/Login';
import Addprofile from './src/pages/Addprofile';
import Grade from './src/pages/Grade';
import Element from './src/pages/Element';
import NewName from './src/pages/NewName';
//newly added pages
import profile from './src/pages/profile';
import SendMessage from './src/pages/SendMessage';
///need work
import RemoveElement from './src/pages/RemoveElement'
import AddStudent2 from './src/pages/AddStudent2';
import RemoveStudent from './src/pages/RemoveStudent';
import AddStudent from './src/pages/AddStudent';
//AppRegistry.registerComponent('GradeGrubb', () => RemoveElement);// Profile);
import bgMessaging from './bgMessaging';
AppRegistry.registerComponent('GradeGrubb', () => App );// Profile);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging); // <-- Add this line
