// import { useState } from "react"
// import supabase from "../../supabaseClient";

export default function ViewStudentInfo({student}) {
  // const [studentName, setStudentName] = useState("");
  // const [className, setClassName] = useState("");
  // const [fee, setFee] = useState("");
  // const [contactNumber, setContactNumber] = useState("");

  // async function submitInfo(e) {
  //    e.preventDefault();
  //   if (!studentName || !className || !fee || !contactNumber) {
  //     alert("Please fill in all fields!");
  //     return;
  //   }

  //   const { data: { user } } = await supabase.auth.getUser();
  //   const {data,error} = await supabase
  //   .from('student')
  //   .insert([{
  //     user_id : user.id,
  //     student_name: studentName,
  //     class: className,
  //     fee: fee,
  //     contact_number: contactNumber,
  //   }]);

  //   if (error) {
  //   console.error('Error creating student', error);
  // } else {
  //   setStudentName('');
  //   setClassName('');
  //   setFee('');
  //   setContactNumber('');
  //   console.log('Student created', data);
  //   window.location.href = '/dashboard'; //to redirect/refresh the page once submit.
  //   }
  // };

  // function submitName(e) {
  //   setStudentName(e.target.value)
  // }
  // function submitClassName(e) {
  //   setClassName(e.target.value)
  // }
  // function submitFee(e) {
  //   setFee(e.target.value)
  // }
  // function submitNumber(e) {
  //   setContactNumber(e.target.value)
  // }

  return(
    <>
      <div className="dropdown dropdown-hover dropdown-right">
  <div tabIndex={0} role="button" className="m-1">{student}</div>
  <div
    tabIndex={0}
    className="dropdown-content absolute left-0 mt-2 card card-sm bg-base-300 z-[9999] w-64 shadow-md">
    <div className="card-body">
      <p>To fetch student name</p>
      <p>To fetch phone number</p>
      <p>To fetch parent phone number</p>
      <p>To fetch user join date</p>
      <p>To create edit button</p>
      <p>To create delete button</p>
    </div>
  </div>
</div>
    </>
  )
}