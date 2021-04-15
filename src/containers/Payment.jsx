import React from 'react'

import '../styles/components/Payment.css';

export default function Payment() {

  const idPaypal = "Aeqn2bdoDAIOByV5nNI7BDpwi0V2xpV6d5vfM-NRLqjj0qBBlxwmI5ivQLWNb8YlKmsQdgr9mYu-P2PZ"
    return (
        <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        <div className="Payment-button">Boton de pago con Paypal</div>
      </div>
      <div></div>
    </div>
    )
}
