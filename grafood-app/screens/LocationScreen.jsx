import React, { useState, useRef, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, TextInput, Button, Alert, Modal, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function LocationScreen({ route }) {
  const { restaurantName } = route.params || '';
  const [region, setRegion] = useState({
    latitude: 37.5048,
    longitude: 126.9574,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [searchQuery, setSearchQuery] = useState(restaurantName);
  const [placeDetails, setPlaceDetails] = useState(null); // Place details state
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
  const mapRef = useRef(null); // Ref for MapView

  useEffect(() => {
    if (restaurantName) {
      handleSearch();
    }
  }, [restaurantName]);

  const onRegionChangeComplete = (newRegion) => {
    setRegion(newRegion);
  };

  const handleSearch = () => {
    const apiKey = 'AIzaSyC7zRLjr1x7K70vi2nHPJZg7_OaZMUI3EQ'; // 실제 API 키를 이곳에 입력
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchQuery)}&key=${apiKey}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.results.length > 0) {
          const result = data.results[0];
          const { lat, lng } = result.geometry.location;
          const newRegion = {
            latitude: lat,
            longitude: lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          };
          setRegion(newRegion);
          if (mapRef.current) {
            mapRef.current.animateToRegion(newRegion, 1000); // Animate to new region
          }
          fetchPlaceDetails(result.place_id); // Fetch place details using place_id
        } else {
          Alert.alert('검색 결과가 없습니다.');
        }
      })
      .catch(error => {
        Alert.alert('Error', `Error fetching location: ${error.message}`);
      });
  };

  const fetchPlaceDetails = (placeId) => {
    const apiKey = 'AIzaSyC7zRLjr1x7K70vi2nHPJZg7_OaZMUI3EQ'; // 실제 API 키를 이곳에 입력
    const language = 'ko';
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}&language=${language}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.result) {
          setPlaceDetails(data.result);
          setModalVisible(true); // Show modal with place details
        } else {
          Alert.alert('장소 세부 정보를 찾을 수 없습니다.');
        }
      })
      .catch(error => {
        Alert.alert('Error', `Error fetching place details: ${error.message}`);
      });
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef} // Assign ref to MapView
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={onRegionChangeComplete}
        customMapStyle={mapStyle}
      >
        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
      </MapView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="음식점 검색"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Button title="검색" onPress={handleSearch} />
      </View>
      {placeDetails && (
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ScrollView>
                <Text style={styles.modalTitle}>{placeDetails.name}</Text>
                <Text>{placeDetails.formatted_address}</Text>
                <Text>평점: {placeDetails.rating}</Text>
                {placeDetails.photos && placeDetails.photos.length > 0 && (
                  <Image
                    source={{
                      uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${placeDetails.photos[0].photo_reference}&key=AIzaSyC7zRLjr1x7K70vi2nHPJZg7_OaZMUI3EQ`,
                    }}
                    style={styles.photo}
                  />
                )}
                {placeDetails.reviews && placeDetails.reviews.length > 0 && (
                  placeDetails.reviews.map((review, index) => (
                    <View key={index} style={styles.review}>
                      <Text style={styles.reviewAuthor}>{review.author_name}</Text>
                      <Text>{review.text}</Text>
                    </View>
                  ))
                )}
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>닫기</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}
mapStyle=[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    position: 'absolute',
    top: 40,
    left: 10,
    right: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  photo: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  review: {
    marginTop: 10,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  reviewAuthor: {
    fontWeight: 'bold',
  },
});
