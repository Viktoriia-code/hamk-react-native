import { Pressable, StyleSheet, Text } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    minWidth: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundness,
  },
  text: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
});

const Button = ({ children, style, ...props }) => {
  const buttonStyle = [styles.container, style];

  return (
    <Pressable {...props} style={buttonStyle}>
      <Text style={styles.text} fontWeight="bold">
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;