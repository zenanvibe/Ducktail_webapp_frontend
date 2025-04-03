import React, { useEffect } from "react";
import Layout from "../../layout/builders/Layout";
import ProfileBanner from "../../layout/builders/ProfileBanner";
import useProfileStore from "../../store/builders/useProfileStore";

const Profile = () => {
  const { profile, fetchProfile } = useProfileStore();

  useEffect(() => {
    const loadProfile = async () => {
      await fetchProfile();
    };
    loadProfile();
  }, [fetchProfile]);
  // console.log(profile?.builder.engineer_name);

  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProfileBanner
            coverImageUrl="/assets/450.jpg"
            name={profile?.builder?.engineer_name }
            profileImageUrl={profile?.builder?.profile_image || "/assets/images.jpg"}
            location={profile?.builder?.district || ""}
            role={profile?.builder?.company_name || ""} // To be updated later
            progress={75} // To be updated later
          />
        </div>
      </Layout>
    </div>
  );
};

export default Profile;
