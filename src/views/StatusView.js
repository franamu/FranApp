import React, { useEffect, useState } from 'react';
import { View, Animated } from 'react-native';
import { Text, Button } from 'react-native-elements';

// import custom styles
import styles from './styles/Status.styles';
import globalStyles from '../globalStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Create animated Component
const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const createAnimationStyle = animation => {
	const translateY = animation.interpolate({
		inputRange: [0, 1],
		outputRange: [50, 0]
	})
	return {
		opacity: animation,
		transform: [{
			translateY
		}]
	}
}


const StatusView = ({ status, message, description, buttonText, path, navigateTo }) => {
  const [iconAnimation, setIconAnimation] = useState(new Animated.Value(0));
  const [containterInfoAnimation, setContainterInfoAnimation] = useState(new Animated.Value(0));
  const [buttonAnimation, setButtonAnimation] = useState(new Animated.Value(0));

  const setCorrectValues = statusScreen => {
		const styles = {
			color: '',
			iconName: '',
			typeButton: '',
			success: false,
			danger: false,
			warning: false,
			info: false
		};

		switch (statusScreen) {
			case 'success':
        styles.color = 'rgb(39, 174, 96)';
        styles.backgroundButton = '#249E57';
				styles.iconName = 'check-circle';
				styles.success = true;
				break;
			case 'error':
				case 'error':
        styles.color = 'rgb(231, 76, 60)';
        styles.backgroundButton = '#c0392b';
				styles.iconName = 'times';
				styles.danger= true;
				break;
			case 'warning':
        styles.color = 'rgb(247, 183, 49)';
        styles.backgroundButton = '#f39c12';
				styles.iconName = 'exclamation-circle';
				styles.warning = true;
				break;
			case 'info':
        styles.color = 'rgb(52, 152, 219)';
        styles.backgroundButton = '#2980b9';
				styles.iconName = 'info';
				styles.info = true;
				break;
			default:
				break;
		}

		return styles;
  }
  
  const startAnimation = () => {
		Animated.stagger(100, [
			Animated.timing(iconAnimation, {
				toValue: 1,
        duration: 300,
        useNativeDriver: false,
			}),
			Animated.timing(containterInfoAnimation, {
				toValue: 1,
        duration: 300,
        useNativeDriver: true,
			}),
			Animated.timing(buttonAnimation, {
				toValue: 1,
        duration: 300,
        useNativeDriver: true,
			})
		]).start();
	}
  
  // Animations Values
  const iconAnimationCustom = createAnimationStyle(iconAnimation);
  const containterInfoAnimationCustom = createAnimationStyle(containterInfoAnimation);
  const buttonAnimationCustom = createAnimationStyle(buttonAnimation);

  const statusScreen = status || 'info';
  const myStyles = setCorrectValues(statusScreen);

  useEffect(() => {
    startAnimation();
  });

  return (
    <>	
      <View style={[styles.container, {backgroundColor: myStyles.color}]}>
        <View style={styles.containerGeneral}>
          <View style={styles.iconContainer}>
            <AnimatedIcon size={100} color="#ffffff" name={myStyles.iconName} style={iconAnimationCustom} />
          </View>
          <Animated.View style={[styles.containterInfo, containterInfoAnimationCustom]}>
            <Text style={[styles.messageText, styles.text]}>{message}</Text>
          </Animated.View>
          <Animated.View style={[styles.buttonContainer, buttonAnimationCustom]}>
          <Button
            title={buttonText ? buttonText : 'Aceptar'}
            buttonStyle={[globalStyles.fourth, styles.buttonLogin, {backgroundColor: myStyles.backgroundButton}]}
            onPress={() => navigateTo(path)} />
          </Animated.View>
        </View>
      </View>
    </>
  )
}

export default StatusView;
