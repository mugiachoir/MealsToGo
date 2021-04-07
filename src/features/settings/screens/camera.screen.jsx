import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera } from "expo-camera";
import { View } from "react-native";
import { Button } from "react-native-paper";
import Text from "../../../components/typography/text.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../../../infrastructure/theme/colors";

import styled from "styled-components/native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
`;

const CameraButton = styled(Button).attrs({
  color: colors.brand.secondary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
      ratio={"16:9"}
    >
      <CameraButton mode="contained" onPress={snap} icon="camera">
        Take Picture
      </CameraButton>
    </ProfileCamera>
  );
};

export default CameraScreen;
