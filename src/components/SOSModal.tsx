import React, { useState, useEffect, useRef } from 'react';

export function SOSModal({ open, onClose, message, onCopy, translations = {} }) {
  const T = translations || {};

  const [selectedMessage, setSelectedMessage] = useState(T.emergencyMessages?.[0] || message || '');
  const [isVibrating, setIsVibrating] = useState(false);
  const [location, setLocation] = useState(null);
  const [locationStatus, setLocationStatus] = useState('');
  const [isBlinking, setIsBlinking] = useState(false);
  const [stream, setStream] = useState(null);
  const [flashlightError, setFlashlightError] = useState('');
  const blinkIntervalRef = useRef(null);

  useEffect(() => {
    if (open) {
      getCurrentLocation();
    } else {
      clearInterval(blinkIntervalRef.current);
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      setStream(null);
      setIsBlinking(false);
      setFlashlightError('');
      setIsVibrating(false);
      if (navigator.vibrate) navigator.vibrate(0);
    }
  }, [open, stream]);

  const getCurrentLocation = () => {
    setLocationStatus(T.locationStatusGetting || 'Getting your location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const loc = { lat: position.coords.latitude, lng: position.coords.longitude };
          setLocation(loc);
          setLocationStatus(`${T.locationStatusSuccess || '📍 Location:'} ${loc.lat.toFixed(4)}, ${loc.lng.toFixed(4)}`);
        },
        (error) => {
          setLocationStatus(T.locationStatusError || 'Unable to get location');
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    } else {
      setLocationStatus(T.locationStatusError || 'Unable to get location');
    }
  };

  const startBlinking = async () => {
    if (isBlinking) return;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getSupportedConstraints().torch) {
      setFlashlightError('Flashlight not supported on this device/browser.');
      return;
    }

    try {
      setIsBlinking(true);
      setFlashlightError('');

      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      setStream(mediaStream);
      const track = mediaStream.getVideoTracks()[0];

      let lightOn = false;
      blinkIntervalRef.current = setInterval(() => {
        lightOn = !lightOn;
        track.applyConstraints({ advanced: [{ torch: lightOn }] });
      }, 500);

      setTimeout(() => {
        clearInterval(blinkIntervalRef.current);
        if (track.readyState === 'live') {
          track.applyConstraints({ advanced: [{ torch: false }] });
        }
        mediaStream.getTracks().forEach(track => track.stop());
        setStream(null);
        setIsBlinking(false);
      }, 10000);

    } catch (err) {
      setFlashlightError('Could not activate flashlight. Check camera permissions.');
      setIsBlinking(false);
    }
  };

  const startVibrateAlert = () => {
    if (navigator.vibrate) {
      setIsVibrating(true);
      navigator.vibrate([200, 100, 200, 100, 200, 300, 500, 300, 500]);
      setTimeout(() => setIsVibrating(false), 5000);
    }
  };

  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      onCopy();
    } catch (err) {
      console.error('Copy failed', err);
    }
    document.body.removeChild(textArea);
  };

  const buildSMSMessage = () => {
    const time = new Date().toLocaleString();
    const mapsLink = location ? `https://maps.google.com/?q=${location.lat},${location.lng}` : 'Location unavailable';
    return `${selectedMessage}\n\n${locationStatus}\n${mapsLink}\nTime: ${time}`;
  };

  const sendEmergencyMessage = () => {
    copyToClipboard(buildSMSMessage());
    startBlinking();
    startVibrateAlert();
  };

  const sendSMSTo112 = () => {
    const sms = `sms:112?&body=${encodeURIComponent(buildSMSMessage())}`;
    window.location.href = sms;
  };

  const sendSMSToAmbulance = () => {
    const sms = `sms:102?&body=${encodeURIComponent(buildSMSMessage())}`;
    window.location.href = sms;
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-red-600 flex items-center gap-2">
            <span className="text-2xl animate-pulse">🚨</span>
            {T.sos || 'Emergency'}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl font-bold">&times;</button>
        </div>

        <div className="bg-blue-50 rounded-lg p-3 mb-4">
          <div className="text-sm text-blue-600">{locationStatus || 'Initializing...'}</div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">{T.selectEmergencyMessage}</label>
          <select value={selectedMessage} onChange={(e) => setSelectedMessage(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg">
            {(T.emergencyMessages || [message || '']).map((msg, i) => (
              <option key={i} value={msg}>{msg.length > 50 ? msg.substring(0, 50) + '...' : msg}</option>
            ))}
          </select>
        </div>

        <div className="space-y-3 mb-4">
          <button onClick={sendEmergencyMessage} className="w-full bg-red-600 text-white rounded-lg px-4 py-3 font-bold text-lg shadow hover:bg-red-700 transition animate-pulse flex items-center justify-center gap-2">
            🚨 {T.callForHelp || 'Call for Help'}
          </button>
          <button onClick={sendSMSTo112} className="w-full bg-blue-600 text-white rounded-lg px-4 py-3 font-bold text-base shadow hover:bg-blue-700 transition flex items-center justify-center gap-2">
            📤 Send SMS to 112 (Police)
          </button>
          <button onClick={sendSMSToAmbulance} className="w-full bg-green-600 text-white rounded-lg px-4 py-3 font-bold text-base shadow hover:bg-green-700 transition flex items-center justify-center gap-2">
            🏥 Send SMS to 102 (Ambulance)
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <button onClick={startBlinking} disabled={isBlinking} className={`p-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 text-sm ${isBlinking ? 'bg-yellow-400 text-black cursor-not-allowed' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
            <span className="text-lg">💡</span>
            {isBlinking ? T.flashing : T.flashAlert}
          </button>
          <button onClick={startVibrateAlert} disabled={isVibrating} className={`p-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 text-sm ${isVibrating ? 'bg-purple-400 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
            <span className="text-lg">📳</span>
            {isVibrating ? T.vibrating : T.vibrateAlert}
          </button>
        </div>

        {flashlightError && (
          <div className="w-full mb-4 text-center text-red-600 text-sm bg-red-100 p-2 rounded-lg">
            <strong>Flashlight Error:</strong> {flashlightError}
          </div>
        )}

        <div className="mt-4 text-xs text-gray-500 text-center">
          {T.alertMsg}
        </div>
      </div>
    </div>
  );
}
