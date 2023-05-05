import React, { useEffect, useState } from "react";
import { getUserProfile } from "../../services/user.services";
import Account from "../../components/Account/Account";

function Profile() {
  const [user, setUser] = useState({});

  const userProfile = async () => {
    const buyerProfile = await getUserProfile();
    setUser(buyerProfile);
  };

  useEffect(() => {
    userProfile();
  }, []);

  return (
    <div className="content-wrap">
      <Account
        fullName={user.fullName}
        email={user.email}
        address={user.address}
        phone={user.phone}
      />
    </div>
  );
}

export default Profile;
