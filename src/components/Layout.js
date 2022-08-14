import React from 'react';
import '../styles/global.css'

import { CourierProvider } from "@trycourier/react-provider";
import { Toast } from "@trycourier/react-toast";
import { Inbox } from "@trycourier/react-inbox";

function Layout({children}) {
    const CLIENT_KEY = "YOUR CLIENT KEY"
    const USER_ID = "USER ID"

    const handleMessage = (message) => {
      console.log(message)
      return message
    }

  return (
    <CourierProvider onMessage={handleMessage} clientKey={CLIENT_KEY} userId={USER_ID}>
        <nav>
            <h1>My Website</h1>
            <Toast />
            <Inbox />
        </nav>
        {children}
    </CourierProvider>
  )
}

export default Layout

