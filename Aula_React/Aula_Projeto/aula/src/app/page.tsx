"use client"
const Page = () => {

  function handleClick() {
    alert("ok");
  }
 

  return(
    <div className="w-screen h-screen flex justify-center items-center">
    <button onClick= {handleClick} className='p-3 bg-blue-700 text-white rounded-md'>clique aqui</button>
    </div>
    
  );
}
export default Page;

/*


  return(
    <div className="container mx-auto">
    <StudentTable students={students}/>
    </div>
    
  );

  */