import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { addUserSchema } from "../libs/zod_schema.js";
import { useRef } from "react";

const AddUser = () => {
  const modal = useRef();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addUserSchema),
  });

  const handleAddUser = async (data) => {
    await queryClient.setQueryData(["users"], (oldData) => [
      {
        id: Math.floor(Math.random() * 10000),
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        company: {
          name: data.companyName,
        },
        address: {
          address: data.address,
        },
        image: data.avatar,
      },
      ...oldData,
    ]);
    modal?.current.close();
    reset();
    
  };
  return (
    <>
      <button
        className="bg-textColor text-bgColor p-2 sm:p-4 rounded-full border flex items-center gap-x-2 "
        onClick={() => modal?.current.showModal()}
      >
        <p className="text-lg font-semibold hidden sm:block">Create user</p>
        <FaPlus className="size-6" />
      </button>
      <dialog ref={modal} className="modal">
        <div className="modal-box">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-3xl">Create new user</h3>
            <button
              className="bg-textColor  rounded-full p-3"
              onClick={() => modal?.current.close()}
            >
              <IoCloseOutline className="size-6 stroke-bgColor" />
            </button>
          </div>
          <form
            className="grid grid-cols-2 gap-2"
            onSubmit={handleSubmit(handleAddUser)}
          >
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">First name</span>
              </div>
              <input
                type="text"
                {...register("firstName")}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.firstName?.message && (
                <p className="text-xs font-semibold text-red-700 mt-1">
                  *{errors.firstName?.message}
                </p>
              )}
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Last name</span>
              </div>
              <input
                type="text"
                {...register("lastName")}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.lastName?.message && (
                <p className="text-xs font-semibold text-red-700 mt-1">
                  *{errors.lastName?.message}
                </p>
              )}
            </label>
            <label className="form-control w-full col-span-2">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                {...register("email")}
                placeholder="Type your email"
                className="input input-bordered w-full "
              />
              {errors.email?.message && (
                <p className="text-xs font-semibold text-red-700 mt-1">
                  *{errors.email?.message}
                </p>
              )}
            </label>
            <label className="form-control w-full col-span-2">
              <div className="label">
                <span className="label-text">Company Name</span>
              </div>
              <input
                type="text"
                {...register("companyName")}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
              {errors.companyName?.message && (
                <p className="text-xs font-semibold text-red-700 mt-1">
                  *{errors.companyName?.message}
                </p>
              )}
            </label>
            <label className="form-control w-full col-span-2">
              <div className="label">
                <span className="label-text">Address</span>
              </div>
              <input
                type="text"
                {...register("address")}
                placeholder="Street, Suite, City"
                className="input input-bordered w-full "
              />
              {errors.address?.message && (
                <p className="text-xs font-semibold text-red-700 mt-1">
                  *{errors.address?.message}
                </p>
              )}
            </label>
            <label className="form-control w-full col-span-2">
              <div className="label">
                <span className="label-text">Avatar</span>
              </div>
              <input
                type="text"
                {...register("avatar")}
                placeholder="paste image link"
                className="input input-bordered w-full "
              />
              {errors.avatar?.message && (
                <p className="text-xs font-semibold text-red-700 mt-1">
                  *{errors.avatar?.message}
                </p>
              )}
            </label>
            <button
              type="submit"
              className="btn btn-primary col-span-2 mt-2 text-lg font-semibold capitalize"
            >
              Create
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddUser;
