import React from 'react';
import {View,Text,StyleSheet,SafeAreaView,ScrollView,Dimensions,TouchableOpacity,Platform,} from 'react-native-web';
import { Leaf, Star, Gift } from 'lucide-react';

const { width } = Dimensions.get('window');

// Responsive helpers
const isWeb = Platform.OS === 'web';
const isSmallDevice = width < 375;
const isTablet = width >= 768 && width < 1024;
const isDesktop = width >= 1024;

const columns = isDesktop ? 4 : isTablet ? 3 : 2;
const cardWidth = isWeb
  ? Math.min((width - 80) / columns - 20, 300)
  : (width - 60) / 2;

const RedeemScreen = () => {
  const categories = [
    { title: 'THE PALMS', points: '100', off: '70 OFF', category: 'Loyalty' },
    { title: 'Tranquilisle', points: '200', off: '200 OFF', category: 'Loyalty' },
    { title: 'Beauty & Wellness', points: '150', off: '150 OFF', category: 'Beauty & Wellness' },
    { title: 'Dining', points: '100', off: '100 OFF', category: 'Dining' },
    { title: 'Clothing & Accessories', points: '150', off: '150 OFF', category: 'Clothing & Accessories' },
    { title: 'Eco Store', points: '80', off: '80 OFF', category: 'Sustainability' },
    { title: 'Green Cafe', points: '120', off: '120 OFF', category: 'Dining' },
    { title: 'Plant Shop', points: '90', off: '90 OFF', category: 'Gardening' },
  ];

  const membershipLevels = [
    { name: 'SILVER', active: false },
    { name: 'GOLD', active: false },
    { name: 'PLATINUM', active: true },
    { name: 'DIAMOND', active: false },
  ];

  const currentPoints = 2346.4;
  const targetPoints = 3755;
  const progress = (currentPoints / targetPoints) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          isWeb && { maxWidth: 1200, marginHorizontal: 'auto' },
        ]}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My EcoPoints</Text>
          <Text style={styles.subtitle}>Earn rewards for saving the planet</Text>
        </View>

        {/* Main Points Card */}
        <View style={[styles.mainCard, isWeb && styles.mainCardWeb]}>
          <View style={styles.thanksRow}>
            <Leaf color="#166534" size={isSmallDevice ? 20 : 26} />
            <Text style={styles.thanksText}>
              Thank you for recycling! Every point counts.
            </Text>
          </View>

          <Text style={styles.currentTier}>PLATINUM MEMBER</Text>

          {/* Tier Levels */}
          <View style={styles.levelsContainer}>
            {membershipLevels.map((level, i) => (
              <View key={i} style={styles.levelItem}>
                <Text
                  style={[
                    styles.levelText,
                    level.active && styles.activeLevelText,
                  ]}
                >
                  {level.name}
                </Text>
                {level.active && <View style={styles.activeDot} />}
              </View>
            ))}
          </View>

          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBackground}>
              <View style={[styles.progressFill, { width: `${progress}%` }]} />
            </View>
            <View style={styles.progressLabels}>
              <Text style={styles.progressText}>{currentPoints.toFixed(0)}</Text>
              <Text style={styles.progressText}>{targetPoints}</Text>
            </View>
          </View>

          <Text style={styles.nextTierText}>
            <Text style={styles.bold}>
              {(targetPoints - currentPoints).toFixed(0)}
            </Text>{' '}
            more points to <Text style={styles.bold}>Diamond</Text> tier!
          </Text>

          {/* Info Grid */}
          <View style={styles.infoGrid}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Expires</Text>
              <Text style={styles.infoValue}>31 Jan 2026</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Available Points</Text>
              <Text style={styles.balanceText}>{currentPoints.toFixed(0)}</Text>
            </View>
          </View>
        </View>

        {/* Rewards Section */}
        <View style={styles.rewardsSection}>
          <Text style={styles.sectionTitle}>
            <Gift color="#166534" size={isSmallDevice ? 20 : 24} />
            {'  '}Redeem Your EcoPoints
          </Text>

          <View style={styles.grid}>
            {categories.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.rewardCard, { width: cardWidth }]}
                activeOpacity={0.8}
              >
                <View style={styles.rewardTop}>
                  <Text style={styles.rewardCategoryBadge}>{item.category}</Text>
                  <Text style={styles.discountText}>{item.off}</Text>
                </View>
                <Text style={styles.rewardTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                <View style={styles.pointsBadge}>
                  <Star color="#166534" size={16} />
                  <Text style={styles.pointsText}>{item.points} POINTS</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fdf6',
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    padding: isSmallDevice ? 20 : 28,
    paddingTop: 20,
    backgroundColor: '#0a5f38',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  headerTitle: {
    fontSize: isSmallDevice ? 28 : 34,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: isSmallDevice ? 16 : 18,
    color: '#d1fae5',
    textAlign: 'center',
    marginTop: 8,
    opacity: 0.9,
  },
  mainCard: {
    marginHorizontal: 20,
    marginTop: -20,
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 25,
    elevation: 16,
  },
  mainCardWeb: {
    marginTop: 40,
    maxWidth: 600,
    alignSelf: 'center',
  },
  thanksRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  thanksText: {
    fontSize: isSmallDevice ? 16 : 18,
    color: '#166534',
    fontWeight: '600',
    marginLeft: 10,
  },
  currentTier: {
    fontSize: isSmallDevice ? 26 : 30,
    fontWeight: 'bold',
    color: '#166534',
    textAlign: 'center',
    marginBottom: 20,
  },
  levelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
    paddingHorizontal: 10,
  },
  levelItem: { alignItems: 'center' },
  levelText: {
    fontSize: isSmallDevice ? 12 : 14,
    color: '#9ca3af',
    fontWeight: '600',
  },
  activeLevelText: {
    color: '#166534',
    fontWeight: 'bold',
    fontSize: isSmallDevice ? 14 : 16,
  },
  activeDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#16a34a',
    marginTop: 6,
  },
  progressContainer: { marginVertical: 20 },
  progressBackground: {
    height: 14,
    backgroundColor: '#ecfdf5',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#86efac',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#16a34a',
    borderRadius: 8,
  },
  progressLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4b5563',
  },
  nextTierText: {
    textAlign: 'center',
    fontSize: isSmallDevice ? 15 : 17,
    color: '#166534',
    marginTop: 12,
  },
  bold: { fontWeight: 'bold', color: '#15803d' },
  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0fdf4',
  },
  infoItem: { alignItems: 'center' },
  infoLabel: { fontSize: 13, color: '#6b7280' },
  infoValue: { fontSize: 16, fontWeight: 'bold', color: '#166534', marginTop: 4 },
  balanceText: { fontSize: 28, fontWeight: 'bold', color: '#16a34a' },
  rewardsSection: {
    paddingHorizontal: isWeb ? 20 : 20,
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: isSmallDevice ? 20 : 24,
    fontWeight: 'bold',
    color: '#166534',
    textAlign: 'center',
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: isWeb ? 20 : 16,
    paddingHorizontal: 4,
  },
  rewardCard: {
    backgroundColor: '#f0fdf4',
    borderRadius: 20,
    padding: 18,
    borderWidth: 2,
    borderColor: '#86efac',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 6,
  },
  rewardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  rewardCategoryBadge: {
    fontSize: 10,
    color: '#166534',
    backgroundColor: '#dcfce7',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    fontWeight: '700',
  },
  discountText: {
    fontSize: 13,
    color: '#dc2626',
    fontWeight: 'bold',
  },
  rewardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#166534',
    marginBottom: 12,
    minHeight: 44,
  },
  pointsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#86efac',
  },
  pointsText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#166534',
    marginLeft: 6,
  },
});

export default RedeemScreen;