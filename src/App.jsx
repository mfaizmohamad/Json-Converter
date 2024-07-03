import StringToJsonConverter from "./component/StringToJsonConverter";
import IPTAToJson from "./component/IPTAToJson";

function App() {
  return (
    <div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
        <h1 class="mb-[-3rem] flex gap-3 drop-shadow-lg pt-10 pl-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6x">
         <img src="/json.jpg" className="w-12 rounded-lg" alt="" /> JSON <span class="text-green-600">Converter</span>
        </h1>
        <div className="m-20">
          <IPTAToJson />
        </div>
        <div className="m-20">
        <StringToJsonConverter />
        </div>
    </div>
  );
}

export default App;
