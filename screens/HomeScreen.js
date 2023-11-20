import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/navOptions";
// import { useDispatch } from "react-redux";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { useDispatch } from "react-redux";
// import { setDestination, setOrigin } from "../slices/navSlice";
const HomeScreen = () => {
  // const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={require("../assets/uberLogo.png")}
          style={styles.imageLogo}
        />
        {/* <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                descripttion: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          placeholder="Where From?"
          nearbyPlacesAPI="GooglePlaceSearch"
          debounce={400}
        /> */}

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  imageLogo: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
});

export default HomeScreen;
