import { NavigationContainer} from "@react-navigation/native"
import {Routes} from "./src/routes"
import { NavigationIndependentTree} from "@react-navigation/native"

export default function Index() {
  return (
    <NavigationIndependentTree>

      <Routes/>
      
    </NavigationIndependentTree>
  );
}
