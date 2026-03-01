import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  /* ---------- SCREEN ---------- */
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F4F6F8',
  },

  /* ---------- HEADER ---------- */
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },

  locationText: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 16,
  },

  /* ---------- IMAGE / CAMERA ---------- */
  imageBox: {
    height: 200,
    borderRadius: 14,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  imageText: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '500',
  },

  /* ---------- DESCRIPTION ---------- */
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    height: 110,
    marginBottom: 20,
    fontSize: 14,
    color: '#111827',
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  /* ---------- CATEGORY ---------- */
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },

  categoryButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },

  activeCategory: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },

  categoryText: {
    color: '#111827',
    fontWeight: '600',
    fontSize: 14,
  },

  /* When active, text should be white */
  activeCategoryText: {
    color: '#FFFFFF',
  },

  /* ---------- SUBMIT ---------- */
  submitButton: {
    backgroundColor: '#16A34A',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
