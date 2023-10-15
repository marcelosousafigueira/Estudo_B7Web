import { Notas } from '@/components/Notas';
import { StudentTable } from '@/components/StudentTable';
import {peopleList} from '@/data/peopleList';
import { students } from '@/data/students';

const Page = () => {

 

  return(
    <div className="container mx-auto">
    <StudentTable students={students}/>
    </div>
    
  );
}
export default Page;