import List from '../components/List'
import Photo from '../components/Photo'

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const RootStack = createStackNavigator(
    {
        List: {
            screen: List,
        },
        Photo: {
            screen: Photo,
        },
    }
);
export const AppContainer = createAppContainer(RootStack);

