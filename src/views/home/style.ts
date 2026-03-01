import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F7',
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  /* ===== Header ===== */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#030304',
  },

  menuButton: {
    padding: 8,
  },

  menuIcon: {
    fontSize: 24,
    color: '#374151',
  },

  /* ===== Title ===== */
  title: {
    textAlign: 'center',
    fontSize: 15,
    color: '#6B7280',
    marginBottom: 25,
  },

  /* ===== Info Card ===== */
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    marginBottom: 35,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 12,
    color: '#111827',
  },

  cardText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 22,
  },

  /* ===== Primary Button ===== */
  primaryButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 25,

    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 8,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  /* ===== Footer ===== */
  footerText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#9CA3AF',
    marginTop: 'auto',
    marginBottom: 15,
  },

  /* ===== Menu Modal ===== */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(241, 7, 7, 0.25)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginTop: 70,
    marginRight: 15,
    width: 200,
    paddingVertical: 10,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 10,
  },

  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 18,
  },

  menuText: {
    fontSize: 15,
    color: '#111827',
  },
});

export default styles;
