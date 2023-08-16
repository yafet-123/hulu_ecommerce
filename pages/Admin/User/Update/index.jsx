import { useEffect, useState } from "react"
import {UserForm} from "../../../../components/Admin/User/Form";
import { useRouter } from 'next/router'

export default function Update(){
  const router = useRouter();
  const userId = router.query.id;
  const [user, setUser] = useState({ UserName: "",phonenumber:"", email: "" });
  const [submitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const getUserDetails = async () => {
      const response = await fetch(`/api/User/Get/${userId}`);
      const data = await response.json();
      setUser({
        UserName: data.UserName,
        email: data.email,
        phonenumber:data.phonenumber
      });
    };

    if (userId) getUserDetails();
  }, [userId]);

  return (
    <section className="w-full h-full lg:pt-24">
      <UserForm
        type='Edit User'
        user={user}
      />
    </section>
  );
};
