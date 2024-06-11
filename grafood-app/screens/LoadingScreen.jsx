import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";

function LoadingScreen() {
  const animation1 = useRef(new Animated.Value(0)).current;
  const animation2 = useRef(new Animated.Value(0)).current;
  const animation3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const createAnimation = (animation, delay) => {
      return Animated.sequence([
        Animated.timing(animation, {
          toValue: -15,
          duration: 400,
          useNativeDriver: true,
          delay: delay,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]);
    };

    const startAnimation = () => {
      Animated.loop(
        Animated.stagger(200, [
          createAnimation(animation1, 0),
          createAnimation(animation2, 0),
          createAnimation(animation3, 0),
        ])
      ).start();
    };

    startAnimation();
  }, [animation1, animation2, animation3]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          styles.circle1,
          { transform: [{ translateY: animation1 }] },
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          styles.circle2,
          { transform: [{ translateY: animation2 }] },
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          styles.circle3,
          { transform: [{ translateY: animation3 }] },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  circle: {
    width: 15,
    height: 15,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  circle1: {
    backgroundColor: "#ff3232",
  },
  circle2: {
    backgroundColor: "#a0a0a0",
  },
  circle3: {
    backgroundColor: "#00a466",
  },
});

export default LoadingScreen;

// const [isLoading, setIsLoading] = useState(true);

// useEffect(() => {
//   const timer = setTimeout(() => {
//     setIsLoading(false);
//   }, 3000);

//   return () => clearTimeout(timer);
// }, []);

// if (isLoading) {
//   return <LoadingScreen />;
// }
