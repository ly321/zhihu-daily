import * as React from 'react';

import ListHeader from '../../components/list_header/list_header';

export default class ListTheme extends React.Component<any, any>{
  constructor(props:any){
    super(props);
    console.log(this.props)
  }
  render() {
    return (
        <div className="list_view">
            <ListHeader />
        </div>
    )
  }
}
