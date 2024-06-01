import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PrevNavigation from '../../components/tabs/PrevNavigation';

const HelpPage = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PrevNavigation text={'Faq'} navigation={navigation} />
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          Frequently Asked Questions (FAQs)
        </Text>
        <Text style={styles.question}>Q: How do I make a booking?</Text>
        <Text style={styles.answer}>
          A: To make a booking, simply follow these steps:
          {'\n'}1. Open the app and enter your destination.
          {'\n'}2. Select your check-in and check-out dates.
          {'\n'}3. Choose the number of guests and rooms.
          {'\n'}4. Browse available hotels and select the one you prefer.
          {'\n'}5. Review your booking details and proceed to payment.
        </Text>
        <Text style={styles.question}>
          Q: Can I modify or cancel my booking?
        </Text>
        <Text style={styles.answer}>
          A: Yes, you can modify or cancel your booking depending on the hotel's
          cancellation policy. Navigate to the "My Bookings" section to manage
          your reservations.
        </Text>
        {/* Add more FAQs here */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Support</Text>
        <Text style={styles.supportText}>
          For any assistance or inquiries, please contact our support team:
        </Text>
        <TouchableOpacity onPress={() => handleEmailSupport()}>
          <Text style={styles.supportInfo}>
            Email: support@hotelbookingapp.com
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCallSupport()}>
          <Text style={styles.supportInfo}>Phone: 1-800-123-4567</Text>
        </TouchableOpacity>
        {/* You can also add a button to navigate to the support page */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Contact Us</Text>
        <Text style={styles.contactInfo}>Hotel Booking App</Text>
        <Text style={styles.contactInfo}>123 Main Street</Text>
        <Text style={styles.contactInfo}>City, Country</Text>
        <Text style={styles.contactInfo}>Email: info@hotelbookingapp.com</Text>
      </View>
    </ScrollView>
  );
};

const handleEmailSupport = () => {
  // Implement email functionality
};

const handleCallSupport = () => {
  // Implement call functionality
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 20,
    paddingTop: 40,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  question: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answer: {
    marginBottom: 15,
  },
  supportText: {
    marginBottom: 10,
  },
  supportInfo: {
    marginBottom: 5,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  contactInfo: {
    marginBottom: 5,
  },
});

export default HelpPage;
