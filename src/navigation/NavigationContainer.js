import { NavigationContainer as BaseNavigationContainer } from "@react-navigation/native";

const NavigationContainer = ({ children }) => {
  return <BaseNavigationContainer>{children}</BaseNavigationContainer>;
};

export default NavigationContainer;
