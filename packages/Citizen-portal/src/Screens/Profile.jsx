import React, { useState } from 'react';
import {SafeAreaView,View,Text,TextInput,TouchableOpacity,Image,Alert,ScrollView,Platform,} from 'react-native-web';
import { Camera, MapPin, Edit2, Check, X, Leaf, Recycle, Trophy } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null); // In real app: from camera/gallery
  const [username, setUsername] = useState('Alex Green');
  const [email, setEmail] = useState('alex@ecosphere.app');
  const [address, setAddress] = useState('123 Green Street, Eco City');
  const [tempUsername, setTempUsername] = useState(username);
  const [tempEmail, setTempEmail] = useState(email);
  const [tempAddress, setTempAddress] = useState(address);

  const handleSave = () => {
    setUsername(tempUsername);
    setEmail(tempEmail);
    setAddress(tempAddress);
    setIsEditing(false);
    Alert.alert('Success', 'Profile updated successfully! 🌱');
  };

  const handleCancel = () => {
    setTempUsername(username);
    setTempEmail(email);
    setTempAddress(address);
    setIsEditing(false);
  };

  const handlePhotoChange = () => {
    Alert.alert('Change Photo', 'In a real app, this would open camera/gallery');
    // Simulate photo change
    setProfilePhoto('https://randomuser.me/api/portraits/men/32.jpg');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fdf6' }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Header */}
        <View style={{ alignItems: 'center', marginBottom: 30 }}>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#166534' }}>
            My Profile
          </Text>
          <Text style={{ color: '#6b7280', marginTop: 8 }}>
            Manage your account and view your impact
          </Text>
        </View>

        {/* Profile Photo */}
        <View style={{ alignItems: 'center', marginBottom: 30 }}>
          <View style={{ position: 'relative' }}>
            <Image
              source={{
                uri: profilePhoto || 'https://via.placeholder.com/120?text=👤',
              }}
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                borderWidth: 4,
                borderColor: '#86efac',
              }}
            />
            <TouchableOpacity
              onPress={handlePhotoChange}
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: '#16a34a',
                padding: 10,
                borderRadius: 30,
                borderWidth: 3,
                borderColor: 'white',
              }}
            >
              <Camera color="white" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Edit/Save Button */}
        <View style={{ alignItems: 'flex-end', marginBottom: 20 }}>
          {isEditing ? (
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <TouchableOpacity
                onPress={handleCancel}
                style={{
                  backgroundColor: '#ef4444',
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <X color="white" size={18} />
                <Text style={{ color: 'white', fontWeight: '600' }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSave}
                style={{
                  backgroundColor: '#16a34a',
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                  borderRadius: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <Check color="white" size={18} />
                <Text style={{ color: 'white', fontWeight: '600' }}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => setIsEditing(true)}
              style={{
                backgroundColor: '#22c55e',
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderRadius: 30,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <Edit2 color="white" size={18} />
              <Text style={{ color: 'white', fontWeight: '600' }}>Edit Profile</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Form Fields */}
        <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 20, marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 }}>
          {/* Username */}
          <View style={{ marginBottom: 20 }}>
            <Text style={{ color: '#166534', fontWeight: '600', marginBottom: 8 }}>Username</Text>
            <TextInput
              value={isEditing ? tempUsername : username}
              onChangeText={setTempUsername}
              editable={isEditing}
              style={{
                borderWidth: 1,
                borderColor: isEditing ? '#86efac' : '#e5e7eb',
                borderRadius: 12,
                padding: 14,
                fontSize: 16,
                backgroundColor: isEditing ? '#fafffd' : '#f9fafb',
              }}
              placeholder="Enter username"
            />
          </View>

          {/* Email */}
          <View style={{ marginBottom: 20 }}>
            <Text style={{ color: '#166534', fontWeight: '600', marginBottom: 8 }}>Email</Text>
            <TextInput
              value={isEditing ? tempEmail : email}
              onChangeText={setTempEmail}
              editable={isEditing}
              keyboardType="email-address"
              style={{
                borderWidth: 1,
                borderColor: isEditing ? '#86efac' : '#e5e7eb',
                borderRadius: 12,
                padding: 14,
                fontSize: 16,
                backgroundColor: isEditing ? '#fafffd' : '#f9fafb',
              }}
              placeholder="your@email.com"
            />
          </View>

          {/* Address */}
          <View style={{ marginBottom: 10 }}>
            <Text style={{ color: '#166534', fontWeight: '600', marginBottom: 8 }}>
              <MapPin size={16} style={{ display: 'inline' }} /> Delivery/Collection Address
            </Text>
            <TextInput
              value={isEditing ? tempAddress : address}
              onChangeText={setTempAddress}
              editable={isEditing}
              style={{
                borderWidth: 1,
                borderColor: isEditing ? '#86efac' : '#e5e7eb',
                borderRadius: 12,
                padding: 14,
                fontSize: 16,
                backgroundColor: isEditing ? '#fafffd' : '#f9fafb',
              }}
              placeholder="Your home or pickup address"
            />
          </View>
        </View>

        {/* Eco Stats */}
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#166534', marginBottom: 20 }}>
          Your Eco Impact 🌍
        </Text>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between' }}>
          <View style={{ backgroundColor: '#ecfdf5', padding: 20, borderRadius: 16, flex: 1, minWidth: 150, alignItems: 'center' }}>
            <Recycle color="#16a34a" size={32} />
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#166534', marginTop: 8 }}>842</Text>
            <Text style={{ color: '#4b5563' }}>Kg Recycled</Text>
          </View>

          <View style={{ backgroundColor: '#f0fdf4', padding: 20, borderRadius: 16, flex: 1, minWidth: 150, alignItems: 'center' }}>
            <Leaf color="#16a34a" size={32} />
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#166534', marginTop: 8 }}>67</Text>
            <Text style={{ color: '#4b5563' }}>Trees Saved</Text>
          </View>

          <View style={{ backgroundColor: '#ecfdf5', padding: 20, borderRadius: 16, flex: 1, minWidth: 150, alignItems: 'center' }}>
            <Trophy color="#16a34a" size={32} />
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#166534', marginTop: 8 }}>Top 5%</Text>
            <Text style={{ color: '#4b5563' }}>Eco Leaderboard</Text>
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={{
            marginTop: 40,
            backgroundColor: '#fee2e2',
            padding: 16,
            borderRadius: 12,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#dc2626', fontWeight: '600', fontSize: 16 }}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;