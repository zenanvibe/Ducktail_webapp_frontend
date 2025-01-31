import { useState } from "react";
import { Upload, Trash, Settings } from "lucide-react";

export default function HomeLoan() {
  const [profileImage, setProfileImage] = useState("/path-to-default-image.jpg");

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center p-4" style={{ backgroundImage: "url('/assets/Interior-Design.png')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-white text-center max-w-2xl">
        <h2 className="text-4xl font-bold">
          <span className="text-yellow-400">INOVATIVE IDEAS</span> FOR YOUR STYLE
        </h2>
        <p className="mt-4 text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="relative bg-white shadow-lg rounded-lg p-6 w-full max-w-lg z-10">
        <div className="grid grid-cols-2 gap-4">
          <input className="border rounded p-2 w-full" placeholder="First Name" defaultValue="Amélie" />
          <input className="border rounded p-2 w-full" placeholder="Last Name" defaultValue="Laurent" />
        </div>
        <div className="mt-4">
          <input className="border rounded p-2 w-full" placeholder="Email address" defaultValue="amelie@untitledui.com" />
        </div>
        <div className="mt-4 flex items-center">
          <input className="border rounded p-2 w-full" placeholder="Username" defaultValue="untitledui.com/amelie" />
          <Settings className="ml-2 text-gray-500" />
        </div>
        <div className="mt-4 flex items-center gap-4">
          <img src={profileImage} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
          <button className="border p-2 rounded flex items-center">
            <Upload className="mr-2" /> Click to replace
          </button>
        </div>
        <div className="mt-6 flex justify-between">
          <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
            <Trash className="mr-2" /> Delete user
          </button>
          <div className="flex gap-2">
            <button className="border px-4 py-2 rounded">Cancel</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
