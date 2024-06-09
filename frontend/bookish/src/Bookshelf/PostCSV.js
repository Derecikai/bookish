import axios from "axios";

export function PostCSV({ id, csvFILE }) {
  console.log(`This is ${id}!!!! , and this is csvFile: ${csvFILE}`);
  const addImport = () => {
    const formData = new FormData();
    formData.append("file", csvFILE);
    formData.append("userID", id);
    try {
      axios.post("http://localhost:8080/profiles/import/csv", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error, error.message);
    }
  };

  return addImport;
}
