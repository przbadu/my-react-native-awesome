import React, { useState, useEffect } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import FingerprintMessage from "./FingerprintMessage";
import FingerprintAuth from "./FingerprintAuth";

export default function App() {
  const [supportedHardware, setSupportedHardware] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [supportsfingerprint, setSupportsfingerprint] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const checkIffingerprintSupported = async () => {
    hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (hasHardware) {
      const supportedHardwares = await LocalAuthentication.supportedAuthenticationTypesAsync();
      if (supportedHardwares[0] === 1) {
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();
        setSupportedHardware(true);

        if (isEnrolled) {
          setIsEnrolled(true);
          setSupportsfingerprint(true);
        } else {
          console.log("You don't have saved fingerprint authentication");
          setIsEnrolled(false);
          setSupportsfingerprint(false);
        }
      } else {
        setSupportedHardware(false);
        setSupportsfingerprint(false);
      }
    }
  };

  const authenticate = async () => {
    const { success } = await LocalAuthentication.authenticateAsync();
    setAuthenticated(success);
  };

  useEffect(() => {
    checkIffingerprintSupported();
  }, []);

  if (authenticated) return <FingerprintMessage message="Authenticated" />;
  else if (supportsfingerprint)
    return <FingerprintAuth onPress={authenticate} />;
  else if (!isEnrolled)
    return (
      <FingerprintMessage message="Secure lock screen isn't setup. Go to 'Settings -> Security -> Fingerprint' to setup a fingerprint" />
    );

  return (
    <FingerprintMessage message="Your device do not supports fingerprint" />
  );
}
