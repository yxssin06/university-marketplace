import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

interface University {
  id: string;
  name: string;
  location: string;
}

const UNIVERSITIES: University[] = [
  { id: '1', name: 'University of Toronto', location: 'Toronto, ON' },
  { id: '2', name: 'Toronto Metropolitan University', location: 'Toronto, ON' },
  { id: '3', name: 'York University', location: 'Toronto, ON' },
  { id: '4', name: 'University of British Columbia', location: 'Vancouver, BC' },
  { id: '5', name: 'McGill University', location: 'Montreal, QC' },
  { id: '6', name: 'University of Waterloo', location: 'Waterloo, ON' },
  { id: '7', name: 'McMaster University', location: 'Hamilton, ON' },
  { id: '8', name: 'Queens University', location: 'Kingston, ON' },
  { id: '9', name: 'Western University', location: 'London, ON' },
  { id: '10', name: 'University of Ottawa', location: 'Ottawa, ON' },
];

export default function UniversitySelectionScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUniversities = UNIVERSITIES.filter(uni => 
    uni.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (uni: University) => {
    // In a real app, we'd save this to context/storage
    console.log('Selected:', uni.name);
    // Go back with the selection result
    router.dismiss(); 
    // Ideally pass parameters back, but for now we'll just simulate selection
    // Note: To pass data back, we might use a context or global state, 
    // or pass the selected ID in params if navigating FORWARD.
    // If this is a modal, we might just close it and let the parent know via context.
    // For this prototype, we'll just go back.
    router.back();
  };

  const renderItem = ({ item }: { item: University }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
      <View style={styles.iconContainer}>
        <Ionicons name="school-outline" size={24} color="#4c6ef5" />
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemLocation}>{item.location}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#adb5bd" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.title}>Select Your University</Text>
        <Text style={styles.subtitle}>Find your campus community</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#868e96" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search universities..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          clearButtonMode="while-editing"
        />
      </View>

      <FlatList
        data={filteredUniversities}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#212529',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#868e96',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f3f5',
    marginHorizontal: 20,
    marginVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    height: 48,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#212529',
    height: '100%',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f3f5',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#edf2ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
    marginBottom: 2,
  },
  itemLocation: {
    fontSize: 14,
    color: '#868e96',
  },
});
