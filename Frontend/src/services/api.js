export const registerTutor = async (tutorData) => {
  try {
    const formData = new FormData();

    for (const key in tutorData) {
      if (tutorData[key] instanceof File) {
        formData.append(key, tutorData[key]);
      } else if (Array.isArray(tutorData[key])) {
        formData.append(key, JSON.stringify(tutorData[key]));
      } else {
        formData.append(key, tutorData[key]);
      }
    }

    const response = await fetch("http://localhost:4000/api/tutorauth/tutorregister", {
      method: "POST",
      body: formData,
    });

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
