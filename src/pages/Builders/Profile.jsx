import React, { useEffect, useState } from "react";
import Layout from "../../layout/builders/Layout";
import ProfileBanner from "../../layout/builders/ProfileBanner";
  import useProfileStore from "../../store/builders/useProfileStore";
  import calculateProfileCompletion from "../../layout/builders/ProfileDetails/calculateProfileCompletion"; 

const Profile = () => {
  const { profile, fetchProfile } = useProfileStore();
  const [profileCompletion, setProfileCompletion] = useState(0);

  useEffect(() => {
    const loadProfile = async () => {
      await fetchProfile();
    };
    loadProfile();
  }, [fetchProfile]);

  // Calculate profile completion whenever profile data changes
  useEffect(() => {
    if (profile) {
      const completionPercentage = calculateProfileCompletion(profile);
      setProfileCompletion(completionPercentage);
    }
  }, [profile]);

  return (
    <div style={{ backgroundColor: "#E0E0E0" }}>
      <Layout>
        <div>
          <ProfileBanner
            coverImageUrl="/assets/450.jpg"
            name={profile?.builder?.engineer_name}
            profileImageUrl={profile?.builder?.profile_image || "/assets/images.jpg"}
            location={profile?.builder?.district || ""}
            role={profile?.builder?.company_name || ""}
            progress={profileCompletion} // Use the dynamically calculated value
          />
        </div>
      </Layout>
    </div>
  );
};

export default Profile;