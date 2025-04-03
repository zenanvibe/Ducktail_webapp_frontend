import React, { useEffect } from "react";

import Layout from "../../layout/customer/Layout";
import CustomerBanner from "../../layout/customer/CustomerBanner";
import useProfileStore from "../../store/customer/useProfileStore";

const CustomerProfile = () => {
  const { profile, fetchProfile } = useProfileStore();

  useEffect(() => {
    const loadProfile = async () => {
      await fetchProfile();
    };
    loadProfile();
  }, [fetchProfile]);

  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <CustomerBanner
            coverImageUrl="/assets/450.jpg" // Local cover image
            profileImageUrl={profile?.profile_image || "/assets/images.jpg"}
            name={profile?.name || "Loading..."}
            progress={75}
          />
        </div>
      </Layout>
    </div>
  );
};

export default CustomerProfile;
