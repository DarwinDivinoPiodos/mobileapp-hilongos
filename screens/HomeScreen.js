import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/navOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";
const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={require("../assets/uberLogo.png")}
          style={styles.imageLogo}
        />
        <GooglePlacesAutocomplete
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
                description: data.description,
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
        />

        <NavOptions />
        {/* <View>
          <Button
            title="Click Me"
            onPress={(data, details = null) => {
              console.log(data);
              console.log(details);
            }}
          />
        </View> */}
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
