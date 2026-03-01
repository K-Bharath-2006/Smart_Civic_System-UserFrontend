import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  /* ---------- SCREEN ---------- */
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F4F6F8',
  },

  /* ---------- HEADER ---------- */
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 18,
  },

  /* ---------- ISSUE CARD ---------- */
  issueCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },

  issueText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 6,
  },

  issueLabel: {
    fontWeight: '600',
    color: '#111827',
  },

  /* ---------- IMAGE / CAMERA ---------- */
  imageBox: {
    height: 220,
    borderRadius: 16,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  imageText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#374151',
  },

  /* ---------- COMPLETE BUTTON ---------- */
  completeButton: {
    backgroundColor: '#16A34A',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },

  completeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.4,
  },

});
