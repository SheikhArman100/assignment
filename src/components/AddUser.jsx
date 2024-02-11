import { FaPlus } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const AddUser = () => {
  return (
    <>
      <button
        className="bg-textColor text-bgColor p-2 sm:p-4 rounded-full border flex items-center gap-x-2 "
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        <p className="text-lg font-semibold hidden sm:block">Create user</p>
        <FaPlus className="size-6" />
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="flex justify-between items-center">
          <h3 className="font-bold text-3xl">Create new user</h3>
          <button className="bg-textColor  rounded-full p-3" onClick={()=>document.getElementById('my_modal_1').close()}>
          <IoCloseOutline className="size-6 stroke-bgColor"/>
          </button>

          </div>
          <form className="grid grid-cols-2 gap-2">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">First name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Last name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full col-span-2">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full col-span-2">
              <div className="label">
                <span className="label-text">Company Name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full col-span-2">
              <div className="label">
                <span className="label-text">Address</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full col-span-2">
              <div className="label">
                <span className="label-text">Choose a avatar</span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
              />
            </label>
            <button className="btn btn-primary col-span-2 mt-2 text-lg font-semibold capitalize">Create</button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default AddUser;
