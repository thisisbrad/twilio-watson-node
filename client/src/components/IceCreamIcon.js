import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

import _ from 'lodash';
import { icons, svgs } from '../config';

import SvgImage from './SvgImage';

const IceCreamIcon = props => {
  const { _id, cherry, convoId, flavor, from, nuts, size, status } = props;

  const renderIcon = () => {
    console.log('finding these', size, flavor, cherry, nuts);
    const macthingIcon = _.find(icons, { size, flavor, cherry, nuts });
    const imgNum = icons.indexOf(macthingIcon);
    console.log('here?', imgNum);
    const source = resolveAssetSource(svgs[imgNum].path);

    return <SvgImage {...props} source={source} style={styles.stretch} />;
  };

  return <View>{renderIcon()}</View>;
};

const styles = StyleSheet.create({
  stretch: {
    width: 150,
    height: 180
  }
});

export default IceCreamIcon;
