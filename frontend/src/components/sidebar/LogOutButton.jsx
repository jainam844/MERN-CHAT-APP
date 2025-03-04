import { BiLogOut } from "react-icons/bi";
import UseLogOut from "../../hooks/UseLogOut";

const LogoutButton = () => {
    const { loading, logOut } = UseLogOut();

    return (
        <div className='mt-auto'>
            {!loading ? (
                <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logOut} />
            ) : (
                <span className='loading loading-spinner'></span>
            )}
        </div>
    );
};
export default LogoutButton;