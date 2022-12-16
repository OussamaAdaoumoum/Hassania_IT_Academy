import React, { useEffect, useState } from "react";
import FormationCard from "../../components/FormationCard/FormationCard";
import OneWord from "../../../components/words/OneWord/OneWord";


function Mens() {
  const [items, setItems] = useState(null);
  const [formations, setFormations] = useState([]);

//   const fetchData = async () => {
//     await fetch("http://localhost:3000/Mens")
//       .then((response) => response.json())
//       .then(async (data) => {
//     //    const col = collection(getFirestore(), "items");
//    //     const o = getDocs(col);
      
//           data.forEach((el) => {
//             const d = doc(getFirestore(), "Mens", "" + el.id);
//             setDoc(d, el);
//           });
        
//         return setItems(data);
//       })
//       .catch((error) => console.log(error));
//   };

  function getUser() {
    axios.get(`http://localhost/API_AND_REACT/react-crud-php-api-mysql/api/user/${id}`).then(function(response) {
        console.log(response.data);
        setFormations(response.data);
    });
}

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {items && (
          <div className="w-full flex flex-col">
            <OneWord Word="MENS" size="text-4xl"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
              {items.map((formation) => (
                <FormationCard card={formation} key={formation.id} />
              ))}
            </div>
          </div>
      )}
    </>
  );
}

export default Mens;
