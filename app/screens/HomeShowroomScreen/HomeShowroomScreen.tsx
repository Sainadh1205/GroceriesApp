import React, { FC } from "react"
import { TouchableOpacity, View, ViewStyle } from "react-native"
import { Screen, Text, TextField } from "../../components"
import { spacing } from "../../theme"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Fontisto from "react-native-vector-icons/Fontisto"
import { HomeStackScreenProps } from "app/navigators/HomeNavigator/HomeStack"

export const HomeShowroomScreen: FC<HomeStackScreenProps<"Home">> = function () {
  return (
    <Screen preset="fixed" safeAreaEdges={["top"]} contentContainerStyle={$screenContainer}>
      <View
        style={[$headerViewStyles, { marginHorizontal: spacing.lg, marginVertical: spacing.md }]}
      >
        <View style={$headerViewStyles}>
          <View style={$headingViewStyles}>
            <Text preset="heading" text="Bazaar" />
          </View>
          <View style={$headerViewStyles}>
            <TouchableOpacity style={{ padding: spacing.sm }}>
              <Fontisto name="favorite" color={"black"} size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: spacing.sm }}>
              <Ionicons name="notifications" color={"black"} size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: spacing.sm }}>
              <FontAwesome5 name="user-circle" color={"black"} size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TextField
        value=""
        placeholder="Search here.. tooth paste, soap, ..."
        containerStyle={{ paddingHorizontal: spacing.md }}
        RightAccessory={(props) => (
          <TouchableOpacity style={props.style}>
            <AntDesign name="search1" size={20} color={"black"} />
          </TouchableOpacity>
        )}
      />
    </Screen>
  )
}

const $screenContainer: ViewStyle = {
  flex: 1,
}

const $headingViewStyles: ViewStyle = { flex: 1, marginRight: spacing.xxxl }

const $headerViewStyles: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
}

// @demo remove-file
