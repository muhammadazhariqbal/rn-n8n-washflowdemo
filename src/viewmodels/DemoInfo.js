import InfoDetails from "../models/InfoDetails";

export const handleDemoInfo = async ({ value }) => {
  const { developer, repos } = InfoDetails();
  try {
    if (value === "dev") {
      return { dev: developer };
    }
    if (value === "rep") {
      return { rep: repos };
    }
    if (value !== "rep" && value !== "dev") {
      throw new Error("Invalid value.");
    }
  } catch (e) {
    return { message: e.message };
  }
};
