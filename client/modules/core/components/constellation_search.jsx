import NoSSR from 'react-no-ssr';
import Modal from './modal.jsx';
import SmartContainers from "meteor/utilities:react-list-container";
import FormContainers from "meteor/utilities:react-form-containers";
import Constellations from '/lib/schemas/constellations';
import Nodes from '/lib/schemas/nodes';

ModalButton = Modal.ModalButton;
NewDocContainer = FormContainers.NewDocContainer;
EditDocContainer = FormContainers.EditDocContainer;
ListContainer = SmartContainers.ListContainer;
DocumentContainer = SmartContainers.DocumentContainer;


class SearchConstellation extends React.Component {
  render() {
console.log('in constellation_search.jsx');
    return (
      <div className="wrapper">

        <NoSSR onSSR={<p>Loading…</p>}>
          <LogInButtons />
        </NoSSR>

        <div className="constellation">
          <ListContainer 
            collection={Constellations} 
            publication="constellations.list"
            terms={{options: {sort: {createdAt: -1}}}}
            options={{sort: {createdAt: -1}}}
            joins={Constellations.getJoins()}
            limit={15}
          >
            <CreateConstellation/>
          </ListContainer>
        </div>
      </div>
    )
  }
};


const LoadMore = props => 
  <a href="#" className="load-more button button--primary" onClick={props.loadMore}>Load More ({props.count}/{props.totalCount})</a>

class CreateConstellation extends React.Component {
  renderNew() {
    
console.log('in constellation_create.jsx renderNew');
    const component = (
      <ModalButton label="Add Constellation" className="button button--primary">
        <NewDocContainer collection={Constellations} label="Add Constellation" methodName="constellations.create"/>
      </ModalButton>
    )
    
    return !!this.props.currentUser ? component : "";
  }

  render() {
console.log('in constellation_create.jsx render' + this.props.results);
    return (
      <div className="constellations">
        {this.renderNew()}
        {this.props.results.map(constellation => 
          <Constellation 
            key={constellation._id} 
            {...constellation} 
            currentUser={this.props.currentUser}
          />)
        }
        {this.props.hasMore ? 
          (this.props.ready ? 
            <LoadMore {...this.props}/> : 
            <p>Loading…</p>
          ) : 
          <p>No more constellations</p>
        }
      </div>
    )
  }
};

export default CreateConstellation;

class EditConstellation extends React.Component {
  renderNew() {
    
    const component = (
      <ModalButton label="Add Node" className="button button--primary">
        <NewDocContainer collection={Nodes} label="Add Node" methodName="nodes.create"/>
      </ModalButton>
    )
    
    return !!this.props.currentUser ? component : "";
  }

  renderEdit() {

    const constellation = this.props;

    const component = (
      <ModalButton label="Edit" className="button button--secondary">
        <EditDocContainer collection={Constellations} document={constellation} label="Edit Constellation" methodName="constellations.edit"/>
      </ModalButton>
    );

    return (
      <div className="item-actions">
        {this.renderNew()}
        {this.props.currentUser && this.props.currentUser._id === constellation.userId ? component : ""}
      </div>
    )
  }

  render() {
    
    const constellation = this.props;

    return (
      <div key={constellation.name} style={{marginBottom: "15px"}}>
        <h2>{constellation.name} ({constellation.year})</h2>
        <p>{constellation.review} – by <strong>{constellation.user && constellation.user.username}</strong></p>
        {this.renderEdit()}
      </div>
    )
  }
};

export default EditConstellation;
