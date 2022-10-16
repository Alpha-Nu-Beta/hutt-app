import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {ThemeProvider, Button, Header, createTheme} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const theme = createTheme({});

// Your App
const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Header centerComponent={{text: '_Hutt_', style: styles.heading}} />
        <View>
          <Button
            disabledTitleStyle={{color: '#00F'}}
            containerStyle={{
              margin: 5,
            }}
            linearGradientProps={null}
            iconContainerStyle={{background: '#000'}}
            loadingProps={{animating: true}}
            onPress={() =>
              Linking.openURL(
                'https://docs.google.com/spreadsheets/d/1F_Dd5uXdyUERgs1E5eKoIn7eXA3Fwt6qygZIHJ_FqQo/edit?usp=sharing',
              )
            }
            title="Meals"
            titleProps={{}}
            titleStyle={{marginHorizontal: 5}}
          />
          <Button
            disabledTitleStyle={{color: '#00F'}}
            containerStyle={{
              margin: 5,
            }}
            linearGradientProps={null}
            iconContainerStyle={{background: '#000'}}
            loadingProps={{animating: true}}
            onPress={() =>
              Linking.openURL(
                'https://calendar.google.com/calendar/embed?src=c_m6cg4kk9ia0vn3kb4g2t0k9ut8%40group.calendar.google.com&ctz=America%2FChicago',
              )
            }
            title="Hutt Calendar"
            titleProps={{}}
            titleStyle={{marginHorizontal: 5}}
          />
          <Button
            disabledTitleStyle={{color: '#00F'}}
            containerStyle={{
              margin: 5,
            }}
            linearGradientProps={null}
            iconContainerStyle={{background: '#000'}}
            loadingProps={{animating: true}}
            onPress={() => Linking.openURL('https://kansasbeta.org')}
            title="Website"
            titleProps={{}}
            titleStyle={{marginHorizontal: 5}}
          />
          <Button
            disabledTitleStyle={{color: '#00F'}}
            containerStyle={{
              margin: 5,
            }}
            linearGradientProps={null}
            iconContainerStyle={{background: '#000'}}
            loadingProps={{animating: true}}
            onPress={() =>
              Linking.openURL('https://airtable.com/shrWu37unVXvyCMan')
            }
            title="Alumni Database"
            titleProps={{}}
            titleStyle={{marginHorizontal: 5}}
          />
          <Button
            disabledTitleStyle={{color: '#00F'}}
            containerStyle={{
              margin: 5,
            }}
            linearGradientProps={null}
            iconContainerStyle={{background: '#000'}}
            loadingProps={{animating: true}}
            onPress={() =>
              Linking.openURL(
                'https://drive.google.com/drive/folders/1qqoN9hwTfAqlddozdYLOIhfd97X3U1Ac?usp=sharing',
              )
            }
            title="Weekly Schedule"
            titleProps={{}}
            titleStyle={{marginHorizontal: 5}}
          />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
