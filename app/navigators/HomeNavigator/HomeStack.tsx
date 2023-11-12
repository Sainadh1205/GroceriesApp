import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeShowroomScreen } from "app/screens"
import React from "react"
import { AppStackParamList, AppStackScreenProps } from "../AppNavigator"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"

export type HomeStackParamList = { Home: undefined }

export type HomeStackScreenProps<T extends keyof HomeStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeStackParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Stack = createNativeStackNavigator<HomeStackParamList>()

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeShowroomScreen} />
    </Stack.Navigator>
  )
}
