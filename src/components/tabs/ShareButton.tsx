import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import shareLogo from "../../../assets/IconScout/shareLogo.png";
import heartImgWithoutRedBG from "../../../assets/IconScout/heartImgWithoutRedBG.png";
import heartImgWithRedBG from "../../../assets/IconScout/heartImgWithRedBG.png";

interface ShareButtonProps {
  onPress: () => void;
  isFavorite: boolean;
}

const ShareButton: React.FC<ShareButtonProps> = ({ onPress, isFavorite }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        columnGap: 2,
        marginVertical: 1,
        marginHorizontal: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <Image source={shareLogo} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={isFavorite ? heartImgWithRedBG : heartImgWithoutRedBG}
          style={{
            width: 36,
            resizeMode: "contain",
            height: 24,
            marginLeft: 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ShareButton;
