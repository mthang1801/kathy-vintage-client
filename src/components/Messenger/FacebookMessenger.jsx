import React,{useEffect} from 'react'
import {MESSENGER_PAGE_ID} from "../../constants/client"
const FacebookMessenger = () => {
  useEffect(() => {   
    const script = document.createElement("script")
    script.innerHTML = `window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v10.0'
      });
    };

    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));`
    document.body.appendChild(script)
  }, [])
  return (
   <>
    <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id={MESSENGER_PAGE_ID}
      ></div>
  </>
  )
}

export default FacebookMessenger
