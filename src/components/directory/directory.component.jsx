import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          LinkUrl:'hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          LinkUrl:''
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          LinkUrl:''
        },
        {
          title: 'womens',
          imageUrl: 'https://i.pinimg.com/originals/26/86/c3/2686c3e55f158a2de3c1b49c1eb5d5e8.png',
          size: 'large',
          id: 4,
          LinkUrl:''
        },
        {
          title: 'mens',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPGorkNdvX8iasFOWXdHmTYPENwhhy5aVkQ&usqp=CAU',
          size: 'large',
          id: 5,
          LinkUrl:''

        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
