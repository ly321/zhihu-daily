import * as React from 'react';

import ListHeader from '../../components/list_header/list_header';
import ListContent from '../../components/list_content/List_Content';
import Sidebar from '../../components/sidebar/Sidebar';

export default class ListTheme extends React.Component<any, any>{
  constructor(props:any){
    super(props);
  }
  render() {
    return (
        <div className="list_view">
            <ListHeader />
            <ListContent/>
            <Sidebar />
        </div>
    )
  }
}
