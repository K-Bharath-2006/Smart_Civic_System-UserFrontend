import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 28,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#202124',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: '#5F6368',
    textAlign: 'center',
    marginBottom: 24,
  },

  loginButton: {
    backgroundColor: '#1A73E8',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
