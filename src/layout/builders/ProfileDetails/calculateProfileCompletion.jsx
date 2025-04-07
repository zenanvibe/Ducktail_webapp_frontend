// This function calculates the profile completion percentage based on filled fields
function calculateProfileCompletion(profile) {
    // Define all fields to check across all sections
    const allRequiredFields = [
      // Basic profile fields
      "company_name",
      "establishment_year",
      "contact_number",
      "email",
      "whatsapp_number",
      "engineer_name",
      "gender",
      "about",
      
      // Address fields
      "address_line1",
      "address_line2",
      "taluk",
      "district",
      "state",
      "postcode",
      "latitude",
      "longitude",
      
      // Documentation fields
      "qualification",
      "gst_number",
      "government_license",
      "graduation_certificate",
      
      // Social media fields
      "facebook_url",
      "linkedin_url",
      "instagram_url",
      "youtube_url"
    ];
  
    // If profile doesn't exist yet, return 0%
    if (!profile || !profile.builder) {
      return 0;
    }
  
    const builder = profile.builder;
    let filledFieldsCount = 0;
    let totalFieldsChecked = 0;
    
    // Count how many fields are filled and how many actually exist in the data
    for (const field of allRequiredFields) {
      // Only count fields that actually exist in your data model
      if (field in builder) {
        totalFieldsChecked++;
        
        // Check if the field has a value
        if (hasValue(builder[field])) {
          filledFieldsCount++;
        }
      }
    }
    
    // Calculate percentage based on filled fields out of total existing fields
    // If no fields exist to check, return 100% (avoid division by zero)
    const completionPercentage = totalFieldsChecked > 0 
      ? (filledFieldsCount / totalFieldsChecked) * 100 
      : 100;
    
    // Always return 100 if every existing field is filled
    if (filledFieldsCount === totalFieldsChecked && totalFieldsChecked > 0) {
      return 100;
    }
    
    // Otherwise round to nearest integer
    return Math.round(completionPercentage);
  }
  
  // Helper function to check if a field has a valid value
  function hasValue(value) {
    if (value === undefined || value === null) {
      return false;
    }
    
    // Handle different types
    if (typeof value === 'string') {
      return value.trim() !== '';
    } else if (typeof value === 'number') {
      return true; // Any number is valid
    } else if (typeof value === 'boolean') {
      return true; // Any boolean is valid
    } else if (typeof value === 'object') {
      return Object.keys(value).length > 0; // Non-empty object
    }
    
    return false;
  }
  
  export default calculateProfileCompletion;