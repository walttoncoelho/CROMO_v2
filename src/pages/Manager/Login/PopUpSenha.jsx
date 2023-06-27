import React, { useState } from 'react';
import ResetPassword from '../ResetPassword/ResetPassword';

export default function PopupSenha() {

  const [showResetPassword, setShowResetPassword] = useState(false);



  const handleResetPasswordClick = (event) => {
    event.preventDefault();
    setShowResetPassword(true);
  };

  if (showResetPassword) {
    return <ResetPassword />;
  }

  return (
    <div >
      <a href="##" onClick={handleResetPasswordClick}>Esqueceu a senha?</a>

    </div>
  );
}


