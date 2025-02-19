export type ProfileProps = {
    name: string
}


export const Profile = ({name}: ProfileProps) => {
    return <div>Private Profile content, Name is {name}</div>
}