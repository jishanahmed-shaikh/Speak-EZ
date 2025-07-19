import React, { useState, useEffect } from 'react';
export default function App() {
  const [sosOpen, setSosOpen] = useState(false);
  const [sosFeedback, setSosFeedback] = useState('');

  const translations = {
    sos: "SOS",
    needHelp: "Do you need help?",
    callForHelp: "CALL FOR HELP",
    alertMsg: "This will alert your emergency contacts and share your location.",
    emergencyContacts: "Emergency Contacts",
    alert: "Alert",
    locationShare: "Location Share",
    locationShareDesc: "Sends your live location.",
    visualAlert: "Visual Alert",
    visualAlertDesc: "Use phone's flashlight.",
    vibrateAlert: "Vibrate Alert",
    vibrateAlertDesc: "Sends a vibration pattern.",
    preWritten: "Pre-written Messages",
    preWrittenDesc: "Quickly send for help.",
    emergencyMessages: ["I need help, this is my current location."],
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex items-center justify-center">
        <div className="w-full max-w-md mx-auto">
             <EmergencyView 
                setSosOpen={(isOpen) => {
                    setSosOpen(isOpen);
                    if (isOpen) {
                        setSosFeedback("Help alert has been sent!");
                        setTimeout(() => setSosFeedback(''), 3000);
                    }
                }} 
                sosFeedback={sosFeedback} 
                translations={translations} 
            />
        </div>
    </div>
  );
}


