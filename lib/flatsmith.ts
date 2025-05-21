// flagsmith.ts
import flagsmith from 'flagsmith';
import 'react-native-url-polyfill/auto'; // Ensure URL is polyfilled

flagsmith.init({
  environmentID: 'production', // Get from your Flagsmith dashboard
  api: 'http://config.maitretech.com:5000/api/v1/', // 👈 point to your self-hosted instance
  enableAnalytics: true, // Optional
  onChange: (oldFlags, params) => {
    console.log('Flags updated:', flagsmith.getAllFlags());
  },
});

export default flagsmith;
