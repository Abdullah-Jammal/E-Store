/* eslint-disable @next/next/no-img-element */
import { currentUser } from "@clerk/nextjs/server"
import { LuUser } from "react-icons/lu";

const UserIcon = async () => {
  const user = await currentUser();
  const userImg = user?.imageUrl
  if(userImg) {
    return (
      <div>
        <img src={userImg }
            alt={user?.firstName ? user?.firstName : "img"} 
            className="w-5 h-5 rounded-full"
            />
      </div>
    )
  }
  return <LuUser className="w-7 h-7 rounded-full text-gray-300" />
}

export default UserIcon
