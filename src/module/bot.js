import  { useEffect } from 'react';

function TawkToWidget() {
  useEffect(() => {
    // ComponentDidMount equivalent
    // var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/65eee9898d261e1b5f6b7d2e/1homk0h1c';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
    // ComponentWillUnmount equivalent
    return () => {
      // Clean up if needed
    };
  }, []);

  return null; // This component doesn't render anything visible
}

export default TawkToWidget;
