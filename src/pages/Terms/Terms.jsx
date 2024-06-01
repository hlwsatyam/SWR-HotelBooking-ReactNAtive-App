import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import PrevNavigation from '../../components/tabs/PrevNavigation';

const Terms = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <PrevNavigation
        iconColor={'black'}
        styleForText={'text-black text-2xl font-bold'}
        navigation={navigation}
        text={'Policy'}
      />
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Security</Text>
        <Text style={styles.sectionContent}>
          We take the security of your information seriously. Our app uses
          industry-standard encryption methods to protect your personal and
          payment information.
        </Text>
        <Text style={styles.sectionContent}>
          For enhanced security, make sure to log out after each session and
          avoid using public Wi-Fi networks when making payments.
        </Text>
        {/* Add more security-related content here */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Privacy Policy</Text>
        <TouchableOpacity onPress={() => handleOpenPrivacyPolicy()}>
          <Text style={styles.linkText}>View our Privacy Policy</Text>
        </TouchableOpacity>
        {/* You can also add a button to navigate to the privacy policy page */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Refund Policy</Text>
        <Text style={styles.sectionContent}>
          Our refund policy varies depending on the hotel and room type you
          booked. Please refer to the booking details for specific refund
          information.
        </Text>
        <Text style={styles.sectionContent}>
          If you encounter any issues with refunds, please contact our support
          team for assistance.
        </Text>
        {/* Add more refund-related content here */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Cancellation Policy</Text>
        <Text style={styles.sectionContent}>
          Cancellation policies may vary depending on the hotel and room type.
          You can find detailed cancellation information in the booking details
          before confirming your reservation.
        </Text>
        <Text style={styles.sectionContent}>
          Please note that some bookings may be non-refundable or have specific
          cancellation deadlines.
        </Text>
        {/* Add more cancellation-related content here */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Troubleshooting</Text>
        <Text style={styles.sectionContent}>
          If you're experiencing technical issues with the app, try the
          following steps:
        </Text>
        <Text style={styles.sectionContent}>
          1. Make sure you have the latest version of the app installed.
        </Text>
        <Text style={styles.sectionContent}>
          2. Check your internet connection and try restarting the app.
        </Text>
        <Text style={styles.sectionContent}>
          3. If the problem persists, contact our support team for further
          assistance.
        </Text>
        {/* Add more troubleshooting tips here */}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Tips for Using the App</Text>
        <Text style={styles.sectionContent}>
          To make the most out of our app, consider the following tips:
        </Text>
        <Text style={styles.sectionContent}>
          1. Use filters to narrow down your search results and find the perfect
          hotel.
        </Text>
        <Text style={styles.sectionContent}>
          2. Take advantage of special offers and discounts available on the
          app.
        </Text>
        <Text style={styles.sectionContent}>
          3. Enable notifications to receive updates on your bookings and
          exclusive deals.
        </Text>
        {/* Add more tips for using the app here */}
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

const handleOpenPrivacyPolicy = () => {
  Linking.openURL('https://rvbmuniverse.com/index.php');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,

    paddingTop: 45,
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    marginBottom: 10,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  contactInfo: {
    marginBottom: 5,
  },
});

export default Terms;
