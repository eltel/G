## Database information

You can interact with the database directly using graphql by navigating to http://getgee.herokuapp.com/graphql during this phase of development. Details on GraphQL query syntax can be found [here](http://graphql.org/learn/queries/).

### Record types and schemas

Schemas may be found in the folder `src/server/graphql/types`. Each record has an output type and an input type, which are currently identical. The schemas are not optimized, only denormalized a little, and are probably missing at least a few fields.

There are a few collections dedicated to many-to-many relationships among users: Support, Trust, and Watch. Each of these record types has a "toId" and a "fromId" field.

### Queries and mutations

Available query and mutation types can be found in the folders `src/server/graphql/queries` and `src/server/graphql/mutations`.

#### Get queries accept different variables depending on the record:
* `<query name> <variables (types)>`
* `userWatches user (id string)`
* `userWatchedBy user (id string)`
* `userSupports user (id string)`
* `userSupportedBy user (id string)`
* `userTrusts user (id string)`
* `userTrustedBy user (id string)`

* `user handle (string)`
* `allUsers (no params)`

* `tree _id (id string)`
* `treesByCategory category (string)`
* `allTrees (no params)`

* `node _id (id string)`
* `nodesInList nodeIDs (array of id strings)`
* `nodesByName name (string)`
* `nodesInHypernode hypernode (id string)`
* `allNodes (no params)`

* `galaxy name (string)`
* `allGalaxies (no params)`

* `constellationByName name (string)`
* `constellationsInList constellationIDs (array of id strings)`
* `allConstellations (no params)`

#### Add mutations accept a new record in the "data" variable:
* `addConstellation`
* `addGalaxy`
* `addNode`
* `addTree`
* `addHypernode`
* `addUser`
* `addSupport`
* `addTrust`
* `addWatch`

#### Delete mutations accept an "_id" variable:
* `deleteConstellation`
* `deleteGalaxy`
* `deleteNode`
* `deleteTree`
* `deleteHypernode`
* `deleteUser`
* `deleteSupport`
* `deleteTrust`
* `deleteWatch`

#### No update mutations have been coded yet.

