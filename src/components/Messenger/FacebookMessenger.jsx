import React, { useEffect } from "react"
import { MESSENGER_PAGE_ID } from "../../constants/client"
const FacebookMessenger = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.innerHTML = `var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "108280614804707");
    chatbox.setAttribute("attribution", "biz_inbox");
    window.fbAsyncInit = function() {
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
      <div id="fb-root" />
      <div id="fb-customer-chat" class="fb-customerchat" />
    </>
  )
}

export default FacebookMessenger
