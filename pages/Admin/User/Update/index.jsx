import { useEffect, useState } from "react"
import {UserForm} from "../../../../components/CreateUser/Form";
import { useRouter } from 'next/router'

export default function Update(){
  const router = useRouter();
  const userId = router.query.id;
  const [user, setUser] = useState({ UserName: "",phonenumber:"", email: "" });
  const [submitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const getUserDetails = async () => {
      const response = await fetch(`/api/User/${userId}`);
      const data = await response.json();
      setUser({
        UserName: data.UserName,
        email: data.email,
        phonenumber:data.phonenumber
      });
    };

    if (userId) getUserDetails();
  }, [userId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!userId) return alert("Missing UserId!");

    try {
      const response = await fetch(`/api/User/${userId}`, {
        method: "PATCH",
        body: JSON.stringify({
          UserName: user.UserName,
          email: user.email,
          phonenumber:user.phonenumber
        }),
      });

      if (response.ok) {
        router.push("/Admin/User");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full h-full lg:pt-24">
      <UserForm
        type='Edit User'
        user={user}
        setUser={setUser}
        submitting={submitting}
        handleSubmit={updatePrompt}
      />
    </section>
  );
};
