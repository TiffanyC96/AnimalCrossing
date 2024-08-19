import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import { Checkbox, List, Text, Button } from 'react-native-paper';
import { getCurrentCritters } from '../Nookipedia';

const CrittersScreen = ({ hemisphere = 'northern' }) => {
  const [critters, setCritters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCritters = async () => {
      try {
        const availableCritters = await getCurrentCritters();
        setCritters(availableCritters);
      } catch (error) {
        console.error('Failed to fetch current critters:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCritters();
  }, [hemisphere]);

  if (loading) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  return (
    <ScrollView>
      {critters.length > 0 ? (
        critters.map((critter, index) => (
          <View key={index} style={{ marginBottom: 20, padding: 10, backgroundColor: '#f0f0f0', borderRadius: 10 }}>
            <Text>Name: {critter.name}</Text>
            <Text>Location: {critter.location}</Text>
            <Text>Price: {critter.price} Bells</Text>
          </View>
        ))
      ) : (
        <Text>No critters available right now</Text>
      )}
    </ScrollView>
  );
};

export default CrittersScreen;
