export const getUsersList = async () => {
    const res = await fetch('https://panorbit.in/api/users.json')
    const list = await res.json();
    return list;
} 

export const getOnlineUsersList = async() => {
    const usersList = await getUsersList();
    // const usersList = await response.json();
    const finalList = usersList.users.map((user, index) => {
        return {
            text: user.name,
            profileImg: user.profilepicture,
            isOnline: index%2 ? true: false
        }
    })
    return finalList;
}