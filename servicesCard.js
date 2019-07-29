import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';
import ViewMoreText from "react-native-view-more-text";

class ServiceCard extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  renderViewMore(onPress) {
    return (
      <Text onPress={onPress} style={styles.readmoreStyle}>
        Read more
      </Text>
    );
  }
  renderViewLess(onPress) {
    return (
      <Text onPress={onPress} style={styles.readmoreStyle}>
        Read less
      </Text>
    );
  }

  render() {
    const { title, body } = this.props;
    return (
      <Card
        containerStyle={styles.cardContainerStyle}
        image={require('./placeholder.jpg')}
        imageWrapperStyle={{ borderRadius: 7 }}
      >
        <View style={styles.descriptionStyle}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.priceStyle}>INR 1230</Text>
          <View style={{}}>
            <ViewMoreText
              numberOfLines={2}
              renderViewMore={this.renderViewMore}
              renderViewLess={this.renderViewLess}
              textStyle={{ textAlign: "left" }}
            >
              <Text>{body}</Text>
            </ViewMoreText>
          </View>
          <Button
            title="BOOK APPOINTMENT"
            titleStyle={styles.buttonTitleStyle}
            type="solid"
            buttonStyle={styles.buttonStyle}
            containerStyle={styles.buttonContainerStyle}
          />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardContainerStyle: {
    borderRadius: 7,
    flexDirection: 'row',
    elevation: 10,
    shadowRadius: 7,
    shadowOffset: { height: 10, width: 0 },
    shadowOpacity: 1
  },
  descriptionStyle: {
    padding: 17,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  priceStyle: {
    color: '#75B7B6',
    paddingVertical: 10
  },
  bodyTextStyle: {
    //  numberOfLines: 2,
  },
  buttonTitleStyle: {
    fontWeight: 'bold'
  },
  buttonStyle: {
    backgroundColor: '#75B7B6',
    width: 290,
    opacity: 0.7
  },
  buttonContainerStyle: {
    marginTop: 10
  },
  readmoreStyle: {
    textDecorationLine: 'underline',
    color: "blue"
  }
});

export default ServiceCard;
