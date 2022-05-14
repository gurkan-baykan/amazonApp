import {View, Image, Dimensions, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;

export default function ImageCarousel({params}) {
  const {carouselStyle, sliderWidth} = styles;
  const [activeSlide, setSlide] = useState(1);

  const pagination = () => {
    return (
      <Pagination
        dotsLength={params.images.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: '#a6a8ab'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          backgroundColor: '#ebded1',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  return (
    <View style={carouselStyle}>
      <Carousel
        data={params.images}
        renderItem={({item}) => (
          <Image
            style={sliderWidth}
            resizeMode="stretch"
            source={{uri: item}}
          />
        )}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH}
        slideStyle={{width: SLIDER_WIDTH}}
        onSnapToItem={index => setSlide(index)}
      />
      {pagination()}
    </View>
  );
}

const styles = StyleSheet.create({
  sliderWidth: {
    width: SLIDER_WIDTH,
    height: 280,
  },
  carouselStyle: {
    flex: 1,
    flexDirection: 'column',
  },
});
