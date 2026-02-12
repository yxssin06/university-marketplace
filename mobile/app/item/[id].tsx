import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { mockItems } from '../../data/mockData';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ItemDetails() {
  const { id } = useLocalSearchParams();
  const item = mockItems.find((i) => i.id === id);

  if (!item) {
    return (
      <View style={styles.center}>
        <Text>Item not found</Text>
      </View>
    );
  }

  const handleContact = () => {
    Alert.alert('Contact Seller', `Starting chat with ${item.seller}...`);
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Details', headerBackTitle: 'Back' }} />
      <ScrollView style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.price}>${item.price}</Text>
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.condition}</Text>
            </View>
          </View>
          
          <Text style={styles.title}>{item.title}</Text>
          
          <View style={styles.section}>
            <Text style={styles.label}>Category</Text>
            <Text style={styles.value}>{item.category}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>Listed</Text>
            <Text style={styles.value}>{item.timeListed}</Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.label}>Seller</Text>
            <Text style={styles.value}>{item.seller}</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleContact}>
            <Text style={styles.buttonText}>Contact Seller</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#f1f3f5',
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2b8a3e',
  },
  badge: {
    backgroundColor: '#e9ecef',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 24,
    lineHeight: 30,
  },
  section: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5',
    paddingBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#868e96',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  value: {
    fontSize: 16,
    color: '#212529',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#228be6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
