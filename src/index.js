import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';

import AprovalCard from './AprovalCard.component';
import CommentDetail from './CommentDetail.component';

const App = () => {
  return (
    <div className='ui container comments'>
      <AprovalCard>Are you sure you want to do this?</AprovalCard>
      <AprovalCard>
        <CommentDetail
          author={Faker.name.firstName()}
          date='Today at 4:45PM'
          avatar={Faker.image.avatar()}
          content={Faker.lorem.paragraph()}
        />
      </AprovalCard>
      <AprovalCard>
        <CommentDetail
          author={Faker.name.firstName()}
          date='Today at 2:23AM'
          avatar={Faker.image.avatar()}
          content={Faker.lorem.paragraph()}
        />
      </AprovalCard>
      <AprovalCard>
        <CommentDetail
          author={Faker.name.firstName()}
          date='Yesterday at 11:02PM'
          avatar={Faker.image.avatar()}
          content={Faker.lorem.paragraph()}
        />
      </AprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
