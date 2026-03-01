import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#020617',
    paddingTop: 120,
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#38BDF8',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: 40,
  },

  loginButton: {
    width: '100%',
    backgroundColor: '#2563EB',
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 16,
  },

  registerButton: {
    width: '100%',
    backgroundColor: '#16A34A',
    paddingVertical: 15,
    borderRadius: 12,
  },

  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
