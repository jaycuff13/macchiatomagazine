import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Dimensions, SafeAreaView, FlatList} from 'react-native';
import ImageLayout from "react-native-image-layout"; 
import { NavigationContainer } from "@react-navigation/native"


export default function App() {
  return (
    <ScrollView>
      <View style={styles.container2}>
        <Text style={styles.text}>Macchiato Magazine</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={()=> Linking.openURL('https://mailchi.mp/119dd9285358/app-suscriber-page')}>
          <Text>Subscribe</Text>

        </TouchableOpacity>
      </View> 
    <View>
      <ImageLayout
            images={[
                // Version *3.0.0 update (or greater versions): 
                // Can be used with different image object fieldnames.
                // Ex. source, source.uri, uri, URI, url, URL
                { uri: "https://drive.google.com/file/d/1849bSoSRNhoRyzcyGktBThs3hNaYMHGZ/view?usp=sharing" },
                // IMPORTANT: It is REQUIRED for LOCAL IMAGES
                // to include a dimensions field with the
                // actual width and height of the image or
                // it will throw an error.
                // { source: require("yourApp/image.png"),
                //     dimensions: { width: 1080, height: 1920 }
                // },
                // "width" & "height" is an alternative to the dimensions
                // field that will also be acceptable.
                // { source: require("yourApp/image.png"),
                //     width: 1080,
                //     height: 1920 },
                { source: { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg" } },
                { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
                    // Optional: Adding a dimensions field with
                    // the actual width and height for REMOTE IMAGES
                    // will help improve performance.
                    dimensions: { width: 1080, height: 1920 } },
                { URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
                    // Version *2.0.0 update (or greater versions):
                    // Optional: Does not require an id for each
                    // image object, but is for best practices and
                    // can be better for performance with the API.
                    id: "blpccx4cn" },
                { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
                { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
            ]}
            // Version *5.7.0 update
            // onEndReached={() => {
            //     // add more images when scroll reaches end
            // }}
        />
 
    </View>
    <View style={styles.container2}>
       <TouchableOpacity
          style={styles.button}
          onPress={()=> Linking.openURL('mailto:support@example.com?subject=SendMail&body=Description')}>
          <Text>Email Us</Text>

        </TouchableOpacity>

    </View>
  </ScrollView>

  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  container2: {
    flex: 1, 
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 75,
  }, 
  text: {
    alignItems: 'center',
    color: '#fffafa',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  text2: {
    alignItems: 'center',
    color: '#fffafa',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#f8f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
  },
  button2: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
