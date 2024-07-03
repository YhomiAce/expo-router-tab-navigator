import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import TabBarButton from "./TabBarButton";

const TabBar = ({ state, descriptors, navigation }) => {
  const primaryColor = "#0891b2";
  const secondaryColor = "#737373";

  
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        // console.log(route);
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        if (["_sitemap", "+not-found"].includes(route.name)) return null;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItem}
            isFocused={isFocused}
            color={isFocused ? primaryColor : secondaryColor}
            label={label}
            routeName={route.name}
          />
        );

        // return (
        //   <TouchableOpacity
        //     key={route.name}
        //     accessibilityRole="button"
        //     accessibilityState={isFocused ? { selected: true } : {}}
        //     accessibilityLabel={options.tabBarAccessibilityLabel}
        //     testID={options.tabBarTestID}
        //     onPress={onPress}
        //     onLongPress={onLongPress}
        //     style={styles.tabbarItem}
        //   >
        //     {icons[route.name]({
        //       color: isFocused ? primaryColor : secondaryColor,
        //     })}
        //     <Text
        //       style={{
        //         color: isFocused ? primaryColor : secondaryColor,
        //         fontSize: 11,
        //       }}
        //     >
        //       {label}
        //     </Text>
        //   </TouchableOpacity>
        // );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  
});

export default TabBar;
