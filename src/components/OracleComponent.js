import React, { useState, useEffect } from "react";
import { Image } from "react-native";

const Oracle = ({
  isGameScreen,
  style,
  normalFace,
  smileFace1,
  smileFace2,
  bigSmile1,
  bigSmile2,
  sadFace,
  surpriseFace,
  forcedFaceDuration,
}) => {
  const oracleNormal = require("../assets/oracle_edit/sun_normal.png");
  const oracleSmile1 = require("../assets/oracle_edit/sun_smile_1.png");
  const oracleSmile2 = require("../assets/oracle_edit/sun_smile_2.png");
  const oracleBigSmile1 = require("../assets/oracle_edit/sun_big_smile_1.png");
  const oracleBigSmile2 = require("../assets/oracle_edit/sun_big_smile_2.png");
  const oracleSad = require("../assets/oracle_edit/sun_sad.png");
  const oracleSurprise = require("../assets/oracle_edit/sun_surprise.png");

  const [oracleImage, setOracleImage] = useState(oracleNormal);
  const [forcedFace, setForcedFace] = useState(null);

  useEffect(() => {
    const faceMap = {
      normalFace: oracleNormal,
      smileFace1: oracleSmile1,
      smileFace2: oracleSmile2,
      bigSmile1: oracleBigSmile1,
      bigSmile2: oracleBigSmile2,
      sadFace: oracleSad,
      surpriseFace: oracleSurprise,
    };

    const activeFace = [
      normalFace,
      smileFace1,
      smileFace2,
      bigSmile1,
      bigSmile2,
      sadFace,
      surpriseFace,
    ].find((face) => face);

    if (activeFace) {
      setOracleImage(faceMap[activeFace]);
      setForcedFace(activeFace);

      let forcedFaceTimeout;
      if (forcedFaceDuration) {
        forcedFaceTimeout = setTimeout(() => {
          setForcedFace(null);
        }, forcedFaceDuration);
      }

      return () => {
        if (forcedFaceTimeout) {
          clearTimeout(forcedFaceTimeout);
        }
      };
    }
  }, [
    normalFace,
    smileFace1,
    smileFace2,
    bigSmile1,
    bigSmile2,
    sadFace,
    surpriseFace,
    forcedFaceDuration,
  ]);

  useEffect(() => {
    const oracleImages = [
      oracleNormal,
      oracleBigSmile1,
      oracleBigSmile2,
      oracleSurprise,
    ];
    const blinkImages = [oracleSmile1, oracleSmile2];

    const getRandomImage = () =>
      oracleImages[Math.floor(Math.random() * oracleImages.length)];
    const getRandomBlinkImage = () =>
      blinkImages[Math.floor(Math.random() * blinkImages.length)];

    const performBlink = () => {
      const blinkDuration = Math.random() * 50 + 50; // Duration of each blink phase in milliseconds
      const minBlinkDelay = 2000; // Minimum delay between blinks in milliseconds
      const maxAdditionalDelay = 10000; // Maximum additional random delay
      const doubleBlinkProbability = 0.1; // Probability of a double blink

      const isDoubleBlink = Math.random() < doubleBlinkProbability;
      let nextBlinkDelay;

      // First phase: Close the eyes
      setOracleImage(oracleNormal);
      setTimeout(() => {
        // Second phase: Blinked eyes
        setOracleImage(getRandomBlinkImage());
        setTimeout(() => {
          // Third phase: Return to normal
          setOracleImage(oracleNormal);

          // Calculate the next blink interval with some randomness
          nextBlinkDelay = minBlinkDelay + Math.random() * maxAdditionalDelay;
          if (isDoubleBlink) {
            // If double blink, reduce the delay for the next blink
            nextBlinkDelay = blinkDuration;
          }

          // Schedule the next blink
          blinkTimeout = setTimeout(performBlink, nextBlinkDelay);
        }, blinkDuration);
      }, blinkDuration);
    };

    let blinkTimeout = setTimeout(performBlink, Math.random() * 5000 + 2000);

    let changeImageTimeout;
    const changeImage = () => {
      if (!forcedFace) {
        setOracleImage(getRandomImage());
        changeImageTimeout = setTimeout(
          () => setOracleImage(oracleNormal),
          2000
        );
      }
      changeImageTimeout = setTimeout(
        changeImage,
        Math.random() * 20000 + 7000
      );
    };

    changeImage();

    return () => {
      clearTimeout(blinkTimeout);
      clearTimeout(changeImageTimeout);
    };
  }, [forcedFace]);

  return (
    <Image
      source={oracleImage}
      style={[{ width: 50, height: 50, position: "absolute" }, style]}
    />
  );
};

export default Oracle;
