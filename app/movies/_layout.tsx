import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false , tabBarStyle:{ display: 'none'}}}>
        <Tabs.Screen  name="[id]" options={{ headerShown: false, title: '[id]' }} />
    </Tabs>
  )
}

export default _layout