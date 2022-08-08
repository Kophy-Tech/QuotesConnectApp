# QuotesConnectApp


 The solution to this error : 
1. Go to your nodule modules and search for this package react-native-autocomplete-input
2. In the Index.js.  remove the viewproptypes imported from react-native
3. use this import {ViewPropTypes} from deprecated-react-native-prop-types
