import React, { useState } from "react";

const IPTAToJson = () => {
  const [inputString, setInputString] = useState(
    `Universiti Islam Antarabangsa Malaysia (IIUM)\n`.repeat(9) +
      `Universiti Kebangsaan Malaysia (UKM) (Bangi)\n`.repeat(4)
  );
  const [jsonObject, setJsonObject] = useState(null);

  const convertToJSON = () => {
    // Split input into lines
    const lines = inputString.split("\n").filter((line) => line.trim() !== ""); // Filter out empty lines

    // Create a JSON object
    const json = {};

    // Base URL for the links
    const baseUrl = "https://www2.mqa.gov.my/mqr/iptaKPListAA.cfm?IDAkrIPTS=";

    // Process each line and add to JSON object
    lines.forEach((line, index) => {
      // Generate the URL with a unique ID
      const url = `${baseUrl}${index + 252}`; // Adjust the starting ID as needed

      // Format the line as an <a> tag
      const formattedLine = `<a href='${url}'>${line.trim()}</a>`;

      // Add to JSON object
      json[`line${index + 1}`] = formattedLine;
    });

    // Update state with JSON object
    setJsonObject(json);
  };

  return (
    <div className="shadow-lg p-10 bg-opacity-25 bg-gray-600 rounded-md">
        <h1 className="mb-4 text-xl font-extrabold text-white "><span className="text-transparent bg-clip-text bg-gradient-to-r to-green-500 from-gray-200">IPTA</span> Converter</h1>
      <div className="flex gap-5">
          <div>
              <textarea
                className="border-black w-[30rem] h-[30rem] bg-opacity-25 bg-gray-300 p-5 rounded-md shadow-lg"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
                rows={15}
                cols={80}
              />
              <br />
              <div className="flex justify-end">
                <button
                  class="bg-[#195953] hover:bg-blue-700 text-white font-bold mb-5 py-2 px-4 border border-blue-700 rounded"
                  onClick={convertToJSON}
                >
                  Convert to JSON
                </button>
              </div>
          </div>
          {jsonObject && (
            <div className="text-start w-full h-[30rem] bg-opacity-25 overflow-scroll scroll-smooth rounded-md bg-gray-700 shadow-lg text-white p-10 mb-10 ">
              <h3>JSON Output:</h3>
              <pre>{JSON.stringify(jsonObject, null, 2)}</pre>
            </div>
          )}
      </div>
    </div>
  );
};

export default IPTAToJson;
