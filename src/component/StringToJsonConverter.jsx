import React, { useState } from 'react';

const StringToJsonConverter = () => {
  const [inputString, setInputString] = useState(`Program ASASIpintar UKM_x000D_  MQA/SWA12401
  Sarjana Muda Sains Citra dengan Kepujian_x000D_  MQA/SWA16193
  Asasi Sains Fizikal_x000D_  MQA/SWA12422
  Asasi Sains Hayat_x000D_  MQA/SWA12421
  Asasi Sains dan Teknologi_x000D_  MQA/FA14658
  Asasi Sains_x000D_  MQA/FA10897
  Asasi Sains Fizikal_x000D_  MQA/FA11508
  Asasi Sains Hayat_x000D_  MQA/FA11507
  International Foundation in Science_x000D_  MQA/FA11211
  Asasi STEM_x000D_  MQA/FA9547
  Asasi Sains Pertanian_x000D_  MQA/SWA10522
  Tamhidi Perubatan_x000D_  MQA/FA10090
  Tamhidi Perubatan, Pergigian dan Sains_x000D_  MQA/FA15697
  Tamhidi Sains dan Teknologi_x000D_  MQA/FA10093
  Tamhidi Sains Fizikal dan Teknologi_x000D_  MQA/FA15698
  Asasi Sains dan Perubatan_x000D_  MQA/FA6071
  Program Asasi_x000D_  MQA/SWA13399
  Asasi Sains_x000D_  MQA/SWA13287
  `);
  const [jsonObject, setJsonObject] = useState(null);

  const convertToJSON = () => {
    // Split input into lines
    const lines = inputString.split('\n');
    
    // Create a JSON object
    const json = {};

    // Process each line and add to JSON object
    lines.forEach((line, index) => {
      // Remove "_x000D_" and text after it
      const cleanedLine = line.replace(/_x000D_.*/, '').trim();

      // Add to JSON object
      json[`line${index + 1}`] = cleanedLine;
    });

    // Update state with JSON object
    setJsonObject(json);
  };

  return (
    <div className='shadow-md p-10 bg-opacity-25 bg-gray-600 rounded-lg'>
        <h1 className="mb-4 text-xl font-extrabold text-white "><span className="text-transparent bg-clip-text bg-gradient-to-r to-green-500 from-gray-200">COURSES</span> Converter</h1>
      <div className='flex gap-5'>
          <div>
              <textarea
                className='border-black  h-[30rem] w-[30rem] bg-opacity-25 bg-gray-300 p-5 rounded-lg shadow-md'
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
                rows={10}
                cols={80}
              />
              <br />
              <div className='flex justify-end'>
              <button class="bg-[#195953] hover:bg-blue-700 text-white font-bold mb-5 py-2 px-4 border border-blue-700 rounded" onClick={convertToJSON}>Convert to JSON</button>
              </div>
          </div>
          {jsonObject && (
            <div className='text-start h-[30rem] w-full bg-opacity-25 overflow-scroll scroll-smooth rounded-lg bg-gray-700 shadow-md text-white p-10  mb-10'>
              <h3>JSON Output:</h3>
              <pre>{JSON.stringify(jsonObject, null, 2)}</pre>
            </div>
          )}
      </div>
    </div>
  );
};

export default StringToJsonConverter;
