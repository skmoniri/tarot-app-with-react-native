import {  Pressable} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';


type ScrollButtonProps = {
  direction: "left" | "right";
  onPress: () => void;
};

const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onPress }) => {

    return (
 
      <Pressable>        
        <AntDesign name={direction} onPress={onPress} color="#E6C77D"
        size={30}/>
      </Pressable>
  )
}

export default ScrollButton

