import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        {/* Auth Stack (Index is now Login) */}
        <Stack.Screen 
          name="index" 
          options={{ 
            headerShown: false,
          }} 
        />
        <Stack.Screen 
          name="university-select" 
          options={{ 
            presentation: 'modal',
            headerShown: false,
          }} 
        />
        
        {/* App Stack */}
        <Stack.Screen 
          name="home" 
          options={{ 
            headerShown: true, 
            title: 'Marketplace',
            headerBackVisible: false 
          }} 
        />
        <Stack.Screen 
          name="item/[id]" 
          options={{ 
            title: 'Item Details',
            headerBackTitle: 'Back',
            headerShown: true
          }} 
        />
      </Stack>
    </>
  );
}
