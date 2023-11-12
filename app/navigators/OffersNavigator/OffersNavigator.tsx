import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { AppStackParamList, AppStackScreenProps } from "../AppNavigator"
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import { OffersHomeScreen } from "app/screens"

export type OffersStackParamList = { OffersHome: undefined }

export type OffersStackScreenProps<T extends keyof OffersStackParamList> = CompositeScreenProps<
  BottomTabScreenProps<OffersStackParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Stack = createNativeStackNavigator<OffersStackParamList>()

export const OfferStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="OffersHome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="OffersHome" component={OffersHomeScreen} />
    </Stack.Navigator>
  )
}
