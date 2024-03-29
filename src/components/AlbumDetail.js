import React from "react"
import { View, Text, Image, Linking } from "react-native";
import Card from './Card'
import CardSection from './CardSection';
import Button from './Button'



const AlbumDetail = ({album}) => {
  const { title, artist, artistImage, albumImage, url } = album;
  const { thumbnailStyle, thumbnailContainerStyle, headerContentStyle, headerTextStyle, image, imageStyle } = styles

  return (
        <Card>
          <CardSection>
          <View style= {thumbnailContainerStyle}>
            <Image  
              style={styles.thumbnailStyle}
              source={{ uri: artistImage }}
            />
          </View>
          <View style={styles.headerContentStyle}>
            <Text style= {headerTextStyle}>{title} </Text>
            <Text>By: {artist} </Text>
          </View>
          </CardSection>
          <CardSection>
            <Image style={imageStyle} source={{uri: albumImage }}/>
          </CardSection>
          
          <CardSection>
            <Button onPress={() => Linking.openURL(url) }/>
          </CardSection>

        </Card>
  )
}

const styles = {
  headerContentStyle: {
	flexDirection: 'column',
	justifyContent: 'space-around'
  }, 
  headerTextStyle : {
    fontSize: 18
  },
  thumbnailStyle : {
    height: 50,
    width: 50
  }, 
  thumbnailContainerStyle : {
  	justifyContent: 'center',
  	alignItems: 'center',
  	marginLeft: 10,
  	marginRight: 10
  }, 
  imageStyle : {
  	width : null,
  	height: 300,
  	flex: 1
  }
}

export default AlbumDetail
