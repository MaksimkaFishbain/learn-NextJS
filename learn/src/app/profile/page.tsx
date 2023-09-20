
import {NextPage} from "next";

import Image from "next/dist/client/legacy/image";
import {getServerSession} from "next-auth/next";
import authConfig from "@/app/api/auth/[...nextauth]/options";



const Profile:NextPage = async () => {
    const session = await getServerSession(authConfig);
    return (
        <div className='flex bg-blue-50 p-20 rounded my-auto text-black'>
            {session?.user?.image && (
                <Image src={session.user.image}
                       alt={session.user.name}
                       width={50}
                       height={50}
                       priority
                />
            )
            }
            <div className='mx-1.5'>
                <h1>Здраствуйте, {session?.user?.name}</h1>
                <p>Аккаунт почты: {session?.user?.email}</p>
            </div>


        </div>
    );
};

export default Profile;