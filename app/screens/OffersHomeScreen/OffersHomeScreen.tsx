import React, { FC } from "react"
import { ViewStyle, Text } from "react-native"
import { Screen } from "../../components"
import { OffersStackScreenProps } from "app/navigators/OffersNavigator/OffersNavigator"

export const OffersHomeScreen: FC<OffersStackScreenProps<"OffersHome">> = function () {
  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      <Text>{"sainadh"}</Text>
    </Screen>
  )
}

const $screenContainer: ViewStyle = {
  flex: 1,
}

// @demo remove-file
