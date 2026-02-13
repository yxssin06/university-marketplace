import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar as RNStatusBar } from 'react-native';
import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { mockItems, Item } from '../data/mockData';

export default function HomeScreen() {
  const renderItem = ({ item }: { item: Item }) => (
    <Link href={`/item/${item.id}`} asChild>
      <TouchableOpacity style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.cardContent}>
          <Text style={styles.price}>${item.price}</Text>
          <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.meta}>{item.category} • {item.condition}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'University Marketplace', headerShadowVisible: false }} />
      <StatusBar style="auto" />
      <FlatList
        data={mockItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  listContent: {
    padding: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    width: '48%',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#e9ecef',
  },
  cardContent: {
    padding: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2b8a3e',
    marginBottom: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 6,
    lineHeight: 20,
  },
  meta: {
    fontSize: 12,
    color: '#868e96',
  },
});
