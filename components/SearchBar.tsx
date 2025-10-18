import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/assets/constants/icons'
import { useRouter } from 'expo-router'

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({placeholder,onPress}:Props) => {
  const router = useRouter();
  
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4 '>
      <Image source={icons.search} tintColor="#A8B5DB" className='size-5 ' resizeMode='contain' />
      <TextInput 
      onPress={onPress} 
      placeholder={placeholder}
      value=''
      onChangeText={()=>{}}
      placeholderTextColor="#A8B5DB"
      className='"flex-1 ml-2 text-white'
      />
    </View>
  )
}

export default SearchBar