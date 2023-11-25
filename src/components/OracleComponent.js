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
    const faces = {
      normalFace,
      smileFace1,
      smileFace2,
      bigSmile1,
      bigSmile2,
      sadFace,
      surpriseFace,
    };
    const activeFace = Object.entries(faces).find(
      ([face, isActive]) => isActive
    );

    if (activeFace) {
      const faceMap = {
        normalFace: oracleNormal,
        smileFace1: oracleSmile1,
        smileFace2: oracleSmile2,
        bigSmile1: oracleBigSmile1,
        bigSmile2: oracleBigSmile2,
        sadFace: oracleSad,
        surpriseFace: oracleSurprise,
      };
      setOracleImage(faceMap[activeFace[0]]);
      setForcedFace(activeFace[0]);

      if (forcedFaceDuration) {
        setTimeout(() => {
          setForcedFace(null);
        }, forcedFaceDuration); // Reset after specified duration
      }
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
    if (forcedFace) return; // Don't change images if a forced face is active

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

    let isBlinking = false;

    const changeImage = () => {
      if (!isBlinking) {
        setOracleImage(getRandomImage());
        setTimeout(() => setOracleImage(oracleNormal), 2000);
      }
      setTimeout(changeImage, Math.random() * 25000 + 7000);
    };

    const performBlink = () => {
      isBlinking = true;
      setOracleImage(getRandomBlinkImage());

      setTimeout(() => {
        setOracleImage(oracleNormal);
        setTimeout(() => (isBlinking = false), 3000);
      }, Math.random() * 300 + 100);
    };

    const blink = () => {
      if (Math.random() < 0.1) {
        performBlink();
        setTimeout(performBlink, 400);
      }
      setTimeout(blink, Math.random() * 8000 + 2000);
    };

    changeImage();
    blink();
  }, [forcedFace]);

  return (
    <Image
      source={oracleImage}
      style={[{ width: 50, height: 50, position: "absolute" }, style]}
    />
  );
};

export default Oracle;
