import React from 'react';
import {Text, StyleSheet} from 'react-native';

const FooterBranding = ({children, style}) => {
  return <Text style={[styles.footerbranding, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  footerbranding: {
    fontSize: 18,
    fontWeight: '400',
    color: '#B9B9B9',
    fontFamily: 'Sarabun',
    lineHeight: 20,
  },
});

export default FooterBranding;
