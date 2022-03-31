import React, { useState } from 'react';
import Select from 'react-select';



const Chooseoption = () => {

    const [car, setCar] = useState({});
    const [filtercar, setfilterCar] = useState({});
  
    
    useEffect(() => {
       fetch("https://backend.bhalogari.com/api/cars/choose-by-maker/?format=json&maker_name")
       .then((response) => response.json())
      .then((data) => setCar(data));
       
      }, []);

    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <div>
            <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={data}
      />
        </div>
    );
};

export default Chooseoption;