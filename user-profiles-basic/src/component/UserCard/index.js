import "./index.css";

const UserCard = props => {
    const { userData } = props;
    if (!userData) return null; 

    const { id, name, email, phone, company, website, address } = userData;
    return (
        <div className="user-card">
            <img className="user-avatar" src={`https://avatars.dicebear.com/v2/avataars/${name}.svg?options[mood][]=happy`} alt={`avatar${id}`} />
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Company: {company?.name}</p>
            <p>Website: {website}</p>
            <p>Address: {address?.city}, {address?.street}</p>
        </div>
    );
};

export default UserCard;
