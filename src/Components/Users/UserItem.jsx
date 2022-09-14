import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function UserItem({ user: { login, avater_url } }) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className="flex-row items-center space-x-4 card-body">

        <div>
          <div className="avater">
            <div className="rounded-full shadow width-14 height-14">
              <img src={avater_url} alt="Profile" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="card-title">{login}</h2>
          <Link className='text-base-content text-opacity-40' to={`/users/${login}`}>
            Visit Profile
          </Link>
        </div>

      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;