import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

//що буде іти в state: 
//currentPage + (номер сторінки) 
//userCount - (кількість користувачів)

class UsersList extends React.Component {
  state = {
    currentPage: 1,
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  render() {
    const users = this.props.users;

    const usersPerPage = 3;
    const { currentPage } = this.state;

    //input: numbers
    //output: users in array -[] 
    //знайти початкоий індекс ел в масиві 
    //відрізати по 3

    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersToDisplay = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          currentPage={currentPage}
          goPrev={this.goPrev}
          goNext={this.goNext}
          totalItems={users.length}
          usersPerPage={usersPerPage}
        />
        <ul className="users">
          {usersToDisplay.map(({ id, name, age }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
