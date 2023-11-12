import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { translate } from "../i18n"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import { HomeStackNavigator } from "./HomeNavigator/HomeStack"
import { OfferStackNavigator } from "./OffersNavigator/OffersNavigator"

export type HomeTabParamList = {
  Offers: undefined
  BottomHome: undefined
  Cart: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<HomeTabParamList>()

export function HomeNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="BottomHome"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: translate("homeNavigator.Home"),
          tabBarIcon: ({ focused }) => (
            <Feather name="home" color={focused && colors.tint} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Offers"
        component={OfferStackNavigator}
        options={{
          tabBarLabel: translate("homeNavigator.Offers"),
          tabBarIcon: ({ focused }) => (
            <AntDesign name="tago" color={focused && colors.tint} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Sample}
        options={{
          tabBarAccessibilityLabel: translate("homeNavigator.Cart"),
          tabBarLabel: translate("homeNavigator.Cart"),
          tabBarIcon: ({ focused }) => (
            <Feather name="shopping-cart" color={focused && colors.tint} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
const Sample = () => <></>

const $tabBar: ViewStyle = {
  backgroundColor: colors.background,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.md,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}

// @demo remove-file
