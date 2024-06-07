import { View, StyleSheet, ScrollView, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import { Link, useNavigate } from 'react-router-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: theme.colors.bgSecondary,
    padding: 20,
  },
  scroll: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  text: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.white,
  },
});

const AppBar = () => {
  console.log(Constants);
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scroll}>
        <Link to="/" style={styles.tab}>
          <Text style={styles.text}>Lessons</Text>
        </Link>
        <Link to="/students" style={styles.tab}>
          <Text style={styles.text}>Students</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;