import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

import _ from 'lodash';

import SvgImage from './SvgImage';

const IceCreamIcon = props => {
  const { _id, cherry, convoId, flavor, from, nuts, size, status } = props;

  const icons = [
    { size: 'large', flavor: 'Vanilla', cherry: 'yes', nuts: 'yes' },
    { size: 'large', flavor: 'Strawberry', cherry: 'yes', nuts: 'yes' },
    { size: 'large', flavor: 'Chocolate', cherry: 'yes', nuts: 'yes' },
    { size: 'medium', flavor: 'Vanilla', cherry: 'yes', nuts: 'yes' },
    { size: 'medium', flavor: 'Strawberry', cherry: 'yes', nuts: 'yes' },
    { size: 'medium', flavor: 'Chocolate', cherry: 'yes', nuts: 'yes' },
    { size: 'small', flavor: 'Vanilla', cherry: 'yes', nuts: 'yes' },
    { size: 'small', flavor: 'Strawberry', cherry: 'yes', nuts: 'yes' },
    { size: 'small', flavor: 'Chocolate', cherry: 'yes', nuts: 'yes' }
  ];

  const svgs = [
    { path: require('../../assets/svgs/large-vanilla-yes-yes.svg') },
    { path: require('../../assets/svgs/large-strawberry-yes-yes.svg') },
    { path: require('../../assets/svgs/large-chocolate-yes-yes.svg') },
    { path: require('../../assets/svgs/medium-vanilla-yes-yes.svg') },
    { path: require('../../assets/svgs/medium-strawberry-yes-yes.svg') },
    { path: require('../../assets/svgs/medium-chocolate-yes-yes.svg') },
    { path: require('../../assets/svgs/small-vanilla-yes-yes.svg') },
    { path: require('../../assets/svgs/small-strawberry-yes-yes.svg') },
    { path: require('../../assets/svgs/small-chocolate-yes-yes.svg') }
  ];

  const renderIcon = () => {
    const macthingIcon = _.find(icons, { size, flavor, cherry, nuts });
    const imgNum = icons.indexOf(macthingIcon);
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
