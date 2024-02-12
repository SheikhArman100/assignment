import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { axiosPublic } from "../libs/axios/axiosIntsance.js";

const UserDetails = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const {
    data: user,
    isPending,
    error,
  } = useQuery({
    queryKey: ["users", id],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axiosPublic.get(`/users/${id}`);

      return response.data;
    },
    retry: false,
  });

  if (isPending) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <span className="loading loading-spinner loading-md"></span>
      </div>
    );
  }
  if (error) {
    const data = queryClient.getQueryData(["users"]);

    const user = data?.filter((person) => person.id == id);
    
    return (
      <div className=" w-full flex  ">
        {user ? (
          <article className="w-full">
            <h3 className="text-2xl font-medium">Profile</h3>
            <p className="text-sm text-gray-700">
              This is how others will see you on the site.
            </p>
            <div className="h-0.5 w-full bg-black mt-4" />
            <section className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:px-8 lg:px-[2rem] xl:px-[4rem] 2xl:px-[8rem] mt-3">
              <div className="mt-4 flex flex-col items-center md:col-span-2  gap-y-1 ">
                <div className="avatar">
                  <div className="w-24 md:w-32 rounded-full border">
                    <img src={user[0].image} alt={user[0].id} />
                  </div>
                </div>
                <span className="text-blue-400 underline">Change avatar</span>
              </div>
              <div className="flex flex-col items-start gap-y-1 ">
                <span className="label-text text-lg font-semibold">
                  First Name
                </span>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-lg"
                  value={user[0].firstName}
                  readOnly
                />
              </div>
              <div className="flex flex-col items-start gap-y-1 ">
                <span className="label-text text-lg font-semibold">
                  Last Name
                </span>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-lg"
                  value={user[0].lastName}
                  readOnly
                />
              </div>
              <div className="flex flex-col items-start gap-y-1 ">
                <span className="label-text text-lg font-semibold">Email</span>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-lg"
                  value={user[0].email}
                  readOnly
                />
              </div>
              <div className="flex flex-col items-start gap-y-1 md:col-span-2">
                <span className="label-text text-lg font-semibold">
                  Company Name
                </span>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-lg"
                  value={user[0].company.name}
                  readOnly
                />
              </div>
              <div className="flex flex-col items-start gap-y-1  md:col-span-2">
                <span className="label-text text-lg font-semibold">
                  Address
                </span>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-lg"
                  value={`${user[0].address.address}, ${user[0].address.city||""}`}
                  readOnly
                />
              </div>
            </section>
          </article>
        ) : (
          <p className="text-xl font-semibold">Something went wrong</p>
        )}
      </div>
    );
  }
  return (
    <article className="">
      <h3 className="text-2xl font-medium">Profile</h3>
      <p className="text-sm text-gray-700">
        This is how others will see you on the site.
      </p>
      <div className="h-0.5 w-full bg-black mt-4" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:px-8 lg:px-[2rem] xl:px-[4rem] 2xl:px-[8rem] mt-3">
        <div className="mt-4 flex flex-col items-center md:col-span-2  gap-y-1 ">
          <div className="avatar">
            <div className="w-24 md:w-32 rounded-full border">
              <img src={user.image} alt={user.id} />
            </div>
          </div>
          <span className="text-blue-400 underline">Change avatar</span>
        </div>
        <div className="flex flex-col items-start gap-y-1 ">
          <span className="label-text text-lg font-semibold">First Name</span>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            value={user.firstName}
            readOnly
          />
        </div>
        <div className="flex flex-col items-start gap-y-1 ">
          <span className="label-text text-lg font-semibold">Last Name</span>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            value={user.lastName}
            readOnly
          />
        </div>
        <div className="flex flex-col items-start gap-y-1 ">
          <span className="label-text text-lg font-semibold">Email</span>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            value={user.email}
            readOnly
          />
        </div>
        <div className="flex flex-col items-start gap-y-1 md:col-span-2">
          <span className="label-text text-lg font-semibold">Company Name</span>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            value={user.company.name}
            readOnly
          />
        </div>
        <div className="flex flex-col items-start gap-y-1  md:col-span-2">
          <span className="label-text text-lg font-semibold">Address</span>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
            value={`${user.address.address}, ${user.address.city}`}
            readOnly
          />
        </div>
      </section>
    </article>
  );
};

export default UserDetails;
