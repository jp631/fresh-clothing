import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySlections }  from '../../redux/directory/directory.selectors';


import './directory.style.scss';

const Directory = ({ sections })=> {
            return(
                <div className='directory-menu'>
              {    
                sections.map( ({id, ...otherSectionsProps}) => (
                    <MenuItem key={id} {...otherSectionsProps}/>
                    ))
                    }
                </div>
            )
}

const mapStateToProps= createStructuredSelector({
  sections: selectDirectorySlections,
})

export default connect(mapStateToProps)(Directory);