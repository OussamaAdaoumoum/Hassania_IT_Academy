import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { useState, useEffect } from "react";


function FormationModal({ handleModal, card }) {
  const [user, setUser] = useState(null);
  console.log("card data ", card);




  // Get ID

//   const addToCard = async () => {
//     //     const col = collection(getFirestore(), "items");
//     //     const o = getDocs(col);


//     //   washingtonRef.update({
//     //     population: firebase.firestore.FieldValue.increment(50)
//     // });
//   };

  return (
    <>

        
<Link to="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</Link>

      
          <div
            className="transition duration-700 absolute top-2 right-2 rounded-full bg-gray-200 hover:bg-gray-500 p-1 "
            onClick={handleModal}
          >
            {" "}
            <GrClose />
          </div>

    </>
  );
}

export default FormationModal;
