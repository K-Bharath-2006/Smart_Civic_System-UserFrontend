import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    padding: 16,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },

  emptyText: {
    textAlign: 'center',
    color: '#6B7280',
    marginTop: 40,
    fontSize: 14,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  category: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563EB',
    marginBottom: 6,
  },

  description: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 10,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  status: {
    fontSize: 12,
    fontWeight: '600',
    color: '#16A34A',
  },

  coords: {
    fontSize: 12,
    color: '#6B7280',
  },
});