// The updated EmergencyView component
export function EmergencyView({ setSosOpen, sosFeedback, translations }) {
  const T = translations;

  const [emergencyContacts, setEmergencyContacts] = useState([
    { name: "Family", number: "Emergency Contact 1" },
    { name: "Friend", number: "Emergency Contact 2" },
    { name: "Caregiver", number: "Emergency Contact 3" }
  ]);

  // State for flashlight functionality
  const [isFlashlightOn, setIsFlashlightOn] = useState(false);
  const [stream, setStream] = useState(null);
  const [flashlightError, setFlashlightError] = useState('');

  const toggleFlashlight = async () => {
    console.log("Attempting to toggle flashlight...");
    if (isFlashlightOn && stream) {
      console.log("Turning flashlight OFF.");
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setIsFlashlightOn(false);
      setFlashlightError('');
      return;
    }

    console.log("Turning flashlight ON.");
    // Check if the necessary mediaDevices APIs are supported.
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("getUserMedia() not supported.");
      setFlashlightError('Your browser does not support camera access.');
      return;
    }
    
    // Check if the 'torch' constraint is supported. This is the most important check.
    const supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
    if (!supportedConstraints.torch) {
        console.error("The 'torch' constraint is not supported by this browser/device.");
        setFlashlightError('Flashlight control is not supported on your device or browser. This is common on iPhones.');
        return;
    }

    try {
      console.log("Requesting camera with 'environment' facingMode.");
      // Request access to the user's camera (the environment-facing one)
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      
      const track = mediaStream.getVideoTracks()[0];
      console.log("Got video track. Applying 'torch' constraint.");
      
      // The 'torch' constraint is the key to turning on the flashlight.
      await track.applyConstraints({
        advanced: [{ torch: true }]
      });

      console.log("Flashlight should be ON.");
      // Update state to reflect that the flashlight is on
      setStream(mediaStream);
      setIsFlashlightOn(true);
      setFlashlightError('');
    } catch (err) {
      // Handle potential errors
      console.error("Error accessing flashlight:", err);
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setFlashlightError('Permission to use camera was denied.');
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
         setFlashlightError('Could not find a back camera.');
      } else if (err.name === 'OverconstrainedError' || err.name === 'ConstraintNotSatisfiedError') {
         setFlashlightError('Could not find a camera with a flashlight.');
      } else {
        setFlashlightError('Could not access the flashlight. It may not be supported on your device.');
      }
    }
  };

  /**
   * Triggers the device's vibration hardware.
   */
  const handleVibrate = () => {
    if ('vibrate' in navigator) {
      // Vibrate for 500 milliseconds
      navigator.vibrate(500);
    } else {
      console.log('Vibration not supported on this device.');
    }
  };

  // Effect to clean up and turn off the flashlight when the component is removed
  useEffect(() => {
    return () => {
      if (stream) {
        console.log("Component unmounting. Turning off flashlight.");
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <section className="flex flex-col gap-4 items-center justify-center h-full animate-fade-in">
      <h2 className="text-xl font-bold text-red-600 flex items-center gap-2 animate-pulse">
        <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 9v2m0 4h.01M21 20H3a1 1 0 01-.894-1.447l9-16a1 1 0 011.788 0l9 16A1 1 0 0121 20z' />
        </svg>
        {T.sos}
      </h2>

      <div className="bg-red-50 rounded-xl p-4 w-full flex flex-col items-center">
        <div className="text-red-700 font-bold text-lg mb-2">{T.needHelp}</div>
        <button
          className="bg-red-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-red-700 transition-transform transform hover:scale-105 animate-pulse mb-4"
          onClick={() => setSosOpen(true)}
        >
          <span className="text-xl mr-2">🚨</span>
          {T.callForHelp}
        </button>
        <div className="text-gray-500 text-sm mt-2 text-center">{T.alertMsg}</div>
        {sosFeedback && (
          <div className="text-green-600 font-semibold mt-2 animate-fade-in text-center bg-green-50 p-2 rounded-lg">
            {sosFeedback}
          </div>
        )}
      </div>

      <div className="w-full bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-lg">📞</span>
          {T.emergencyContacts}
        </h3>
        <div className="space-y-2">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700">{contact.name}</span>
              </div>
              <button
                onClick={() => {
                  const textToCopy = T.emergencyMessages[0];
                  const textArea = document.createElement("textarea");
                  textArea.value = textToCopy;
                  document.body.appendChild(textArea);
                  textArea.select();
                  document.execCommand('copy');
                  document.body.removeChild(textArea);
                  setSosOpen(true);
                }}
                className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
              >
                {T.alert}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 w-full">
        {/* Location Share Card (unchanged) */}
        <div className="bg-blue-50 rounded-lg p-3 text-center">
          <div className="text-xl mb-1">📍</div>
          <div className="text-sm font-semibold text-blue-800">{T.locationShare}</div>
          <div className="text-xs text-blue-600">{T.locationShareDesc}</div>
        </div>
        
        {/* Visual Alert Card (now a button) */}
        <button
          onClick={toggleFlashlight}
          className={`rounded-lg p-3 text-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 ${
            isFlashlightOn ? 'bg-yellow-400 shadow-lg scale-105' : 'bg-yellow-50 hover:bg-yellow-100'
          }`}
        >
          <div className="text-xl mb-1">💡</div>
          <div className={`text-sm font-semibold ${isFlashlightOn ? 'text-black' : 'text-yellow-800'}`}>
            {T.visualAlert}
          </div>
          <div className={`text-xs ${isFlashlightOn ? 'text-gray-800' : 'text-yellow-600'}`}>
            {isFlashlightOn ? 'Flashlight is ON' : T.visualAlertDesc}
          </div>
        </button>

        {/* Vibrate Alert Card (now a button) */}
        <button
          onClick={handleVibrate}
          className="bg-purple-50 rounded-lg p-3 text-center hover:bg-purple-100 active:bg-purple-200 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          <div className="text-xl mb-1">📳</div>
          <div className="text-sm font-semibold text-purple-800">{T.vibrateAlert}</div>
          <div className="text-xs text-purple-600">{T.vibrateAlertDesc}</div>
        </button>
        
        {/* Pre-written Card (unchanged) */}
        <div className="bg-green-50 rounded-lg p-3 text-center">
          <div className="text-xl mb-1">📝</div>
          <div className="text-sm font-semibold text-green-800">{T.preWritten}</div>
          <div className="text-xs text-green-600">{T.preWrittenDesc}</div>
        </div>
      </div>
      
      {/* Error display for flashlight */}
      {flashlightError && (
        <div className="w-full mt-2 text-center text-red-600 text-sm bg-red-100 p-3 rounded-lg">
          <strong>Flashlight Error:</strong> {flashlightError}
        </div>
      )}
    </section>
  );
}
