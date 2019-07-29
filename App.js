/**
 *
 * @format
 * @flow
 */

import React, { Fragment } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import { Header as HeaderElements, Icon } from "react-native-elements";
import ServiceCard from "./servicesCard";
import { Header, Colors } from "react-native/Libraries/NewAppScreen";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberofposts: 0,
      dataArray: []
    };
  }

  componentDidMount() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          dataArray: responseJson.slice(0, 20),
          numberofposts: responseJson.length
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  renderRightComponent() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity>
          <Icon type="feather" name="search" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon type="entypo" name="menu" />
        </TouchableOpacity>
      </View>
    );
  }

  renderLeftComponent() {
    return (
      <View>
        <Image source={require("./loogo.png")} style={styles.leftLogoStyle} />
      </View>
    );
  }

  renderPosts = ({ item }) => <ServiceCard {...item} />;

  render() {
    const { dataArray } = this.state;
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" setHidden={true} />
        <HeaderElements
          leftComponent={this.renderLeftComponent()}
          centerComponent={{ text: "GENESIS", style: { color: "#fff" } }}
          rightComponent={this.renderRightComponent()}
          backgroundColor="#75B7B6"
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Header />
          <View style={styles.subHeaderContainerStyle}>
            <Text style={styles.subHeaderTextStyle}>Services</Text>
          </View>
          <FlatList
            keyExtractor={item => String(item.id)}
            data={dataArray}
            initialNumToRender={5}
            renderItem={this.renderPosts}
          />
        </ScrollView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  leftLogoStyle: {
    height: 100,
    width: 100,
  },
  subHeaderContainerStyle: {
    height: 40,
    marginLeft: 20,
    marginTop: 20
  },
  subHeaderTextStyle: {
    fontWeight: "bold",
    fontSize: 35,
    color: "white"
  },
  scrollView: {
    backgroundColor: "#75B7B6"
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right"
  }
});

export default App;
