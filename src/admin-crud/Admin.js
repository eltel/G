import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../actions';

class Admin extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.fetchAllRealities();
        this.props.fetchAllConstellations();
    }

    render() {
        return <div>Hello world!</div>;
    }
}

const mapStateToProps = state => ({
    constellations: state.constellations.items,
    selectedConstellation: state.constellations.constellation,
    userprofiles: state.userprofiles.items,
    realities: state.universe.realities,
    hypernodes: state.universe.hypernodes,
    galaxies: state.galaxies.items,
    selectedGalaxy: state.galaxies.galaxy,
});

const mapDispatchToProps = {
    fetchUsers: actions.fetchUsers.request,
    fetchAllRealities: actions.fetchAllRealities.request,
    fetchHypernode: actions.fetchHypernode.request,
    fetchAllGalaxies: actions.fetchAllGalaxies.request,
    fetchAllConstellations: actions.fetchAllConstellations.request,
    fetchSingleConstellation: actions.fetchSingleConstellation.request,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
